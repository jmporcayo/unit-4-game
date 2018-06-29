console.log("hello");

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random number we need to add our crystalScore up to
var randomScore;

// This will be the number we add on to when we click on a crystal
var crystalScore;


// These will be our crystal numbers
var crystalOne;
var crystalTwo;
var crystalThree;
var crytalFour;

var wins = 0;
var losses = 0;


function startGame() {
    randomScore = getRandomNumber(19, 120);
    console.log("Our random number is: " + randomScore);
    $("#randombox").text(randomScore);

    crystalScore = 0;
    $("#crystalScore").text(crystalScore);

    crystalOne = getRandomNumber(1, 12);
    $("#crystalOne").attr("data-value", crystalOne);

     crystalTwo = getRandomNumber(1, 12);
    $("#crystalTwo").attr("data-value", crystalTwo);

     crystalThree = getRandomNumber(1, 12);
    $("#crystalThree").attr("data-value", crystalThree);

     crystalFour = getRandomNumber(1, 12);
    $("#crystalFour").attr("data-value", crystalFour);

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

}

startGame();

$(".crystal-image").on("click", function(){
    console.log($(this));

    console.log($(this)[0].dataset.value);

    console.log($(this).attr("data-value"));

    var crystalAdder = Number.parseInt($(this).attr("data-value"));

    crystalScore = crystalScore + crystalAdder;

    checkWinLoss();



    
})



function checkWinLoss(){

    if(crystalScore === randomScore){
        wins = wins + 1;
        alert("you won!");

        startGame();
    }else if(crystalScore > randomScore){
        losses = losses + 1;

        alert("you lost!");

        startGame();
    }else{

        $("#crystalScore").text(crystalScore);

        console.log("keep playing!");
    }
}


startGame();












