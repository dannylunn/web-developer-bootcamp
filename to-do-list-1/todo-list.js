var todos = [];

setTimeout(function(){
  var input = prompt("What would you like to do?");

  while(input !== "quit"){
    if(input === "new"){
      todos.push(prompt("Add a todo"));
    }
    else if(input === "list"){
      console.log(todos)
    }
    input = prompt("What would you like to do?");
  }
  console.log("User has quit")
}, 500);