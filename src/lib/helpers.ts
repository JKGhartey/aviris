import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function copyComponent(
  fileName: string,
  targetDir: string
): Promise<void> {
  const sourcePath = path.join(__dirname, "../../templates", fileName);
  const targetPath = path.join(targetDir, fileName);

  try {
    await fs.copy(sourcePath, targetPath);
  } catch (error) {
    throw new Error(
      `Failed to copy component ${fileName}: ${(error as Error).message}`
    );
  }
}
