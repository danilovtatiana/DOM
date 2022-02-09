//restart Game Button
var restart = document.querySelector('.btn');

//Grab all the squares

var squares = document.querySelectorAll('td');

//create the function that clears all the squares

function clear(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clear);
