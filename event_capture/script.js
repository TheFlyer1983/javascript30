const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  //e.stopPropagation(); //stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture : false, //Capture true - Events trigger on the way down, false - Events trigger on the way up
  once : true
}));
button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once : true
})