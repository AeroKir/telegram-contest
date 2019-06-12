/**
 *
 * @param {Number} normalizeValue
 * @param {Number} rangeMin
 * @param {Number} rangeMax
 * @param {Number} givenRangeMin
 * @param {Number} givenRangeMax
 */

// y = (x - xMin) * (d2 - d1) / (xMax - xMin) + d1

const getNormalizedData = function (normalizeValue, rangeMin, rangeMax, givenRangeMin, givenRangeMax) {
  const normalizedData = (normalizeValue - rangeMin) * (givenRangeMax - givenRangeMin) / (rangeMax - rangeMin) + givenRangeMin;
  return normalizedData;
};

export default getNormalizedData;

console.log(getNormalizedData(0, 0, 0, 0, 0));


function getSorted(a, b) {
  return a - b;
}


const arrArr = [[10, 40], [20, 15], [30, 78], [40, 100], [50, 500], [60, 700], [70, 35], [80, 0], [90, 70], [100, 100000]];
const arrUsers = [56, 27, 73, 30, 30000000, 430, 10, 0, 500, 100000];
const secondVal = [];

for (let i = 0; i < arrArr.length; i++) {
  const arrArrMax = arrArr[i][1];
  secondVal.push(arrArrMax);
  secondVal.sort(getSorted);
}
// console.log(secondVal);

const arrUsersSortedVal = arrUsers.sort(getSorted);
const min = arrUsersSortedVal[0];
const max = arrUsersSortedVal[arrUsersSortedVal.length - 1];
// console.log(max);

// console.log(arrUsersSortedVal[arrUsersSortedVal.length - 1]);

arrUsers.forEach((item) => {
  const normVal = getNormalizedData(item, min, max, 0, 390);
  // console.log(normVal);
});

const vprtWidth = 300;
arrArr.forEach((item, i) => {
  const xAxis = getNormalizedData(i, 0, arrArr.length, 0, vprtWidth);
  // console.log(xAxis);
});
