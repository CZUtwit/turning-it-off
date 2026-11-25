// Have You Tried Turning It Off? entry (Node 22, standard library only).
// The whole entry is one funny line a hopeless tech support agent says to a
// desperate customer, written to /output/entry.txt.
// It runs with no network and writes the same bytes on every run.
//
// The joke twists the classic reboot line: the agent asks it, then admits
// it was the last thing he tried before he gave up too. The humour comes
// from the agent's cheerful uselessness, not from the customer.
// Verified 2026-11-25: exact text searched on the web, no identical
// earlier entry found; line is 108 characters, well under the 199 cap.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "Have you tried turning it off and on again? I ask because it's the last thing I tried before I gave up, too.";
const lineChars = [...line].length; // 1-199 characters required; this one is 108

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, line, 'utf8');
if (!existsSync(dest) || statSync(dest).size === 0) {
  throw new Error('entry.txt was not written');
}
