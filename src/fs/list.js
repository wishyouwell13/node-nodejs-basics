import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';
import { exists } from './utils/helpers.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = join(__dirname, 'files');

const list = async () => {
  try {
    if (!(await exists(folder))) throw new Error('FS operation failed');
    const files = await readdir(folder);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err.message);
  }
};

await list();
