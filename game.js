var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = [];

var userChosenColour = "";
var userClickedPattern = [];


/* Start the Game*/
var level = 0;
$(document).keypress(function() {
  nextSequence();
});

$("#red").click(function() {
  userChosenColour = "red";
  userClickedPattern.push(userChosenColour);
  playButtonSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(level);
});

$("#blue").click(function() {
  userChosenColour = "blue";
  userClickedPattern.push(userChosenColour);
  playButtonSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(level);
});

$("#yellow").click(function() {
  userChosenColour = "yellow";
  userClickedPattern.push(userChosenColour);
  playButtonSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(level);
});

$("#green").click(function() {
  userChosenColour = "green";
  userClickedPattern.push(userChosenColour);
  playButtonSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(level);
});

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(50).fadeOut(50).fadeIn(50);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  level++;
  $("h1").text("Level " + level);
}

function playButtonSound(colour) {
  var audio = new Audio("sounds/" + colour + ".mp3");
  $("#" + colour).click(function() {
    audio.play();
  });
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  var i = 0;
  while (i < userClickedPattern.length) {
    if (userClickedPattern[i] === gamePattern[i]) {
      i++;
      if (i === currentLevel) {
        userClickedPattern = [];
        setTimeout(function() {
          nextSequence();
        }, 1000);

      }
    } else {
      i++;
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      var wrongAudio = new Audio("sounds/wrong.mp3");
      wrongAudio.play();
      $("h1").text("Game Over, press any key to restart.");
      level = 0;
      userClickedPattern = [];
      gamePattern = [];
    }
  }
}
