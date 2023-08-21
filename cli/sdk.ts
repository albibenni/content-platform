import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(
  __dirname,
  "../../../Documents/MyNotes",
  "ObsidianVault"
);

interface GetFolderResult {
  folders: {
    absolutePath: string;
    relativePath: string;
    label: string;
  }[];
}

const transformDashCaseToSentenceCase = (str: string) => {
  return str
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

export const getFolders = async (): Promise<GetFolderResult> => {
  const foldersToIgnore = ["Attachment", "node_modules"];

  const folders = (await fs.readdir(DB_PATH)).filter((f) => {
    // Filter out not needed files (.DS_Store, .git,..., etc)
    return !f.includes(".") && !foldersToIgnore.includes(f);
  });
  return {
    folders: folders.map((f) => ({
      absolutePath: path.join(DB_PATH, f),
      relativePath: f,
      label: transformDashCaseToSentenceCase(f),
    })),
  };
};
