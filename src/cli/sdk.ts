import { log } from "console";
import { async } from "fast-glob";
import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(
  process.cwd(),
  "../../Documents/MyNotes",
  "ObsidianVault"
);

export interface GetFolderResult {
  folders: Folder[];
}

export interface Folder {
  absolutePath: string;
  relativePath: string;
  label: string;
}

const foldersToIgnore = ["Attachment", "node_modules"];

const transformDashCaseToSentenceCase = (str: string) => {
  return str
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

const getFilteredFolders = async (path: string): Promise<string[]> => {
  return (await fs.readdir(path)).filter((f) => {
    // Filter out not needed files (.DS_Store, .git,..., etc)
    return !f.includes(".") && !foldersToIgnore.includes(f);
  });
};

export const getMainFolders = async (): Promise<GetFolderResult> => {
  const folders = await getFilteredFolders(DB_PATH);

  return {
    folders: folders.map((f) => ({
      absolutePath: path.join(DB_PATH, f),
      relativePath: f,
      label: transformDashCaseToSentenceCase(f),
    })),
  };
};

//For subfolders
export const getSubFolders = async (folder: Folder) => {
  const subFolders = await fs.readdir(folder.absolutePath);
  return {
    folders: subFolders.map((f) => ({
      absolutePath: path.join(DB_PATH, f),
      relativePath: f,
      label: transformDashCaseToSentenceCase(f),
    })),
  };
};
