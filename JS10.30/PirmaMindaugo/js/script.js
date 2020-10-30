var manoAjax = new XMLHttpRequest(); //sukuriamas XMLHttpRequest objektas
manoAjax.onreadystatechange = function (){ //callback funkcija
	if(manoAjax.readyState === 4) {
		if(manoAjax.status === 200) {
			document.querySelector('aside').innerHTML = manoAjax.responseText;
			console.log(manoAjax.responseText)
			console.log(manoAjax.statusText)
		} else {
			alert(manoAjax.statusText);
		}
	}
};
manoAjax.open('GET', 'nav/nav.html'); //requestas
document.querySelector('button.showMenu').onclick = function(){ //event'as po button paspaudimo
	manoAjax.send(); //siunciama uzklausa
	document.querySelector('button.showMenu').style.display="none"; //paslepaiamas mygtukas
};
