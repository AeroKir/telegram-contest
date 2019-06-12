import data from './data/chart_data.json';
import { firstGraphJoined, firstGraphLeft } from './view/chart-view';
// import dataHandler from './data/data-handler';
import getNormalizedData from './data/data-normalization';
import getDateAndMonth from './common/date-time';
import switchModeButton from './switch-screen-mode';
import { x, y } from './grid';
import firstXAxis from './data/data-handler';
import './main.css';


function getSorted(a, b) {
  return a - b;
}

const n = Object.values(data);
console.log(n);
const timeScale = n[0].columns[0].slice(1);
const numbOfFollowers = n[1].columns[1].slice(1);
const numOfFollowersLeft = n[0].columns[2].slice(1);
const matrix = [];

for (let i = 0; i < timeScale.length; i++) {
  matrix.push([timeScale[i], numbOfFollowers[i]]);
}
const m = n[4].columns[4].slice(1);
// console.log(m.length);

// // j.sort(getSorted);
// // m.sort(getSorted);
// console.log(j);
// j.forEach((element) => {
//   const dt = getDateAndMonth(element);
//   // console.log(dt);
// });

m.forEach((element) => {
  const dt = getDateAndMonth(element);
  // console.log(dt);
});

const graph = document.getElementById('graph');
// graph.addEventListener('mouseover', () => {
//   const coord = graph.getBoundingClientRect();
//   console.log(coord);
// });
// console.log(y[y.length - 1]);
const yA = y[y.length - 1];


const arrArr = [[10, 40], [20, 15], [30, 78], [40, 100], [50, 0], [60, 70], [70, 35], [80, 2], [90, 70], [100, 90], [5, 25], [7, 48], [201, 8], [0, 100]];
const view = [[10, 10], [20, 20], [30, 30], [40, 40], [50, 50], [60, 60], [70, 70], [80, 80], [90, 90], [100, 100]];
const arrUsers = [56, 27, 73, 30, 3000000, 430, 10, 0, 500, 100000];
// const arrUsers = [500, 600, 700, 500, 900, 1000, 1100, 520, 1300, 2];
const srt = numbOfFollowers.sort(getSorted);
// console.log(srt);


const yTick = yA / arrUsers.length;
// console.log(yTick);
const tickLine = [0];

for (let i = 0; i < arrUsers.length; i += yTick) {
  let yT = 0;
  yT += yTick;
  tickLine.push(yT);
}
// console.log(tickLine);

const yCoordCalculator = (val1) => {
  let yVal;
  yVal = val1 * 1;
  // if (val1 > yA) {
  //   yVal = val1 / yA;
  // } else {
  //   yVal = val1 * 1;
  // }
  // yVal = val1 / 2;
  // if (val1 > yA) {
  //   yVal = (val1 * yA) / 1000;
  // } else {
  //   yVal = (val1 * yA) / 100;
  // }
  // for (let i = 0; i < val1.length; i++) {
  //   if (val1[i] > 100) {
  //     yVal = (val1[i] * yA) / 1000;
  //     // console.log(yVal);
  //   } else {
  //     yVal = (val1[i] * yA) / 100;
  //     // console.log(yVal);
  //   }
  // }
  return yVal;
};

// console.log(yCoordCalculator(arrUsers));

// arrUsers.forEach((user, i) => {
//   console.log(yCoordCalculator());
// });

const arrUsersSortedVal = arrUsers.sort(getSorted);
const vprtWidth = 500;

const sortedSecondVal = [];

for (let i = 0; i < arrArr.length; i += 1) {
  const arrArrMax = arrArr[i][1];
  sortedSecondVal.push(arrArrMax);
  sortedSecondVal.sort(getSorted);
}

const xPointsArr = [];

// const vprtWidth = 300;
arrArr.forEach((item, i) => {
  const xAxis = getNormalizedData(i, 0, arrArr.length, 0, vprtWidth);
  xPointsArr.push(xAxis);
  // console.log(xAxis);
});

// for (let i = 0; i < arrArr.length; i++) {
//   const xPoints = getNormalizedData(arrArr[i][0], 0, arrArr.length, 0, vprtWidth);
//   xPointsArr.push(xPoints);
// }

console.log(xPointsArr);


const yPointsArr = [];

arrArr.forEach((item, i) => {
  const yPoints = getNormalizedData(arrArr[i][1], sortedSecondVal[0], sortedSecondVal[sortedSecondVal.length - 1], 10, yA);
  yPointsArr.push(yPoints);
});

// for (let i = 0; i < arrArr.length; i += 1) {
//   const yPoints = getNormalizedData(arrArr[i][1], sortedSecondVal[0], sortedSecondVal[sortedSecondVal.length - 1], 10, yA);
//   yPointsArr.push(yPoints);
// }
console.log(yPointsArr);

arrArr.forEach((eleM, i) => {
  // const testPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  // // testPoint.setAttributeNS(null, 'class', 'point-join');
  // // testPoint.setAttributeNS(null, 'cx', eleM[0]);
  // testPoint.setAttributeNS(null, 'cx', getNormalizedData(i, 0, arrArr.length, 0, vprtWidth));
  // // testPoint.setAttributeNS(null, 'cy', (arrUsers[i] * yA) / 100);
  // // testPoint.setAttributeNS(null, 'cy', `${yCoordCalculator(arrUsers[i])}`);
  // // testPoint.setAttributeNS(null, 'cy', `${getNormalizedData(arrUsers[i], arrUsersSortedVal[0], arrUsersSortedVal[arrUsersSortedVal.length - 1], 10, yA)}`);
  // testPoint.setAttributeNS(null, 'cy', `${getNormalizedData(eleM[1], sortedSecondVal[0], sortedSecondVal[sortedSecondVal.length - 1], 10, yA)}`);
  // testPoint.setAttributeNS(null, 'r', '3');
  // testPoint.setAttributeNS(null, 'stroke', 'green');
  // testPoint.setAttributeNS(null, 'stroke-width', '3');
  // // testPoint.setAttributeNS(null, 'transform', 'translate(-100, 590) scale(1, -1)');
  // testPoint.setAttributeNS(null, 'transform', 'translate(0, 490) scale(1, -1)');
  // // testPoint.setAttributeNS(null, 'transform', `translate(0, 480) matrix(1, 0, 0, -1, 0, ${yA})`);
  // testGraph.appendChild(testPoint);

  // const yPoints = getNormalizedData(eleM[1], sortedSecondVal[0], sortedSecondVal[sortedSecondVal.length - 1], 10, yA);
  // // const yPointsArr = yPoints.split(',');
  // const yPointsArr = [];
  // yPointsArr.push(yPoints);
  // yPointsArr.concat();
  // console.log(yPointsArr.concat());


  // const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  // line.setAttributeNS(null, 'x1', `${xPointsArr[i]}`);
  // line.setAttributeNS(null, 'x2', `${xPointsArr[i + 1]}`);
  // line.setAttributeNS(null, 'y1', `${yPointsArr[i]}`);
  // line.setAttributeNS(null, 'y2', `${yPointsArr[i + 1]}`);
  // line.setAttributeNS(null, 'stroke', 'green');
  // line.setAttributeNS(null, 'stroke-width', '2');
  // // line.setAttributeNS(null, 'transform', 'translate(-350, 290) scale(1, -1)');
  // line.setAttributeNS(null, 'transform', 'translate(0, 490) scale(1, -1)');

  // testGraph.appendChild(line);
});


const xAxis = timeScale.length;
const xAxisLeft = timeScale.length;
const yAxis = numbOfFollowers.length;
const dotY = arrArr[0][1];

// matrix.forEach((el, i) => {
//   const nOf = numbOfFollowers.join(' ');
//   // console.log(numbOfFollowers);

//   // Points join followers
//   const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//   point.setAttributeNS(null, 'class', 'point-join');
//   point.setAttributeNS(null, 'cx', xAxis);
//   point.setAttributeNS(null, 'cy', numbOfFollowers[i]);
//   point.setAttributeNS(null, 'r', '3');
//   point.setAttributeNS(null, 'stroke', 'green');
//   point.setAttributeNS(null, 'stroke-width', '3');
//   point.setAttributeNS(null, 'transform', 'translate(-100, 590) scale(1, -1)');
//   graph.appendChild(point);

//   // Points left followers
//   // const pointLeft = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//   // pointLeft.setAttributeNS(null, 'cx', xAxis);
//   // pointLeft.setAttributeNS(null, 'cy', numOfFollowersLeft[i]);
//   // pointLeft.setAttributeNS(null, 'r', '3');
//   // pointLeft.setAttributeNS(null, 'stroke', 'red');
//   // pointLeft.setAttributeNS(null, 'stroke-width', '3');
//   // pointLeft.setAttributeNS(null, 'transform', 'translate(-100, 290) scale(1, -1)');
//   // graph.appendChild(pointLeft);

//   // Graph join followers
//   // const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   // line.setAttributeNS(null, 'd', `M${xAxis} ${numbOfFollowers[i]} L${xAxis += 10} ${numbOfFollowers[i + 1]}`);
//   // line.setAttributeNS(null, 'stroke', 'green');
//   // line.setAttributeNS(null, 'stroke-width', '1');
//   // line.setAttributeNS(null, 'stroke-linecap', 'square');
//   // line.setAttributeNS(null, 'stroke-linejoin', 'miter');
//   // line.setAttributeNS(null, 'fill', 'none');
//   // line.setAttributeNS(null, 'transform', 'translate(-100, 490) scale(1, -1)');

//   // graph.appendChild(line);

//   // Graph left followers
//   // const lineLeft = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   // lineLeft.setAttributeNS(null, 'd', `M${xAxisLeft} ${numOfFollowersLeft[i]} L${xAxisLeft += 10} ${numOfFollowersLeft[i + 1]}`);
//   // lineLeft.setAttributeNS(null, 'stroke', 'red');
//   // lineLeft.setAttributeNS(null, 'stroke-width', '1');
//   // lineLeft.setAttributeNS(null, 'stroke-linecap', 'square');
//   // lineLeft.setAttributeNS(null, 'stroke-linejoin', 'miter');
//   // lineLeft.setAttributeNS(null, 'fill', 'none');
//   // lineLeft.setAttributeNS(null, 'transform', 'translate(-100, 290) scale(1, -1)');

//   // graph.appendChild(lineLeft);

//   // const canvasHorizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//   // canvasHorizontalLine.setAttributeNS(null, 'x1', '10');
//   // canvasHorizontalLine.setAttributeNS(null, 'x2', '99%');
//   // canvasHorizontalLine.setAttributeNS(null, 'y1', numbOfFollowers[i] + 50);
//   // canvasHorizontalLine.setAttributeNS(null, 'y2', numbOfFollowers[i] + 50);
//   // canvasHorizontalLine.setAttributeNS(null, 'stroke', 'red');
//   // canvasHorizontalLine.setAttributeNS(null, 'stroke-width', '2');

//   // graph.appendChild(canvasHorizontalLine);

//   // const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//   // group.setAttributeNS(null, 'class', 'line');

//   const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
//   line.setAttributeNS(null, 'x1', xAxis);
//   line.setAttributeNS(null, 'x2', xAxis += 10);
//   line.setAttributeNS(null, 'y1', `${numbOfFollowers[i]}`);
//   line.setAttributeNS(null, 'y2', `${numbOfFollowers[i + 1]}`);
//   line.setAttributeNS(null, 'stroke', 'green');
//   line.setAttributeNS(null, 'stroke-width', '2');
//   // line.setAttributeNS(null, 'transform', 'translate(-350, 290) scale(1, -1)');
//   line.setAttributeNS(null, 'transform', 'translate(-100, 590) scale(1, -1)');

//   // group.appendChild(line);
//   graph.appendChild(line);

//   const bbox = line.getBBox();
//   console.log(bbox.y);
//   console.log(bbox.x);
//   console.log(bbox.height);

//   // const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
//   // line.setAttributeNS(null, 'points', `${xAxis} ${el[1]}`);
//   // line.setAttributeNS(null, 'stroke', 'red');
//   // line.setAttributeNS(null, 'stroke-width', '2');
// });

const pointInfo = document.querySelectorAll('.point-join');
pointInfo.forEach((point, i) => {
  point.addEventListener('mouseover', () => {
    // console.log(numbOfFollowers[i], getDateAndMonth(timeScale[i]));
  });
});

// General graph
const generalGraph = n[4].columns[0].slice(1);
const generalGraphTimeScale = generalGraph.concat(generalGraph);
// console.log(generalGraphTimeScale);

const generalGraphXAxis = generalGraphTimeScale.length;
const generalGraphXAxisLeft = generalGraphTimeScale.length;
const fol1 = n[4].columns[1].slice(1);
const fol2 = n[4].columns[2].slice(1);
const fol3 = n[4].columns[3].slice(1);
const fol4 = n[4].columns[4].slice(1);
const generalNumOfJoined = fol1.concat(fol2);
const generalNumOfLeft = fol3.concat(fol4);
// console.log(typeof generalGraphXAxisLeft);

const generalMatrix = [];

for (let i = 0; i < timeScale.length; i++) {
  generalMatrix.push([generalGraphTimeScale[i], generalNumOfJoined[i]]);
  // console.log(generalMatrix);
}

const subGraph = document.getElementById('sub-graph');

// generalMatrix.forEach((element, i) => {
//   // Points join followers
//   // const pointJoined = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//   // pointJoined.setAttributeNS(null, 'class', 'point-join');
//   // pointJoined.setAttributeNS(null, 'cx', generalGraphXAxis);
//   // pointJoined.setAttributeNS(null, 'cy', generalNumOfJoined[i] / 30000);
//   // pointJoined.setAttributeNS(null, 'r', '3');
//   // pointJoined.setAttributeNS(null, 'stroke', 'green');
//   // pointJoined.setAttributeNS(null, 'stroke-width', '3');
//   // pointJoined.setAttributeNS(null, 'transform', 'translate(-900, 199) scale(1, -1)');
//   // subGraph.appendChild(pointJoined);

//   // Points left followers
//   // const pointLeft = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//   // // pointLeft.setAttributeNS(null, 'class', 'point-join');
//   // pointLeft.setAttributeNS(null, 'cx', generalGraphXAxisLeft);
//   // pointLeft.setAttributeNS(null, 'cy', generalNumOfLeft[i] / 30000);
//   // pointLeft.setAttributeNS(null, 'r', '3');
//   // pointLeft.setAttributeNS(null, 'stroke', 'red');
//   // pointLeft.setAttributeNS(null, 'stroke-width', '3');
//   // pointLeft.setAttributeNS(null, 'transform', 'translate(-900, 199) scale(1, -1)');
//   // subGraph.appendChild(pointLeft);

//   // Graph join followers
//   const lineJoinGen = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   lineJoinGen.setAttributeNS(null, 'd', `M${generalGraphXAxis} ${generalNumOfJoined[i] * 0.00001} L${generalGraphXAxis += 10} ${generalNumOfJoined[i + 1] * 0.00001}`);
//   lineJoinGen.setAttributeNS(null, 'stroke', 'green');
//   lineJoinGen.setAttributeNS(null, 'stroke-width', '1');
//   lineJoinGen.setAttributeNS(null, 'stroke-linecap', 'square');
//   lineJoinGen.setAttributeNS(null, 'stroke-linejoin', 'miter');
//   lineJoinGen.setAttributeNS(null, 'fill', 'none');
//   lineJoinGen.setAttributeNS(null, 'transform', 'translate(-900, 199) scale(1, -1)');

//   subGraph.appendChild(lineJoinGen);

//   // Graph left followers
//   const lineLeftGen = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//   lineLeftGen.setAttributeNS(null, 'd', `M${generalGraphXAxisLeft} ${generalNumOfLeft[i] / 40000} L${generalGraphXAxisLeft += 10} ${generalNumOfLeft[i + 1] / 40000}`);
//   lineLeftGen.setAttributeNS(null, 'stroke', 'red');
//   lineLeftGen.setAttributeNS(null, 'stroke-width', '1');
//   lineLeftGen.setAttributeNS(null, 'stroke-linecap', 'square');
//   lineLeftGen.setAttributeNS(null, 'stroke-linejoin', 'miter');
//   lineLeftGen.setAttributeNS(null, 'fill', 'none');
//   lineLeftGen.setAttributeNS(null, 'transform', 'translate(-900, 199) scale(1, -1)');

//   subGraph.appendChild(lineLeftGen);
// });

// const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
// point.className = 'dot';
// point.setAttributeNS(null, 'cx', '10');
// point.setAttributeNS(null, 'cy', dotY);
// point.setAttributeNS(null, 'r', '5');
// point.setAttributeNS(null, 'stroke', 'blueviolet');
// point.setAttributeNS(null, 'stroke-width', '3');
// graph.appendChild(point);

// console.log(point.getAttributeNS('http://www.w3.org/2000/svg', 'cx'));


// for (let i = 0; i < 100; i++) {
//   const timeLine = document.createElement('line');
//   let val = 10;
//   // val += 1;
//   timeLine.setAttribute('x1', val += 1);
//   timeLine.setAttribute('y1', '5');
//   graph.appendChild(timeLine);
// }
// const timeLine = document.createElement('line');
// timeLine.setAttribute('x1', '10');
// graph.appendChild(timeLine);

const arr1 = [1542412800000, 1542499200000, 1542585600000];
const arr2 = [40, 15, 78];
const newArr = [];
// const matrix = [];
// matrix.push(newArr);
// for (let i = 0; i < numbOfFollowers.length; i++) {
//   // newArr.push([arr1[i], arr2[i]]);
//   const current = numbOfFollowers[i];
//   const prev = numbOfFollowers[(i + numbOfFollowers.length - 1) % numbOfFollowers.length];
//   const next = numbOfFollowers[(i + 1) % numbOfFollowers.length];
//   console.log(prev);

// }

numbOfFollowers.forEach((el, i) => {
  const current = numbOfFollowers[i];
  const prev = numbOfFollowers[(i - 1)];
  const next = numbOfFollowers[(i + 1)];
  // console.log(next);
});
