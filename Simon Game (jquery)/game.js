var gamePattern = new Array();
var userClickedPattern= new Array();
var buttonColours = new Array("red","blue","green","yellow");
var level=0;

function nextSequence(){
  userClickedPattern=[];
  level++;
  var randomNumber = Math.floor(Math.random()*4);
  var randomChoosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChoosenColour);
  $("#"+randomChoosenColour).fadeOut(50).fadeIn(50);
  $("#level-title").text("Level "+level);
  playSound(randomChoosenColour);
}

$(".btn").click(function (){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}


function animatePress(colour){

  $("#"+colour).addClass("pressed");
  setTimeout(function(){
           $("#"+colour).removeClass('pressed');
   }, 100);
}


$(document).keypress(function(){
    if(level==0){
      nextSequence();
    }
});
function checkAnswer(lastIdx){
      if(userClickedPattern[lastIdx]===gamePattern[lastIdx]){
             console.log("success");
           if(userClickedPattern.length===gamePattern.length){
            setTimeout(function (){
            nextSequence();},1000);
           }
      } else {
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () { $("body").removeClass("game-over");},1000);
        playSound("wrong");
        level=0;
      }
}
