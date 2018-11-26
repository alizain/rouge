// for the purpose of this interview exercise only
// copied from https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
/* eslint-disable */
export function generateId(len) {
  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}
