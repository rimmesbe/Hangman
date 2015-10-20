String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var completeWord = function(str){
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) == "_"){
      return false;
    }
  }
  return true;
}

$(document).ready(function() {
  var wordArray = ["apple", "banana", "clock", "gasoline", "animal", "dancing"];

  $('#word-generator').on('click', function(e){
    var randomIndex = Math.floor(Math.random() * (5 - 0 + 1));
    var secretWord = wordArray[randomIndex];
    var blankWord = "";
    console.log(secretWord);
    for (var i = 0; i < secretWord.length; i++){
      blankWord += "_ ";
    }
    $('#secret-word').text(blankWord);

    // when a letter is guessed(clicked)
    $('li').on('click', function(f){
      var $target = $(f.target);
      var letter = $target.text();
      $target.hide();
      for (var i = 0; i < secretWord.length; i++){
        if (secretWord.charAt(i) == letter.toLowerCase()){
          blankWord = blankWord.replaceAt((i*2), letter);
        }
      }
      $('#secret-word').text(blankWord);
      if(completeWord(blankWord)){
        console.log("Winner");
      }
    });
  });


});