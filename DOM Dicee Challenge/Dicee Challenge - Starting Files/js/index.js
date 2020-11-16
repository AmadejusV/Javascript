const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const header = document.querySelector('h1');

var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

// var p = document.createElement('p');

img1.setAttribute('src', 'images/dice'+randomNumber1+'.png');
img2.setAttribute('src', 'images/dice'+randomNumber2+'.png');

if(randomNumber1>randomNumber2){
  // document.querySelector('.container').appendChild(p);
  //  p.innerHTML="<img class='mini' src='images/dice6.png'>"
  header.innerHTML="<em>🚩Player one wins!</em>";
}else if (randomNumber1<randomNumber2) {
  header.innerHTML="<em>Player two wins!🚩</em>";
}else if (randomNumber1==randomNumber2) {
  header.innerHTML="<em>Everyone wins!</em>";
}
