// make.fun entry: The Excuse an Agent Gives After It Loses
// Copy-only program: writes the final one-line excuse to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I found the bug that lost the bounty. It was me. I have filed a ticket against myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
