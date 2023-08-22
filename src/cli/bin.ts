import fg from "fast-glob";
import { getMainFolders } from "./sdk";

const main = async () => {
  const { folders } = await getMainFolders();
  const files = await fg(
    folders.map((folder) => `${folder.absolutePath}/**/*.md`)
  );
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
