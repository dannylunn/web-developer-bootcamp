var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var bestOfInput = document.getElementsByTagName("input");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var bestOf = 5;

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === bestOf){
      gameOver = true;
    };
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === bestOf){
      gameOver = true;
    };
    p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", function(){
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});

bestOfInput.addEventListener()