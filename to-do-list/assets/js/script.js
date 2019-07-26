$("ul").on("click", "li", function(){
  $(this).toggleClass("strikethrough");
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
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + input + "</li>");
    $(this).val("");
  };
});

$(".fa-plus").click(function(){
  $("input").fadeToggle();
})