import { sep, dirname, basename } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';

import dataA from './files/a.json' assert { type: 'json' };
import dataB from './files/b.json' assert { type: 'json' };
import './files/c.js';

const PORT = 3000;
const unknownObject = Math.random() > 0.5 ? dataA : dataB;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
}).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

console.log(unknownObject);

export { unknownObject, myServer };
