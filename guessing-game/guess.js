secretNumber = Math.floor((Math.random()*100)+1);

guess = Number(prompt("Guess a number between 1 and 100"));

while(guess != secretNumber){
  if(guess>secretNumber){
    guess = Number(prompt("Too high, guess again"));
  }
  else{
    guess = Number(prompt("Too low, guess again"));
  }
}

alert("You got it!")
