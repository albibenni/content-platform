import fg from "fast-glob";
import fs from "fs";
import { getFolders } from "./sdk";

const main = async () => {
  const { folders } = await getFolders();
  const files = await fg(
    folders.map((folder) => `${folder.absolutePath}/**/*.md`)
  );
  console.log(files);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
