let toggle = true;
console.log('toggle is ' + toggle)

const originalText = document.querySelector('h1').textContent;

function userClick() {
  // get h1
  let myHeader = document.querySelector('h1');

  // add shake
  myHeader.classList.add('animated', 'shake');
  setTimeout(function () {
    myHeader.classList.remove('shake');
  }, 500);

  // switch toggle state
  toggle = !toggle;
  console.log('toggle is ' + toggle)
  
  if (toggle) {
    myHeader.textContent = originalText;
  } else {
    myHeader.textContent = 'JavaScript is Cool!';
  }
}
