var counter = 0;
var min = 19;
var max = 120;
var match = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('number to match ' + match);

// var min=19; 
// var max=120;  
// var random = Math.random() * (+max - +min) + +min; 
// document.write("Random Number Generated : " + random );  

$(document).ready(function () {
    $('.gem1').on('click', function () {
        // var counter = Math.floor(Math.random() * 20);
        counter += 1;
        alert("Your new score is  " + counter);
        console.log('your score is ' + counter);

    });
})

$(document).ready(function () {
    $('.gem2').on('click', function () {
        counter += 4;
        alert("Your new score is  " + counter);
        console.log('your score is ' + counter);

    });
})


$(document).ready(function () {
    $('.gem3').on('click', function () {
        counter += 7;
        alert("Your new score is  " + counter);
        console.log('your score is ' + counter);

    });
})

$(document).ready(function () {
    $('.gem4').on('click', function () {
        counter += 10;
        alert("Your new score is  " + counter);
        console.log('your score is ' + counter);

    });
})


