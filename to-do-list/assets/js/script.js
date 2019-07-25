$("ul").on("click", "li", function(){
  $(this).toggleClass("strikethrough");
  console.log('clicked');
});

$("ul").on("click", "li span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var input = $(this).val();
    $("ul").append("<li><span>X </span>" + input + "</li>");
    $(this).val("");
  };
});