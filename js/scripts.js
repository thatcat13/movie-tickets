//backend logic
function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price; //placeholder
  this.calculatron();
}

Ticket.prototype.calculatron = function () {
  if (this.time === "1:00pm") {
    this.price = "$5.00"
  } else if (this.age === "child") {
    this.price = "$7.00"
  } else if (this.age === "adult") {
    this.price = "$25.00"
  } else if (this.age === "senior") {
    this.price = "$10.00"
  }
}

Ticket.prototype.selections = function() {
  return this.title + ", " + this.time + ", " + this.price;
}

function resetFields() {
    $("#final-price")("li:last-child").remove();
}


//frontend logic
$(document).ready(function(){
  $("form#movie-titles").submit(function(event){
    event.preventDefault();

    var inputtedMovieTitle = $("select#title").val();
    var inputtedTime = $("select#time").val();
    var inputtedAge = $("select#age").val();

    var newQuote = new Ticket(inputtedMovieTitle, inputtedTime, inputtedAge);

    $("ul#final-price").append("<li>" + newQuote.selections() + "</li>");

    $("#output").fadeIn();

    resetFields();

  });
});//ready
