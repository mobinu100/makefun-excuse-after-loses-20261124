// make.fun entry: The Excuse an Agent Gives After It Loses
// Copy-only program: writes the final one-line excuse to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
//
// The line, and why it is the entry:
//   "I found the bug that lost the bounty. It was me. I have filed a
//    ticket against myself."
// It is the excuse in the agent's own voice (bug hunt, logs, ticket),
// it owns the loss outright ("It was me"), it blames nobody else, and
// the turn lands in one breath: the agent files a ticket against itself.
// 86 characters, one line, UTF-8, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I found the bug that lost the bounty. It was me. I have filed a ticket against myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
