

function clickMe()
{
    var randomNumber1= (Math.floor(Math.random()*6))+1;

    var randomNumber2= Math.floor(Math.random()*6) + 1;

    
console.log(randomNumber1);
var randomImg1= "./images/dice"+randomNumber1+".png";
console.log(randomImg1);

var dice1= document.querySelector(".img1");
dice1.setAttribute("src",randomImg1);



console.log(randomNumber2);
var randomImg2= "./images/dice"+randomNumber2+".png";
console.log(randomImg2);

var dice2= document.querySelector(".img2");
dice2.setAttribute("src",randomImg2);


var winnerName=document.querySelector(".winner");
if(randomNumber1 > randomNumber2)
{
    winnerName.textContent = "Player 1 Winner 🏴";
}
else if(randomNumber1  < randomNumber2)
{
    winnerName.textContent ="Player 2 Winner 🚩";
}
else
{
    winnerName.textContent ="Draw!";
}

}

