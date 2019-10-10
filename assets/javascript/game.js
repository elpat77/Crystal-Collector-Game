var counter = 0;
var min = 19;
var max = 120;
var match = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('number to match ' + match);


$(document).ready(function () {
    $("#match-update").text(match);
});

$(document).ready(function () {
    $('.gem1').on('click', function () {
        // var counter = Math.floor(Math.random() * 20);
        counter += 1;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!")
        } else if (counter >= match) {
            alert("You lose!!");
        }
    });
})

$(document).ready(function () {
    $('.gem2').on('click', function () {
        counter += 4;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!")
        } else if (counter >= match) {
            alert("You lose!!");
        }
    });
})


$(document).ready(function () {
    $('.gem3').on('click', function () {
        counter += 7;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!")
        } else if (counter >= match) {
            alert("You lose!!");
        }
    });
})

$(document).ready(function () {
    $('.gem4').on('click', function () {
        counter += 10;
        $("#score-update").text(counter);
        console.log('your score is ' + counter);
        if (counter === match) {
            alert("You win!")
        } else if (counter >= match) {
            alert("You lose!!");
        }
    });
})


