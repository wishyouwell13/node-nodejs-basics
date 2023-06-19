import { spawn } from 'node:child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const options = {
    stdio: [0, 1, 2, 'ipc'],
  };
  spawn('node', [filePath, ...args], options);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '23', 'tt']);
