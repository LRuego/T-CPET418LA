var x = Math.floor(Math.random() * 6) + 1;
var y = Math.floor(Math.random() * 6) + 1;

var img1 = "images/dice" + x + ".png";
var img2 = "images/dice" + y + ".png";

$('img.img1').attr("src", img1);
$('img.img2').attr("src", img2);

if (x > y) {
    $('h1').text('Player 1 Wins🚩')
}
else if (x < y) {
    $('h1').text('Player 2 Wins🚩')
}
else {
    $('h1').text('Draw!')
}

$('p').eq(2).text(Math.floor((Math.random() * 5)+1))