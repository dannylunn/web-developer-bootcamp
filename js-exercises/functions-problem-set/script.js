function isEven(number){
  if(number%2 === 0){
    return true;
  }
  else {
    return false;
  }
}

function factorial(n){
  var x = 1;
  for(var i = 2; i <= n; i++){
    x = x * i;
  }
  return x;
}

function kebabToSnake(str){
  return str.replace(/-/g, "_");
}