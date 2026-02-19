import { execSync } from "node:child_process";

try {
  execSync("npm run build", { stdio: "inherit" });
  console.log("✅ Website build successful");
  process.exit(0);
} catch {
  console.error("❌ Website build failed");
  process.exit(1);
}
