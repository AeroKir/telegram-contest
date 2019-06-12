import {
  firstGraphData,
  firstGraphXPoints,
  firstGraphYPointsJoined,
  firstGraphYPointsLeft,
  secondGraphData,
  thirdGraphData,
  fourthGraphData,
  fifthGraphData,
  secondGraphXAxisMin,
  secondGraphXAxisMax,
  thirdGraphXAxisMin,
  thirdGraphXAxisMax,
  fourthGraphXAxisMin,
  fourthGraphXAxisMax,
  fifthGraphXAxisMin,
  fifthGraphXAxisMax,
  secondGraphDataMin,
  secondGraphDataMax,
  thirdGraphDataMin,
  thirdGraphDataMax,
  fourthGraphDataMin,
  fourthGraphDataMax,
  fifthGraphDataMin,
  fifthGraphDataMax,
} from '../data/data-handler';
import getNormalizedData from '../data/data-normalization';
import getDateAndMonth from '../common/date-time';

const graphAreaWidth = 800;
const graphAreaHeight = 500;

const mainGraphArea = document.getElementById('main-graph-area');
mainGraphArea.setAttributeNS(null, 'width', graphAreaWidth);
mainGraphArea.setAttributeNS(null, 'height', graphAreaHeight);

const firstGraph = firstGraphData.forEach((item, i) => {
  // Tips of joined followers
  const tipJoined = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  tipJoined.setAttributeNS(null, 'class', 'point-joined');
  tipJoined.setAttributeNS(null, 'cx', firstGraphXPoints[i]);
  tipJoined.setAttributeNS(null, 'cy', firstGraphYPointsJoined[i]);
  tipJoined.setAttributeNS(null, 'r', '3');
  tipJoined.setAttributeNS(null, 'stroke', 'green');
  tipJoined.setAttributeNS(null, 'stroke-width', '3');
  tipJoined.setAttributeNS(null, 'transform', 'translate(0, 490) scale(1, -1)');
  mainGraphArea.appendChild(tipJoined);

  // Tips of left followers
  const tipLeft = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  tipLeft.setAttributeNS(null, 'class', 'point-left');
  tipLeft.setAttributeNS(null, 'cx', firstGraphXPoints[i]);
  tipLeft.setAttributeNS(null, 'cy', firstGraphYPointsLeft[i]);
  tipLeft.setAttributeNS(null, 'r', '3');
  tipLeft.setAttributeNS(null, 'stroke', 'red');
  tipLeft.setAttributeNS(null, 'stroke-width', '3');
  tipLeft.setAttributeNS(null, 'transform', 'translate(0, 490) scale(1, -1)');
  mainGraphArea.appendChild(tipLeft);

  // Graph of joined followers
  const lineJoined = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  lineJoined.setAttributeNS(null, 'd', `M${firstGraphXPoints[i]} ${firstGraphYPointsJoined[i]} L${firstGraphXPoints[i + 1]} ${firstGraphYPointsJoined[i + 1]}`);
  lineJoined.setAttributeNS(null, 'stroke', 'green');
  lineJoined.setAttributeNS(null, 'stroke-width', '2');
  lineJoined.setAttributeNS(null, 'stroke-linecap', 'square');
  lineJoined.setAttributeNS(null, 'stroke-linejoin', 'miter');
  lineJoined.setAttributeNS(null, 'fill', 'none');
  lineJoined.setAttributeNS(null, 'transform', 'translate(0, 490) scale(1, -1)');

  mainGraphArea.appendChild(lineJoined);

  // Graph of left followers
  const lineLeft = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  lineLeft.setAttributeNS(null, 'd', `M${firstGraphXPoints[i]} ${firstGraphYPointsLeft[i]} L${firstGraphXPoints[i + 1]} ${firstGraphYPointsLeft[i + 1]}`);
  lineLeft.setAttributeNS(null, 'stroke', 'red');
  lineLeft.setAttributeNS(null, 'stroke-width', '2');
  lineLeft.setAttributeNS(null, 'stroke-linecap', 'square');
  lineLeft.setAttributeNS(null, 'stroke-linejoin', 'miter');
  lineLeft.setAttributeNS(null, 'fill', 'none');
  lineLeft.setAttributeNS(null, 'transform', 'translate(0, 490) scale(1, -1)');

  mainGraphArea.appendChild(lineLeft);
});

export default firstGraph;

// console.log(yPointsArrLeft);


const pointInfo = document.querySelectorAll('.point-joined');
pointInfo.forEach((point, i) => {
  point.addEventListener('mouseover', () => {
    console.log(`Join: ${firstGraphData[i][1]}, ${getDateAndMonth(firstGraphData[i][0])}`);
  });
});

const pointInfoLeft = document.querySelectorAll('.point-left');
pointInfoLeft.forEach((point, i) => {
  point.addEventListener('mouseover', () => {
    console.log(`Left: ${firstGraphData[i][2]}, ${getDateAndMonth(firstGraphData[i][0])}`);
  });
});
