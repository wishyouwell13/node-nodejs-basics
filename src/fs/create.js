import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile } from 'fs/promises';

import { exists } from './utils/helpers';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
  try {
    const isExists = await exists(pathToFile);
    if (isExists) throw new Error('FS operation failed');
    await writeFile(pathToFile, content, { flag: 'wx' });
  } catch (e) {
    console.error(e.message);
  }
};

await create();
