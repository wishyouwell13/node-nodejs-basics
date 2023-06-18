import { fork } from 'node:child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  fork(filePath, args, { stdio: [0, 1, 2, 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '23', 'tt']);
