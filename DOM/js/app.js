(function () {

document.querySelector('h1').innerHTML="Wrong text here";
document.querySelector('li a').innerHTML="Kitas irasas";
document.querySelector('li a').style.color="red";
document.getElementsByTagName('li')[1].style.color="green";
document.querySelectorAll('li')[2].style.color="red";
document.querySelector('button').style.backgroundColor="yellow";
const link3 = document.querySelectorAll('li')[2];
const link2 = document.querySelectorAll('li')[1];
const linkA = document.querySelectorAll('li a')[0];

link2.addEventListener("click", function(){
  link2.classList.toggle("invisible");
})

link3.addEventListener("click", function(){
  link3.classList.toggle("huge");
  link2.classList.remove('invisible');
  linkA.setAttribute('href', 'http://www.kitm.lt');
})

var oops = document.firstElementChild.lastElementChild.firstElementChild;

oops.addEventListener("click", function(){
  oops.innerHTML="oops";
})
})();
