var colours = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 0, 255)", "rgb(255, 255, 0)", "rgb(0, 255, 255)"];
var squares = document.querySelectorAll(".square");
var pickedColour = randomColour();
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");

for(var i = 0; i < colours.length; i++){
  squares[i].style.backgroundColor = colours[i]
};

rgbDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", function(){
    if(this.style.backgroundColor === pickedColour){
      squaresColour(pickedColour);
      message.textContent = "Correct!";
    }
    else{
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }
  })
}

function squaresColour(colour){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colour
  };
}

function randomColour(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}