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

function updateGem() {
    gem1 = Math.floor(Math.random() * 11 + 1);
    gem2 = Math.floor(Math.random() * 11 + 1);
    gem3 = Math.floor(Math.random() * 11 + 1);
    gem4 = Math.floor(Math.random() * 11 + 1);

    console.log("g1 " + gem1);
    console.log("g2 " + gem2);
    console.log("g3 " + gem3);
    console.log("g4 " + gem4);
}
updateGem();

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
        counter = counter + gem1;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!");
            updateWins();
            updateGame();
            updateGem();

        } else if (counter >= match) {
            alert("Sorry, you lost!!");
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
            alert("Sorry, you lost!!");
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
            alert("Sorry, you lost!!");
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
            alert("Sorry, you lost!!");
            updateLosses();
            updateGame();
            updateGem();
        }

    });
})


