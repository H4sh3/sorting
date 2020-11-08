import { partition, quickSort } from "./quickSort";
import { isSorted } from "./etc";


/* it('should return partition', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const p = partition(arr, 0, arr.length)
  expect(p).toBe(5)
}) */

it('should sort quickly', () => {
  const arr = [3, 4, 6, 1, 78, 223, 156, 22, 1, 23, 2];
  const sorted = quickSort(arr, 0, arr.length)
  expect(isSorted(sorted)).toBeTruthy()
})