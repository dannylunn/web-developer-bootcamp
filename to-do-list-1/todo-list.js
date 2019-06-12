var todos = [];

setTimeout(function(){
  var input = prompt("What would you like to do?");

  while(input !== "quit"){
    if(input === "new"){
      var newTodo = prompt("Add a todo");
      todos.push(newTodo);
      console.log(newTodo + " added to list");
    }
    else if(input === "list"){
      console.log("***********");
      for(var i = 0; i < todos.length; i++){
        console.log(i + ": " + todos[i]);
      }
      console.log("***********");
    }
    else if(input === "delete"){
      var removeIndex = prompt("Which index would you like to delete");
      todos.splice(removeIndex,1);
      console.log("Todo Removed");
    }
    input = prompt("What would you like to do?");
  }
  console.log("User has quit")
}, 500);