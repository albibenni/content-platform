import fg from "fast-glob";
import path from "path";
import fs from "fs";

console.log("hello, cool");

const dbPath = path.join(
  __dirname,
  "../../../Documents/MyNotes",
  "ObsidianVault"
);

const files = fg.sync(path.join(dbPath, "**/*.md"));
