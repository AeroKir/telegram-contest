import data from './chart_data.json';
import makeMatrix from '../common/make-matrix';
import { getSortedNumbers, getSortedMatrixItems } from '../common/sort-numbers';
import getNormalizedData from './data-normalization';
import { graphAreaWidth, graphAreaHeight } from '../view/set-view';

// Preparing data for visualization

const dataCommonObject = Object.values(data);

// Timescales - X-axis
const firstXAxis = dataCommonObject[0].columns[0].slice(1);
const secondXAxis = dataCommonObject[1].columns[0].slice(1);
const thirdXAxis = dataCommonObject[2].columns[0].slice(1);
const fourthXAxis = dataCommonObject[3].columns[0].slice(1);
const fifthXAxis = dataCommonObject[4].columns[0].slice(1);

// Number of joined followers - Y-axis
const firstNumberOfJoined = dataCommonObject[0].columns[1].slice(1);
const secondNumberOfJoined = dataCommonObject[1].columns[1].slice(1);
const thirdNumberOfJoined = dataCommonObject[2].columns[1].slice(1);
const fourthNumberOfJoined = dataCommonObject[3].columns[1].slice(1);
const fifthNumberOfJoined = dataCommonObject[4].columns[1].slice(1);

// Number of left followers - Y-axis
const firstNumberOfLeft = dataCommonObject[0].columns[2].slice(1);
const secondNumberOfLeft = dataCommonObject[1].columns[2].slice(1);
const thirdNumberOfLeft = dataCommonObject[2].columns[2].slice(1);
const fourthdNumberOfLeft = dataCommonObject[3].columns[2].slice(1);
const fifthNumberOfLeft = dataCommonObject[4].columns[2].slice(1);

/**
 * Make matrix of joined and left followers
 * First element for each sub-array - UNIX timestamp;
 * Second element for each sub-array - number of joined followers
 * Third element for each sub-array - number of left followers
 */
export const firstGraphData = makeMatrix(firstXAxis, firstNumberOfJoined, ...firstNumberOfLeft);
export const secondGraphData = makeMatrix(secondXAxis, secondNumberOfJoined, ...secondNumberOfLeft);
export const thirdGraphData = makeMatrix(thirdXAxis, thirdNumberOfJoined, ...thirdNumberOfLeft);
export const fourthGraphData = makeMatrix(fourthXAxis, fourthNumberOfJoined, ...fourthdNumberOfLeft);
export const fifthGraphData = makeMatrix(fifthXAxis, fifthNumberOfJoined, ...fifthNumberOfLeft);

/**
 * Sort the arrays for get maximum and minimum values. For X and Y-axis
 * Required for substitution in data normalization formula
 */
// X-axis items (length of Timescales - X-axis)
export const firstGraphXAxisMin = 0;
export const firstGraphXAxisMax = firstXAxis.length;

export const secondGraphXAxisMin = 0;
export const secondGraphXAxisMax = secondXAxis.length;

export const thirdGraphXAxisMin = 0;
export const thirdGraphXAxisMax = thirdXAxis.length;

export const fourthGraphXAxisMin = 0;
export const fourthGraphXAxisMax = fourthXAxis.length;

export const fifthGraphXAxisMin = 0;
export const fifthGraphXAxisMax = fifthXAxis.length;


// For joined and left followers
const firstGraphDataSorted = getSortedMatrixItems(firstGraphData, 1, 2);
export const firstGraphDataMin = firstGraphDataSorted[0];
export const firstGraphDataMax = firstGraphDataSorted[firstGraphDataSorted.length - 1];

const secondGraphDataSorted = getSortedMatrixItems(secondGraphData, 1, 2);
export const secondGraphDataMin = secondGraphDataSorted[0];
export const secondGraphDataMax = secondGraphDataSorted[secondGraphDataSorted.length - 1];

const thirdGraphDataSorted = getSortedMatrixItems(thirdGraphData, 1, 2);
export const thirdGraphDataMin = thirdGraphDataSorted[0];
export const thirdGraphDataMax = thirdGraphDataSorted[thirdGraphDataSorted.length - 1];

const fourthGraphDataSorted = getSortedMatrixItems(fourthGraphData, 1, 2);
export const fourthGraphDataMin = fourthGraphDataSorted[0];
export const fourthGraphDataMax = fourthGraphDataSorted[fourthGraphDataSorted.length - 1];

const fifthGraphDataSorted = getSortedMatrixItems(fifthGraphData, 1, 2);
export const fifthGraphDataMin = fifthGraphDataSorted[0];
export const fifthGraphDataMax = fifthGraphDataSorted[fifthGraphDataSorted.length - 1];

/**
 * Normalize data for correct displaying
 */

// ???
const xPointsArr = [];

firstGraphData.forEach((item, i) => {
  const xAxis = getNormalizedData(i, firstGraphXAxisMin, firstGraphXAxisMax, 0, graphAreaWidth);
  xPointsArr.push(xAxis);
});

// ???
const yPointsJoined = [];

firstGraphData.forEach((item, i) => {
  const yPoints = getNormalizedData(firstGraphData[i][1], firstGraphDataMin, firstGraphDataMax, 0, graphAreaHeight);
  yPointsJoined.push(yPoints);
});

const createAxisPoints = (array, arrElement, dataMin, dataMax, viewRangeMin, viewRangeMax) => {
  const axisPoints = array.map((item, i) => {
    if (arrElement === 0) {
      return getNormalizedData(i, dataMin, dataMax, viewRangeMin, viewRangeMax);
    }
    return getNormalizedData(array[i][arrElement], dataMin, dataMax, viewRangeMin, viewRangeMax);
  });
  return axisPoints;
};

export const firstGraphXPoints = createAxisPoints(firstGraphData, 0, firstGraphXAxisMin, firstGraphXAxisMax, 0, graphAreaWidth);
console.log(firstGraphXPoints);

export const firstGraphYPointsJoined = createAxisPoints(firstGraphData, 1, firstGraphDataMin, firstGraphDataMax, 0, graphAreaHeight);
console.log(firstGraphYPointsJoined);

export const firstGraphYPointsLeft = createAxisPoints(firstGraphData, 2, firstGraphDataMin, firstGraphDataMax, 0, graphAreaHeight);
console.log(firstGraphYPointsLeft);
