import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { exists } from './utils/helpers.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    if (!(await exists(filePath))) throw new Error('FS operation failed');
    const contents = await readFile(filePath, {
      encoding: 'utf8',
    });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
};

await read();
