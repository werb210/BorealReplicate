#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';

const MAX_FILE_SIZE = 1 * 1024 * 1024;
const FORBIDDEN_DIRS = ['node_modules', 'dist', 'build', '.vite', '.next', 'out'];
const allowed = ['src/', 'public/', 'scripts/', '.github/', '.githooks/', 'client/', 'server/', 'shared/', 'docs/', 'vendor/', 'tests/'];

const allowedRootFiles = new Set([
  '.dockerignore',
  '.editorconfig',
  '.env',
  '.env.example',
  '.eslintignore',
  '.eslintrc.cjs',
  '.gitattributes',
  '.gitignore',
  '.npmrc',
  '.nvmrc',
  'components.json',
  'Dockerfile',
  'drizzle.config.ts',
  'package-lock.json',
  'package.json',
  'postcss.config.cjs',
  'Procfile',
  'staticwebapp.config.json',
  'tailwind.config.ts',
  'tsconfig.json',
  'vite.config.ts',
  'src',
]);

function run(cmd) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
}

function getTrackedFiles() {
  const out = run('git ls-files -z');
  return out ? out.split('\0').filter(Boolean) : [];
}

function fail(message) {
  console.error(`\n❌ repo-guard failed: ${message}\n`);
  process.exit(1);
}

function isRootFile(file) {
  return !file.includes('/');
}

function hasAllowedRoot(file) {
  return allowed.some((root) => file.startsWith(root));
}

function main() {
  if (fs.existsSync('yarn.lock') && fs.existsSync('package-lock.json')) {
    fail('Multiple lockfiles detected');
  }

  const tracked = getTrackedFiles();

  const forbiddenTracked = tracked.filter((file) =>
    FORBIDDEN_DIRS.some((dir) => file === dir || file.startsWith(`${dir}/`) || file.includes(`/${dir}/`)),
  );

  if (forbiddenTracked.length > 0) {
    fail(
      `forbidden tracked build/dependency paths detected:\n${forbiddenTracked
        .slice(0, 20)
        .map((f) => `  - ${f}`)
        .join('\n')}`,
    );
  }

  for (const file of tracked) {
    if (!hasAllowedRoot(file) && !(isRootFile(file) && allowedRootFiles.has(file))) {
      fail(`Invalid root file: ${file}`);
    }

    if (file.startsWith('public/images/') || file.startsWith('client/public/images/')) {
      fail('Images must be CDN-hosted, not in repo');
    }

    if (file.match(/\.(mp4|mov|avi)$/i)) {
      fail(`Video files not allowed in repo: ${file}`);
    }

    if (file.match(/\.(psd|fig|sketch)$/i)) {
      fail(`Design files not allowed: ${file}`);
    }

    if (file.endsWith('.zip')) {
      fail('Archives not allowed');
    }

    const { size } = fs.statSync(file);

    if (size > MAX_FILE_SIZE) {
      fail(`File too large (>1 MiB): ${file}`);
    }
  }

  console.log('✅ repo-guard passed: tracked files satisfy size, type, root-path, and lockfile constraints.');
}

main();
