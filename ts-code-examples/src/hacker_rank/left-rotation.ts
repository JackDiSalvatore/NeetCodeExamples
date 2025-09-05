// Hint: copy two arrays into place

function rotateLeft(d: number, arr: number[]): number[] {
  const first = [];
  const last = [];

  for (let i = d; i <= arr.length - 1; i++) first.push(arr[i]);

  for (let i = 0; i <= d - 1; i++) last.push(arr[i]);

  return [...first, ...last];
}
