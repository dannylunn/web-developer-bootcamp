secretNumber = Math.floor((Math.random()*100)+1);

guess = Number(prompt("Guess a number between 1 and 100"));

if(guess===secretNumber){
  alert("You got it!");
}
else if(guess>secretNumber){
  alert("Too high");
}
else{
  alert("Too low");
}