
//now we can interface with the object
//interface with the style


//random color function

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()* 16)]
  }
  return color
}

//simple funciton for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  document.querySelector("h1").style.color = colorInput;
}

//now perform the action over intervalls

setInterval("changeHeaderColor()", 500);
