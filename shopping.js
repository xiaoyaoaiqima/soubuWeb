const button = document.getElementById('my-button');
const tooltipContainer = document.getElementById('tooltip-container');

button.addEventListener('mouseover', () => {
  button.innerHTML = '卖家降价 &darr; '
  // const tooltip = button.getAttribute('data-tooltip');
  tooltipContainer.innerText = "比加入购物车时，又降了50$";
  tooltipContainer.style.opacity = 1;
  tooltipContainer.style.left = `${button.offsetLeft}px`;
  tooltipContainer.style.top = `${button.offsetTop + button.offsetHeight}px`;
});

button.addEventListener('mouseout', () => {
  tooltipContainer.style.opacity = 0;
  button.innerHTML = '卖家降价 &uarr; '
});