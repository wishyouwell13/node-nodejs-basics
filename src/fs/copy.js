import { cp } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { exists } from './utils/helpers';

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = join(__dirname, 'files');
const copyPath = join(__dirname, 'files_copy');

const copy = async (src = path, dest = copyPath) => {
  try {
    const isDestExists = await exists(dest);
    const isSrcExists = await exists(src);

    if (isDestExists || !isSrcExists) throw new Error('FS operation failed');

    await cp(path, dest, {
      recursive: true,
      force: false,
    });
  } catch (e) {
    console.error(e.message);
  }
};

await copy();
