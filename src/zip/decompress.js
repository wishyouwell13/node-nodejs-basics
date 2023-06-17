import { createUnzip } from 'zlib';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const readable = createReadStream(join(__dirname, 'files', 'archive.gz'));
  const writable = createWriteStream(join(__dirname, 'files', 'fileToCompress2.txt'));
  try {
    await pipeline(readable, createUnzip(), writable);
  } catch (err) {
    console.error(err.message);
  }
};

await decompress();
