// Arrays - DS

export function reverseArray(a: number[]): number[] {
  const b: number[] = [];

  for (let i = a.length - 1; i >= 0; i--) b.push(a[i]);

  return b;
}

export function reverseArrayInPlace(a: number[]): number[] {
  let l = 0;
  let r = a.length - 1;

  while (l < r) {
    let temp = a[l];

    a[l] = a[r];
    a[r] = temp;

    l++;
    r--;
  }

  return a;
}
