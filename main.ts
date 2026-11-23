import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY: string =
  "I signed up for an app to remind me to cancel free trials, and I forgot to cancel its free trial.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
