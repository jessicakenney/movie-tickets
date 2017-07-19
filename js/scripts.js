
//-------------Backend----------------------------
var movies = ["Wonder Woman","Planet of the Apes"];
var releases = ["first","first"];
var movieTimes = ["1", "2", "4", "8"];
var tixTypes = ["youth","adult","senior"];

function Ticket (title, time, tixType,release) {
  this.title = title;
  this.time = time;
  this.tixType = tixType;
  this.release = release;
};

Ticket.prototype.getCost = function () {
  if (this.release === "first"){
    var cost = 22;
  } else {
    var cost = 15;
  }
  if (this.time <= 5) {
    cost = cost - 7;
  }
  if (this.tixType === "youth"){
    cost = cost - 5;
  }
  if (this.tixType === "senior"){
    cost = cost - 7;
  }
  return cost;
};

//-------------Frontend----------------------------

$(document).ready(function(){
//Populate form
  movies.forEach(function(movie){
    $("#movie-title").append("<option>" + movie + "</option>");
  });
  movieTimes.forEach(function(movieTime){
    $("#movie-time").append("<option>" + movieTime + "</option>");
  });
  tixTypes.forEach(function(tixType){
    $("#tixType").append("<option>" + tixType + "</option>");
  });

//Retrieve data when form is submitted
  $("#movie-ticket").submit(function(event){
    event.preventDefault();

    var selectedTitle = $("#movie-title option:selected").val();
    var selectedTime = parseInt($("#movie-time option:selected").val());
    var selectedTicket = $("#tixType option:selected").val();
    //create New Ticket
    selectedTitleRelease = releases[movies.indexOf("Wonder Woman")];
    var newTicket = new Ticket(selectedTitle, selectedTime, selectedTicket,selectedTitleRelease);

//Show purchase summary
    $(".purchase-summary").show();
    $(".title").text(newTicket.title);
    $(".time").text(newTicket.time);
    $(".type").text(newTicket.tixType);
    $(".release").text(newTicket.release);
    $(".total").text(newTicket.getCost());
  });
});
