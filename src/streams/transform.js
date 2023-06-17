import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const readable = process.stdin;
const writable = process.stdout;

const transformStream = new Transform({
  transform(chunk, enc, cb) {
    const chunkStringified = chunk.toString().trim();
    const reversedChunk = chunkStringified.split('').reverse().join('');
    this.push(reversedChunk + '\n');
    cb();
  },
});

const transform = async () => {
  try {
    await pipeline(readable, transformStream, writable);
  } catch (err) {
    console.err(err.message);
  }
};

await transform();
