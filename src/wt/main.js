import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cpus } from 'os';
import { log } from 'console';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'worker.js');

const OFFSET = 10;

const createWorker = (num) => {
  return new Promise((resolve) => {
    const worker = new Worker(filePath, { workerData: OFFSET + num });

    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
};

const performCalculations = async () => {
  try {
    const cores = cpus().length;
    const result = await Promise.all(Array.from({ length: cores }, (_, idx) => createWorker(idx)));
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

await performCalculations();
