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

//check the square marker

// var cellOne = document.querySelector('#one');
//
// cellOne.addEventListener('click',function(){
//   if (cellOne.textContent === '') {
//     cellOne.textContent = "X";
//   }else if (cellOne.textContent === "X") {
//     cellOne.textContent = "O";
//   }else {
//     cellOne.textContent = '';
//   }
// })

function changeMarker(){
  if (this.textContent === '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = "O"
  } else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker)
}
