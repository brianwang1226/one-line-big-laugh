// One Line Big Laugh: a single sharp one-liner.
// The sting has to land on the first read, so it names the exact failing.
// Ours writes code the way I write excuses: fast, confident, and wrong.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "My agent writes code like I write excuses: fast, confident, and wrong in ways I only discover in production.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
