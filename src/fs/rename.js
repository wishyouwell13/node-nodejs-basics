import { fileURLToPath } from 'url';
import { dirname, join, parse, basename } from 'path';
import { rename as fsRename } from 'fs/promises';

import { exists } from './utils/helpers.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    const path = join(__dirname, 'files', 'wrongFilename.txt');
    const filename = basename(path, '.txt');
    const target = join(parse(path).dir, filename + '.md');

    const isDestExists = await exists(path);
    const isSrcExists = await exists(target);

    if (isSrcExists || !isDestExists) throw new Error('FS operation failed');

    await fsRename(path, target);
  } catch (e) {
    console.error(e.message);
  }
};

await rename();
