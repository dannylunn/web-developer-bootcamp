var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var message = document.querySelector("#message");
var header = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var difficulty = document.querySelectorAll(".difficulty");

var numSquares = 6;
var colours = [];
var pickedColour;


resetBtn.addEventListener("click", function(){
  reset()
});

init();

function init(){
  setupDifficultyBtns();
  setupSqaureBtns();
  reset();
};

function setupDifficultyBtns(){
  for(var i = 0; i < difficulty.length; i++){
    difficulty[i].addEventListener("click", function(){
      difficulty[0].classList.remove("blueBackground");
      difficulty[1].classList.remove("blueBackground");
      this.classList.add("blueBackground");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
};

function reset(){
  colours = randomColourArray(numSquares);
  pickedColour = randomColourPick();
  rgbDisplay.textContent = pickedColour;
  for(var i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    }
    else{
      squares[i].style.display = "none";
    }
  };
  header.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colours";
  message.textContent = "";
};

function setupSqaureBtns(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      if(this.style.backgroundColor === pickedColour){
        squaresColour(pickedColour);
        message.textContent = "Correct!";
        header.style.backgroundColor = pickedColour;
        resetBtn.textContent = "Play Again?"
      }
      else{
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    })
  }
};

function squaresColour(colour){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colour
  }
};

function randomColour(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
};

function randomColourArray(x){
  var colours = [];
  for(var i = 0; i < x; i++){
    colours.push(randomColour());
  };
  return colours;
};

function randomColourPick(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}