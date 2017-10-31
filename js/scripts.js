//backend logic
function MoviePrice(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price; //placeholder
  age.calculatron();
}

MoviePrice.prototype.selections = function() {
  return this.title + ", " + this.time + ", " + this.age;
}

MoviePrice.prototype.calculatron = function () {
  if (this.time === "mat") {
    this.price = "$5.00"
  } else if (this.age === "child") {
    this.price = "$7.00"
  } else if (this.age === "adult") {
    this.price = "$25.00"
  } else if (this.age === "senior") {
    this.price = "$10.00"
  }
};

//frontend logic
$(document).ready(function(){
  $("form#movie-titles").submit(function(event){
    event.preventDefault();

    var inputtedMovieTitle = $("input#title").val();
    var inputtedTime = $("input#time").val();
    var inputtedAge = $("input#age").val();
    var newQuote = new MoviePrice(inputtedMovieTitle, inputtedTime, inputtedAge);

    $("ul#final-price").append("<li>" + newQuote.selections() + ", " + moviePrice.calculatron() + "</li>");

    $("#output").fadeIn();

  });
});//ready
