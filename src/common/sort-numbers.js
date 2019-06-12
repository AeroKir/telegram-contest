/**
 * Sorting numbers
 * @param {Number} a
 * @param {Number} b
 */
export const getSortedNumbers = (a, b) => a - b;

/**
 *
 * @param {Object[]} matrix
 * @param {Number} elemOne
 * @param {Number} elemTwo
 */
export const getSortedMatrixItems = (matrix, elemOne, elemTwo) => {
  const sortedValues = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const valueOne = matrix[i][elemOne];
    const valueTwo = matrix[i][elemTwo];
    sortedValues.push(valueOne);
    sortedValues.push(valueTwo);
    sortedValues.sort(getSortedNumbers);
  }
  return sortedValues;
};
