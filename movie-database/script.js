var movie = [
  {
    title: "Dark Phoenix",
    watched: false,
    rating: "2 stars"
  },
  {
    title: "Spiderverse",
    watched: true,
    rating: "3 stars"
  },
  {
    title: "End Game",
    watched: true,
    rating: "3 stars"
  },{
    title: "Inception",
    watched: true,
    rating: "2 stars"
  }
];

movie.forEach(function(){
  var title = movie.title;
  var rating = movie.rating;
  var seen = "watched"
  if (movie.watched = false){
    seen = "not seen"
  }
  console.log("You have " + seen + ' "' + title + '" - ' + rating)
})
