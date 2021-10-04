const searchContainer = document.querySelector('.search-container');
const searchBox = document.querySelector('.search-box');
function calc() {
  let scrolled = document.documentElement.scrollTop;
  searchContainer.style.height = ((600 - scrolled) > 150 ? (600 - scrolled) : 150) + 'px';
  return scrolled;
}

function calcBrightness() {
  let scrolled = document.documentElement.scrollTop;
  let brightness = (600 - scrolled + 150) / 750 > 0.2 ? (600 - scrolled + 150) / 750 : 0.2;
  searchBox.parentNode.style.transition = 'none';
  searchBox.parentNode.style.filter = `brightness(${brightness})`;
  setTimeout(() => {
    searchBox.parentNode.style.transition = 'filter 0.3s ease-in-out';
  }, 200)
}

function calcBrightnessWithTrans() {
  let scrolled = document.documentElement.scrollTop;
  let brightness = (600 - scrolled + 150) / 750 > 0.2 ? (600 - scrolled + 150) / 750 : 0.2;
  searchBox.parentNode.style.filter = `brightness(${brightness})`;
}

window.addEventListener('scroll', () => {
  calc();
  calcBrightness();
})
searchBox.addEventListener('focus', () => {
  searchBox.parentNode.style.filter = 'brightness(0.7)';
})
searchBox.addEventListener('blur', () => {
  calcBrightnessWithTrans();
})

function red(obj) {
  obj.parentNode.style.color = "#908382";
}

function black(obj) {
  obj.parentNode.style.color = "#636363";
}

function calcOffset(space) {
  let offsetx = Math.sin(space / 500) * 10;
  let offsety = Math.cos(space / 500) * 5;
  footer.style.background = `conic-gradient(from 140deg at calc(50%  + ${offsetx}px ) calc(40% + ${offsety}px), #2c2d2c, #616161)`;
  requestAnimationFrame(calcOffset);
}

window.requestAnimationFrame(calcOffset)

const footer = document.querySelector('.footer');