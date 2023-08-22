import fg from "fast-glob";
import { getFolders } from "./sdk";

const main = async () => {
  const { folders } = await getFolders();
  const files = await fg(
    folders.map((folder) => `${folder.absolutePath}/**/*.md`)
  );
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
