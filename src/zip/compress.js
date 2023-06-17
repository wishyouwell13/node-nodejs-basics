import { createGzip } from 'zlib';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

//fileToCompress.txt
const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const readable = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
  const writable = createWriteStream(join(__dirname, 'files', 'archive.gz'));
  try {
    await pipeline(readable, createGzip(), writable);
  } catch (err) {
    console.error(err.message);
  }
};

await compress();
