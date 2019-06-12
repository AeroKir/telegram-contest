/**
 * Switch Night/Day mode
 */
const changingElements = document.querySelectorAll('.body, .chart-heading, .check-label, .check-box');
const switchModeButton = document.querySelector('.button-switch-mode');

const switchScreenMode = () => {
  changingElements.forEach((element) => {
    if (!element.classList.contains('night-mode')) {
      element.classList.remove('day-mode');
      element.classList.add('night-mode');
      switchModeButton.innerText = 'Switch to Day Mode';
    } else {
      element.classList.remove('night-mode');
      element.classList.add('day-mode');
      switchModeButton.innerText = 'Switch to Night Mode';
    }
  });
};

switchModeButton.addEventListener('click', switchScreenMode);

export default switchModeButton;
