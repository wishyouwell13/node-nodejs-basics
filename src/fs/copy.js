import { cp, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, 'files');
const copyPath = join(__dirname, 'files_copy');

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
const copy = async (src = path, dest = copyPath) => {
  try {
    const isDestExists = await exists(dest);
    const isSrcExists = await exists(src);

    if (isDestExists || !isSrcExists) throw new Error('FS operation failed 2');

    await cp(path, dest, {
      recursive: true,
      force: false,
    });
  } catch (e) {
    console.error(e.message);
  }
};

await copy();
