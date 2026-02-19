import semver from "semver";

const required = ">=20.10.0 <21.0.0";

if (!semver.satisfies(process.version, required)) {
  console.error(
    `❌ Node ${process.version} does not satisfy ${required}`
  );
  process.exit(1);
}

console.log("✅ Node version valid:", process.version);
