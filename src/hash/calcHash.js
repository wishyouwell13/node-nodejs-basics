import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const fileData = await readFile(filePath, { encoding: 'utf-8' });
  const fileHash = createHash('sha256').update(fileData).digest('hex');
  console.log(fileHash);
};

await calculateHash();
