import fg from "fast-glob";
import fs from "fs";

const files = fg.sync(path.join(dbPath, "**/*.md"));
