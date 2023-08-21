import fg from "fast-glob";
import path from "path";
import fs from "fs";

const dbPath = path.join(
  __dirname,
  "../../../Documents/MyNotes",
  "ObsidianVault"
);

const files = fg.sync(path.join(dbPath, "**/*.md"));

const foldersToIgnore = ["Attachement", "node_modules"];

const folders = fs.readdirSync(dbPath).filter((f) => {
  // Filter out not needed files (.DS_Store, .git,..., etc)
  return !f.includes(".") && !foldersToIgnore.includes(f);
});

console.log(folders);
