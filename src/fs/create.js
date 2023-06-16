import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile, access } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, 'files', 'fresh.txt');

// Function Asynchronously Check if a File Exists
// https://futurestud.io/tutorials/node-js-check-if-a-file-exists
async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const create = async (content = 'I am fresh and young') => {
  try {
    const isExists = await exists(pathToFile);
    if (isExists) throw new Error('FS operation failed');
    await writeFile(pathToFile, content, { flag: 'wx' });
  } catch (e) {
    console.error(e.message);
  }
};

await create();
