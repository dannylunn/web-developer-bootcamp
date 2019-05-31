var answer = prompt("Are we there yet?");

while(answer.indexOf("yeah") === -1 && answer.indexOf("yes") === -1){
  var answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!")