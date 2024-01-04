
let currentNumber = localStorage.getItem('pageNumber') || 0;
document.getElementById('numberBlock').innerText = currentNumber;
currentNumber++;
localStorage.setItem('pageNumber', currentNumber);








