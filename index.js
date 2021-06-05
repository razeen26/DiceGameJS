var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = 'dice'+randomNumber1+'.png';
var srcImage1 ='./images/'+randomImage1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute('src',srcImage1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var srcImage2 = "./images/dice"+randomNumber2+'.png';

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute('src',srcImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}