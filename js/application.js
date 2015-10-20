
$(document).ready(function() {
  var wordArray = ["apple", "banana", "clock", "gasoline", "animal", "dancing"];
  $('#word-generator').on('click', function(e){
    var randomIndex = Math.floor(Math.random() * (5 - 0 + 1));
    var secretWord = wordArray[randomIndex];
    var blankWord = "";
    for (var i = 0; i < secretWord.length; i++){
      blankWord += "_ ";
    }
    $('#secret-word').text(blankWord);
  });
});