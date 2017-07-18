
var movies = ["Wonder Woman","Planet of the Apes"];
var releases = ["first","first"];
var movieTimes = ["1", "2", "4", "8"];
var tixTypes = ["youth","adult","senior"];

// UI Logic
//Builds user interface
$(document).ready(function(){




  movies.forEach(function(movie){
    $("#movie-title").append("<option>" + movie + "</option>");
  });
  movieTimes.forEach(function(movieTime){
    $("#movie-time").append("<option>" + movieTime + "</option>");
  });
  tixTypes.forEach(function(tixType){
    $("#tixType").append("<option>" + tixType + "</option>");
  });

    $("#movie-ticket").submit(function(event){

      function Ticket (title, time, tixType) {
        this.title = title;
        this.time = time;
        this.tixType = tixType;
      };

      Ticket.prototype.getCost = function (){
        var cost = 20;
        //this isnt working here...the getCost call.
        alert("proto" + this.time);
        alert("proto" + this.tixType);
        if (this.time <= 5) {
          cost = cost - 10;
        }
        if (this.tixType === "youth"){
          cost = cost - 5;
        }
        if (this.tixType === "senior"){
          cost = cost - 7;
        }
        return cost;
      };
    //get selected values
    var selectedTitle = $("#movie-title option:selected").val();
    var selectedTime = parseInt($("#movie-time option:selected").val());
    var selectedTicket = $("#tixType option:selected").val();
    var newTicket = new Ticket(selectedTitle, selectedTime, selectedTicket);
    alert("after newTicket" + newTicket.title);
    alert("after newTicket" + newTicket.time);
    alert("after newTicket" + newTicket.tixType);
    //show purchase summary
    $(".purchase-summary").show();
    $(".title").text(selectedTitle);
    $(".time").text(selectedTime);
    $(".type").text(selectedTicket);
    $(".total").text(newTicket.getCost);
    event.preventDefault();
  });
});//});

// $("ul#movies").append("<li><span class='movie'>" + movie1.title + "</span></li>");
// $("ul#movies").append("<li><span class='movie'>" + movie2.title + "</span></li>");
//
// $(".movie").last().click(function() {
//   $("#show-info").show();
//   $("#show-info").text(movie1.times);

  //$(".add-movie2").append( movie2.title );

  // $("#movie-ticket").submit(function(event){
  //   event.preventDefault();

    //var inputtedMovieTitle = $("#movie-title option:selected").val();
    //$(".contact").last().click(function() {
    // var test = $("select option:selected").each(function(){
    //   alert (movie.times);
    // });


    // alert(inputtedMovieTitle);
    // var selectedTimes = movie1.times;
    // alert(selectedTimes);
