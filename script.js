
$(function(){
    console.log("ready");
  // array for name of cards
    var myCards=[
      "images/suicune.jpg",
      "images/pika.jpg",
      "images/psyduck.jpg",
      "images/patrick.jpg",
      "images/pika.jpg",
      "images/charizard.jpg"
  ];

    var card1 = myCards[0];
    var card2 = myCards[1];
    var card3 = myCards[2];
    var card4 = myCards[3];
    var card5 = myCards[4];
    var card6 = myCards[5];

    var pika = 0;
    var moves= 0;


var addCardClickListener = function(){

  $('.cardBack').click(function(e) {
    // Generate a random number
        var randomNumber = Math.round(Math.random()*(myCards.length-1));

    // Pop random image out of myCards and store it in a new variable
    var image= myCards.splice(randomNumber, 1);

    // Change e.target css background image to random image
    $(e.target).css('background-image','url("'+image+'")');
    if(image == "images/pika.jpg"){
      pika++;
    } else{
      moves++;
    }
    whoWins();
    $(e.target).off('click');
  });

};
var whoWins = function(){
  if(pika>1){
    alert("you a winner");
  }
}



addCardClickListener();
  //     });

  // })

  //  $('#restart').click(function() {
  //   $('#we').fadeIn(200)
  // });
  //   var body= $("body");

});




























