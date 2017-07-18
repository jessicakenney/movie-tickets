function Movie (title, release) {
  this.title = title;
  this.release = release;
};

var movie1  = new Movie("WonderWoman", "firstRelease");
var movie2  = new Movie("Planet of the Apes", "firstRelease");




// UI Logic
$(document).ready(function(){

  $(".add-movie1").append( movie1.title );
  $(".add-movie2").append( movie2.title );

  alert(movie1.release);




  $("#movie-ticket").submit(function(event){
    event.preventDefault();
    var inputtedMovieTitle = $("#movie-title option:selected").val();
    alert(inputtedMovieTitle);
  });
});
