var counter = 0;
var min = 19;
var max = 120;
var match = 0;
var wins = 0;
var losses = 0;

updateGame();

function updateGame() {
    counter = 0;
    $("#score-update").text(counter);
    var randomMatch = Math.floor(Math.random() * (max - min + 1)) + min;
    match = randomMatch;
    console.log('number to match ' + match);
    $(document).ready(function () {
        $("#match-update").text(match);
    });
}

function updateWins() {
    wins += 1;
    $(document).ready(function () {
        $("#wins").text(wins);
    });
}

function updateLosses() {
    losses += 1;
    $(document).ready(function () {
        $("#losses").text(losses);
    });
}

$(document).ready(function () {
    $('.gem1').on('click', function () {
        counter += 1;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();

        } else if (counter >= match) {
            alert("Sorry, you lost!!");
            updateLosses();
            updateGame();
        }

    });
})

$(document).ready(function () {
    $('.gem2').on('click', function () {
        counter += 4;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
        } else if (counter >= match) {
            alert("Sorry, you lost!!");
            updateLosses();
            updateGame();
        }

    });
})

$(document).ready(function () {
    $('.gem3').on('click', function () {
        counter += 7;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
        } else if (counter >= match) {
            alert("Sorry, you lost!!");
            updateLosses();
            updateGame();
        }

    });
})

$(document).ready(function () {
    $('.gem4').on('click', function () {
        counter += 10;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
        } else if (counter >= match) {
            alert("Sorry, you lost!!");
            updateLosses();
            updateGame();
        }

    });
})


