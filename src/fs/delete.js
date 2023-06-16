import { unlink } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { exists } from './utils/helpers.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async (filename = 'fileToRemove.txt') => {
  try {
    const path = join(__dirname, 'files', filename);
    if (!(await exists(path))) throw new Error('FS operation failed');
    await unlink(path);
  } catch (e) {
    console.error(e.message);
  }
};
await remove();
