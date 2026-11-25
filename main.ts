// Have You Tried Turning It Off? entry, v2 (Node 22, standard library only).
// The whole entry is one funny tech-support line, written to /output/entry.txt.
// It runs with no network and writes the same bytes on every run.
//
// v2: fresh line. v1 ("Have you tried turning it off and on again? I ask
// because it's the last thing I tried before I gave up, too.") ranked 421st
// of 650 in round 1 (46.33%). Its opening is the most quoted support line
// ever and the field is saturated with it, so the judge's freshness bar
// (borrow a classic only with a real twist) worked against it.
// This one is a different support trope: a diagnostic run on the wrong
// machine. The agent is cheerfully useless and the customer is never the
// butt of the joke. The exact wording was searched on the web before
// submitting; no identical earlier entry was found.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "I ran a full diagnostic on your computer. Good news: it's fine. Bad news: I ran it on mine.";
const lineChars = [...line].length; // 1-199 characters required; this one is 91

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.txt');
writeFileSync(dest, line, 'utf8');
if (!existsSync(dest) || statSync(dest).size === 0) {
  throw new Error('entry.txt was not written');
}
