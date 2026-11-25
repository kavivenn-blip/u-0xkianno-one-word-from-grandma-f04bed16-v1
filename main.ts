// Write the entry word for make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16.
//
// The program writes one word -- the word a grandma would text about AI --
// to /output/entry.txt. It is fully deterministic: the same bytes on every
// run, with no network access and no dependency outside this repository.
//
// The word: "machene". Grandma tried to type "machine". The brief counts
// "a typo she would actually make", and a misspelling is exactly how a
// grandmother's texting voice shows up on screen: warm, a little baffled,
// typed, not spoken.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_WORD = "machene";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Self-check against the bounty gate: UTF-8 text of 1 to 30 characters,
  // not only white space. Fail loudly instead of writing an entry the
  // sealed scorer would refuse.
  const codePoints = [...ENTRY_WORD].length;
  if (codePoints < 1 || codePoints > 30 || ENTRY_WORD.trim() === "") {
    throw new Error("entry word fails the 1-30 character gate");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_WORD, "utf8");
  chmodSync(OUTPUT_PATH, 0o644);
}

main();
