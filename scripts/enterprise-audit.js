import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const results = {
  eslint: { passed: false, warnings: 0, errors: 0, message: "Not run" },
  typescript: { passed: false, errors: 0, skipped: false, message: "Not run" },
  audit: {
    passed: false,
    critical: 0,
    high: 0,
    moderate: 0,
    low: 0,
    message: "Not run",
  },
  depcheck: {
    passed: false,
    unusedDependencies: [],
    unusedDevDependencies: [],
    message: "Not run",
  },
  madge: { passed: false, circular: [], message: "Not run" },
  build: { passed: false, skipped: false, message: "Not run" },
  bundle: {
    ran: false,
    passed: false,
    skipped: false,
    totalBytes: 0,
    message: "Not run",
  },
};

const packageJsonPath = path.resolve("package.json");
const packageJson = fs.existsSync(packageJsonPath)
  ? JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
  : { scripts: {} };

function section(title) {
  console.log(`\n--- ${title} ---`);
}

function runCommand(cmd, opts = {}) {
  return execSync(cmd, {
    stdio: "pipe",
    encoding: "utf8",
    ...opts,
  });
}

function parseEslintCounts(output) {
  const warningMatch = output.match(/(\d+) warnings?/i);
  const errorMatch = output.match(/(\d+) errors?/i);
  return {
    warnings: warningMatch ? Number(warningMatch[1]) : 0,
    errors: errorMatch ? Number(errorMatch[1]) : 0,
  };
}

function getVulnerabilityCounts(auditJson) {
  const fallback = { critical: 0, high: 0, moderate: 0, low: 0 };
  if (!auditJson || typeof auditJson !== "object") return fallback;

  if (auditJson.metadata?.vulnerabilities) {
    return {
      critical: auditJson.metadata.vulnerabilities.critical || 0,
      high: auditJson.metadata.vulnerabilities.high || 0,
      moderate: auditJson.metadata.vulnerabilities.moderate || 0,
      low: auditJson.metadata.vulnerabilities.low || 0,
    };
  }

  return fallback;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(2)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

function collectFileSizes(dir) {
  if (!fs.existsSync(dir)) return [];
  const stack = [dir];
  const files = [];

  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile()) {
        const stats = fs.statSync(fullPath);
        files.push({ file: fullPath, size: stats.size });
      }
    }
  }

  return files;
}

console.log("=== ENTERPRISE REPOSITORY AUDIT ===");

section("CHECK 1: ESLINT");
try {
  const output = runCommand("npx eslint . --ext .ts,.tsx,.js,.jsx");
  const counts = parseEslintCounts(output);
  results.eslint = {
    passed: true,
    warnings: counts.warnings,
    errors: counts.errors,
    message: "ESLint completed successfully.",
  };
  console.log(output || "No ESLint issues reported.");
} catch (error) {
  const stdout = error.stdout?.toString() || "";
  const stderr = error.stderr?.toString() || "";
  const combined = `${stdout}\n${stderr}`.trim();
  const counts = parseEslintCounts(combined);
  results.eslint = {
    passed: false,
    warnings: counts.warnings,
    errors: counts.errors || 1,
    message: "ESLint reported issues.",
  };
  console.log(combined || error.message);
}

section("CHECK 2: TYPESCRIPT STRICT CHECK");
if (fs.existsSync(path.resolve("tsconfig.json"))) {
  try {
    const output = runCommand("npx tsc --noEmit");
    results.typescript = {
      passed: true,
      errors: 0,
      skipped: false,
      message: "TypeScript check passed.",
    };
    console.log(output || "TypeScript type check passed with no output.");
  } catch (error) {
    const stdout = error.stdout?.toString() || "";
    const stderr = error.stderr?.toString() || "";
    const combined = `${stdout}\n${stderr}`.trim();
    const errorCount = (combined.match(/error TS\d+:/g) || []).length || 1;
    results.typescript = {
      passed: false,
      errors: errorCount,
      skipped: false,
      message: "TypeScript check failed.",
    };
    console.log(combined || error.message);
  }
} else {
  results.typescript = {
    passed: false,
    errors: 0,
    skipped: true,
    message: "Skipped: tsconfig.json not found.",
  };
  console.log(results.typescript.message);
}

section("CHECK 3: VULNERABILITY SCAN");
try {
  const output = runCommand("npm audit --json");
  const parsed = JSON.parse(output);
  const vulns = getVulnerabilityCounts(parsed);
  results.audit = {
    passed: vulns.critical + vulns.high + vulns.moderate + vulns.low === 0,
    ...vulns,
    message: "npm audit completed.",
  };
} catch (error) {
  const stdout = error.stdout?.toString() || "";
  const parsed = stdout ? JSON.parse(stdout) : null;
  const vulns = getVulnerabilityCounts(parsed);
  results.audit = {
    passed: false,
    ...vulns,
    message: "npm audit found vulnerabilities or failed.",
  };
}
console.log(
  `critical=${results.audit.critical}, high=${results.audit.high}, moderate=${results.audit.moderate}, low=${results.audit.low}`,
);

section("CHECK 4: UNUSED DEPENDENCIES");
try {
  const output = runCommand("npx depcheck --json");
  const parsed = output ? JSON.parse(output) : {};
  const unusedDependencies = parsed.dependencies || [];
  const unusedDevDependencies = parsed.devDependencies || [];
  results.depcheck = {
    passed: unusedDependencies.length === 0 && unusedDevDependencies.length === 0,
    unusedDependencies,
    unusedDevDependencies,
    message: "depcheck completed.",
  };
} catch (error) {
  const stdout = error.stdout?.toString() || "";
  let parsed = {};
  try {
    parsed = stdout ? JSON.parse(stdout) : {};
  } catch {
    parsed = {};
  }
  results.depcheck = {
    passed: false,
    unusedDependencies: parsed.dependencies || [],
    unusedDevDependencies: parsed.devDependencies || [],
    message: "depcheck failed.",
  };
}
console.log("Unused dependencies:", results.depcheck.unusedDependencies);
console.log("Unused devDependencies:", results.depcheck.unusedDevDependencies);

section("CHECK 5: CIRCULAR DEPENDENCIES");
try {
  const output = runCommand("npx madge --circular .");
  const lines = output
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const circularLines = lines.filter((line) => /circular/i.test(line) || /→|->/.test(line));
  results.madge = {
    passed: !/Found\s+\d+\s+circular/i.test(output),
    circular: circularLines,
    message: "madge completed.",
  };
  console.log(output);
} catch (error) {
  const stdout = error.stdout?.toString() || "";
  const stderr = error.stderr?.toString() || "";
  const combined = `${stdout}\n${stderr}`.trim();
  const lines = combined
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const circular = lines.filter((line) => /→|->|circular/i.test(line));
  results.madge = {
    passed: false,
    circular,
    message: "madge detected circular dependencies or failed.",
  };
  console.log(combined || error.message);
}

section("CHECK 6: BUILD VERIFICATION");
if (packageJson.scripts?.build) {
  try {
    const output = runCommand("npm run build");
    results.build = {
      passed: true,
      skipped: false,
      message: "Build completed successfully.",
    };
    console.log(output);
  } catch (error) {
    const stdout = error.stdout?.toString() || "";
    const stderr = error.stderr?.toString() || "";
    results.build = {
      passed: false,
      skipped: false,
      message: "Build failed.",
    };
    console.log(`${stdout}\n${stderr}`.trim() || error.message);
  }
} else {
  results.build = {
    passed: false,
    skipped: true,
    message: "Skipped: no build script found.",
  };
  console.log(results.build.message);
}

section("CHECK 7: BUNDLE SIZE (VITE)");
const hasViteConfig = ["vite.config.ts", "vite.config.js", "vite.config.mjs", "vite.config.cjs"].some((file) =>
  fs.existsSync(path.resolve(file)),
);

if (hasViteConfig) {
  results.bundle.ran = true;
  try {
    const output = runCommand("npx vite build --mode production");
    const distFiles = collectFileSizes(path.resolve("dist"));
    const totalBytes = distFiles.reduce((sum, file) => sum + file.size, 0);
    results.bundle = {
      ran: true,
      passed: true,
      skipped: false,
      totalBytes,
      message: "Vite production build completed.",
    };
    console.log(output);
    console.log(`Total dist bundle size: ${formatBytes(totalBytes)}`);
  } catch (error) {
    const stdout = error.stdout?.toString() || "";
    const stderr = error.stderr?.toString() || "";
    results.bundle = {
      ran: true,
      passed: false,
      skipped: false,
      totalBytes: 0,
      message: "Vite production build failed.",
    };
    console.log(`${stdout}\n${stderr}`.trim() || error.message);
  }
} else {
  results.bundle = {
    ran: false,
    passed: false,
    skipped: true,
    totalBytes: 0,
    message: "Skipped: Vite config not detected.",
  };
  console.log(results.bundle.message);
}

section("FINAL SUMMARY");
const securityScore = Math.max(
  0,
  100 - (results.audit.critical * 30 + results.audit.high * 15 + results.audit.moderate * 7 + results.audit.low * 3),
);
const codeQualityScore = Math.max(
  0,
  100 - (results.eslint.errors * 8 + results.eslint.warnings * 2 + results.typescript.errors * 10),
);
const dependencyHealth = results.depcheck.unusedDependencies.length + results.depcheck.unusedDevDependencies.length === 0 ? "Healthy" : "Needs Review";
const buildStatus = results.build.skipped
  ? "Skipped"
  : results.build.passed && (results.bundle.skipped || results.bundle.passed)
    ? "Passing"
    : "Failing";

const riskScore =
  (100 - securityScore) * 0.45 +
  (100 - codeQualityScore) * 0.35 +
  (buildStatus === "Failing" ? 20 : 0) +
  ((results.depcheck.unusedDependencies.length + results.depcheck.unusedDevDependencies.length) > 0 ? 10 : 0);

let overallRiskLevel = "Low";
if (riskScore >= 75) {
  overallRiskLevel = "Critical";
} else if (riskScore >= 50) {
  overallRiskLevel = "High";
} else if (riskScore >= 25) {
  overallRiskLevel = "Medium";
}

console.log(`Security Score: ${securityScore}/100`);
console.log(`Code Quality Score: ${codeQualityScore}/100`);
console.log(`Dependency Health: ${dependencyHealth}`);
console.log(`Build Status: ${buildStatus}`);
console.log(`Overall Risk Level: ${overallRiskLevel}`);
