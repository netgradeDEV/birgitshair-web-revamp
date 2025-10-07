import { build } from "esbuild";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const entry = resolve("tests/contact-schema.test.ts");
const tempDir = mkdtempSync(join(tmpdir(), "contact-tests-"));
const outfile = join(tempDir, "contact-schema.test.mjs");

await build({
  entryPoints: [entry],
  outfile,
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node18",
  sourcemap: "inline",
  define: {
    "process.env.NODE_ENV": '"test"',
  },
});

try {
  const module = await import(pathToFileURL(outfile).href);
  if (typeof module.run !== "function") {
    throw new Error("Test module does not export a run function");
  }

  const results = await module.run();
  let failed = 0;

  for (const result of results) {
    if (result.passed) {
      console.log(`✔ ${result.name}`);
    } else {
      failed += 1;
      console.error(`✖ ${result.name}`);
      if (result.error instanceof Error) {
        console.error(result.error.stack);
      } else if (result.error !== undefined) {
        console.error(result.error);
      }
    }
  }

  if (failed > 0) {
    process.exitCode = 1;
  } else {
    console.log(`\n${results.length} tests passed.`);
  }
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
