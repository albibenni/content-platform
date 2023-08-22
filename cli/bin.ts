import fg from "fast-glob";
import fs from "fs";
import { getFolders } from "./sdk";

const main = async () => {
  const { folders } = await getFolders();
  const files = await fg(
    folders.map((folder) => `${folder.absolutePath}/**/*.md`)
  );
  // const fileContents = files.map((file) => fs.readFileSync(file, "utf8"));

  // console.log(fileContents);
  console.log(files);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
