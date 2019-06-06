var num = 8;
function scope(){
  num += 1;
  if(num % 5 === 0){
    return true;
  }
  else{
    return false;
  }
}
num += 1;
scope();
num += 1;
scope();