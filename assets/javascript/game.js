//create game variables
var counter = 0;
var min = 19;
var max = 120;
var match = 0;
var wins = 0;
var losses = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

//initialize game
updateGame();

//create funtion to initialize game
function updateGame() {
    counter = 0;
    $("#score-update").text(counter);
    var randomMatch = Math.floor(Math.random() * (max - min + 1)) + min;
    match = randomMatch;
    console.log('The number to match is ' + match);
    $(document).ready(function () {
        $("#match-update").text(match);
    });
}

//create function to generate a random number assoc iated with a gem
function updateGem() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    numbers.sort(() => {
        return 0.5 - Math.random();
    });
    gem1 = numbers[0];
    console.log("The value of gem 1 is " + gem1);
    gem2 = numbers[1];
    console.log("The value of gem 2 is " + gem2);
    gem3 = numbers[2];
    console.log("The value of gem 3 is " + gem3);
    gem4 = numbers[3];
    console.log("The value of gem 4 is " + gem4);
}
updateGem();

//create a function to update the wins
function updateWins() {
    wins += 1;
    $(document).ready(function () {
        $("#wins").text(wins);
    });
}

//create a function to update the losses
function updateLosses() {
    losses += 1;
    $(document).ready(function () {
        $("#losses").text(losses);
    });
}

//game logic :)
$(document).ready(function () {
    $('.gem1').on('click', function () {
        counter = counter + gem1;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
            updateGem();

        } else if (counter >= match) {
            alert("Sorry, you lost try again.");
            updateLosses();
            updateGame();
            updateGem();
        }

    });
})

$(document).ready(function () {
    $('.gem2').on('click', function () {
        counter = counter + gem2;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
            updateGem();
        } else if (counter >= match) {
            alert("Sorry, you lost try again.");
            updateLosses();
            updateGame();
            updateGem();
        }

    });
})

$(document).ready(function () {
    $('.gem3').on('click', function () {
        counter = counter + gem3;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
            updateGem();
        } else if (counter >= match) {
            alert("Sorry, you lost try again.");
            updateLosses();
            updateGame();
            updateGem();
        }

    });
})

$(document).ready(function () {
    $('.gem4').on('click', function () {
        counter = counter + gem4;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
            updateGem();
        } else if (counter >= match) {
            alert("Sorry, you lost try again.");
            updateLosses();
            updateGame();
            updateGem();
        }

    });
})


