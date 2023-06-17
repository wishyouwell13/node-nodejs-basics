import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// https://nodejs.org/dist/latest-v18.x/docs/api/stream.html#streampipelinesource-transforms-destination-options
import { pipeline } from 'node:stream/promises';
import { createWriteStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const stream = createWriteStream(filePath, { flags: 'w' });
  //   process.stdin.pipe(stream);
  await pipeline(process.stdin, stream);
};

await write();
