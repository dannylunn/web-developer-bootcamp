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

for(var i = 0; i < movie.length; i++){
  var title = movie[i].title;
  var rating = movie[i].rating;
  if(movie[i].watched){
    var seen = "watched"
  }
  else{
    var seen = "not watched"
  };
  console.log("You have " + seen + ' "' + title + '" - ' + rating)
}