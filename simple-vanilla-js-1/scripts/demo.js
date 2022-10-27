let toggle = true;
let originalText = document.querySelector('h1').textContent;
let currentText = '';

function userClick() {
  // get div
  let myHeader = document.querySelector('h1');

  // add shake
  myHeader.classList.add('animated', 'shake');
  setTimeout(function () {
    myHeader.classList.remove('shake');
  }, 500);

  // switch toggle state
  toggle = !toggle;
  if (toggle) {
    currentText = originalText;
  } else {
    currentText = 'JavaScript is Cool!';
  }
  myHeader.textContent = currentText;
}
