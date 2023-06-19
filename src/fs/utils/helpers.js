import { access } from 'fs/promises';

// Function Asynchronously Check if a File Exists
// https://futurestud.io/tutorials/node-js-check-if-a-file-exists
export async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
