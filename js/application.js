// function for replacing a specific char in a string
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var completeWord = function(str){
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) == "_"){return false;}
  }
  return true;
};

$(document).ready(function() {
  var wordArray = ["apple", "banana", "clock", "gasoline", "animal", "dancing"];
  var guessCounter = 0;
  // grabs random word from wordArray
  $('#word-generator').on('click', function(e){
    $('#word-generator').unbind('click');
    var randomIndex = Math.floor(Math.random() * (5 - 0 + 1));
    var secretWord = wordArray[randomIndex];
    var blankWord = "";
    for (var i = 0; i < secretWord.length; i++){
      blankWord += "_ ";
    }
    $('#secret-word').text(blankWord);

    // when a letter is guessed(clicked)
    $('li').on('click', function(f){
      var $target = $(f.target);
      var letter = $target.text();
      var letterStatus = false;
      $target.hide();
      for (var i = 0; i < secretWord.length; i++){
        if (secretWord.charAt(i) == letter.toLowerCase()){
          blankWord = blankWord.replaceAt((i*2), letter);
          letterStatus = true;
        }
      }
      $('#secret-word').text(blankWord);

      if(letterStatus == false){
        guessCounter += 1;
        $('img').attr('src', ("img/hangman_"+ guessCounter.toString() +".png"));
      }

      if(guessCounter == 6){
        $('li').unbind('click');
        $('#hangman-container').append("<h1>GAME OVER!</h1>");
        $('#hangman-container').append("<a href='javascript:history.go(0)'>play again?</a>");
      }

      if(completeWord(blankWord)){
        $('li').unbind('click');
        $('#hangman-container').append("<h1>WINNER!</h1>");
        $('#hangman-container').append("<a href='javascript:history.go(0)'>play again?</a>");
      }
    });
  });

});