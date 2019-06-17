function printReverse(array) {
  for(var i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

function isUniform(array) {
  var y = array[0];
  for(var i = 1; i < array.length; i++){
    if(y !== array[i]){
      return false;
    }
  }
  return true;
}

function sumArray(array) {
  var y = 0;
  for(var i = 0; i < array.length; i++){
    y = y + array[i];
  }
  return y;
}

function max(array) {
  var y = array[0];
  for(var i = 0; i < array.length; i++){
    if(y < array[i]){
      y = array[i];
    }
  }
  return y;
}