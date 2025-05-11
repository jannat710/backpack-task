// 08. Task: Find Maximum Value:
function findMaximum(numbers: number[]): number {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

const values = [3, 6, 7, 1];
findMaximum(values);
