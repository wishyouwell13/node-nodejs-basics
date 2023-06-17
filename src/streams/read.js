import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// https://nodejs.org/dist/latest-v18.x/docs/api/stream.html#streampipelinesource-transforms-destination-options
import { pipeline } from 'node:stream/promises';
import { createReadStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  await pipeline(createReadStream(filePath), process.stdout);
};

await read();
