var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var img1="images/dice"+randomNumber1+".png";
var img2="images/dice"+randomNumber2+".png";
document.getElementsByClassName('img1')[0].setAttribute("src",img1);
document.getElementsByClassName('img2')[0].setAttribute("src",img2);

if(randomNumber1>randomNumber2){
  document.getElementsByTagName('h1')[0].innerText="🚩Player 1 win";
}else if(randomNumber1==randomNumber2){
  document.getElementsByTagName('h1')[0].innerText="Draw !!";
} else {
  document.getElementsByTagName('h1')[0].innerText="Player 2 win🚩";
}
