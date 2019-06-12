/**
 * Create multidimensional array
 * @param {Object[]} firstArray
 * @param {Object[]} secondArray
 * @param {Object[]} ...rest
 */
// const makeMatrix = (firstArray, secondArray, thirdArray) => {
//   const matrix = [];
//   for (let i = 0; i < firstArray.length; i += 1) {
//     matrix.push([firstArray[i], secondArray[i], thirdArray[i]]);
//   }
//   return matrix;
// };

// const makeMatrix = (firstArray, secondArray) => {
//   const matrix = [];
//   for (let i = 0; i < firstArray.length; i += 1) {
//     matrix.push([firstArray[i], secondArray[i]]);
//   }
//   return matrix;
// };

const makeMatrix = (firstArray, secondArray, ...rest) => {
  const matrix = [];
  firstArray.forEach((item, i) => {
    matrix.push([firstArray[i], secondArray[i], rest[i]]);
  });
  return matrix;
};

export default makeMatrix;
