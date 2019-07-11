var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");
var header = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

var numSquares = 6;
var colours = randomColourArray(numSquares);
var pickedColour = randomColourPick();

for(var i = 0; i < colours.length; i++){
  squares[i].style.backgroundColor = colours[i]
};

rgbDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", function(){
    if(this.style.backgroundColor === pickedColour){
      squaresColour(pickedColour);
      message.textContent = "Correct!";
      header.style.backgroundColor = pickedColour;
      reset.textContent = "Play Again?"
    }
    else{
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  })
}

reset.addEventListener("click", function(){
  colours = randomColourArray(numSquares);
  pickedColour = randomColourPick();
  rgbDisplay.textContent = pickedColour;
  for(var i = 0; i < colours.length; i++){
    squares[i].style.backgroundColor = colours[i]
  };
  header.style.backgroundColor = "rgb(70, 130, 180)"
})

easyBtn.addEventListener("click", function(){
  numSquares = 3;
  this.classList.add("blueBackground");
  hardBtn.classList.remove("blueBackground");
  colours = randomColourArray(numSquares);
  pickedColour = randomColourPick();
  rgbDisplay.textContent = pickedColour;
  for(var i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.backgroundColor = colours[i]
    }
    else{
      squares[i].style.display = "none"
    }
  };
  header.style.backgroundColor = "rgb(70, 130, 180)"
})

hardBtn.addEventListener("click", function(){
  numSquares = 6;
  this.classList.add("blueBackground");
  easyBtn.classList.remove("blueBackground");
  colours = randomColourArray(numSquares);
  pickedColour = randomColourPick();
  rgbDisplay.textContent = pickedColour;
  for(var i = 0; i < colours.length; i++){
    squares[i].style.backgroundColor = colours[i];
    squares[i].style.display = "block"
  };
  header.style.backgroundColor = "rgb(70, 130, 180)"
})

function squaresColour(colour){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colour
  }
}

function randomColour(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}

function randomColourArray(x){
  var colours = [];
  for(var i = 0; i < x; i++){
    colours.push(randomColour());
  };
  return colours;
}

function randomColourPick(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}