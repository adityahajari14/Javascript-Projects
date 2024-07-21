var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keydown(function(){
    if (!started){
    started = true;
    $("#level-title").text("Level "+ level);
    nextSequence();
}});


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    playSound("sounds/"+ userChosenColour + ".mp3")
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound("sounds/"+ randomChosenColour + ".mp3");   
}


function playSound(name){
    var audio = new Audio(name);
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence, 1000);
            
        }
    } else{
        playSound("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }
}

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}
