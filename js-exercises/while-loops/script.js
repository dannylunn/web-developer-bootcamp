console.log("Print all numbers between -10 and 19");
i=-10;
while(i<20){
  console.log(i);
  i++;
}
console.log("Print all even numbers between 10 and 40");
i=10;
while(i<=40){
  console.log(i);
  i+=2;
}
console.log("Print all odd numbers between 300 and 333");
i=300;
while(i<=333){
  if(i%2 != 0){
    console.log(i)
  }
  i++;
}
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
i=1;
while(i<=50){
  if(i%3 === 0 && i%5 === 0){
    console.log(i)
  }
  i++;
}