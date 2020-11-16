let manoCode = new XMLHttpRequest(); //sukuriamas XMLHttpRequest objektas
let ul = document.querySelector(".imgs");


manoCode.onreadystatechange = function (){ //callback funkcija
    if(manoCode.readyState === 4) {
        let pic = JSON.parse(manoCode.responseText);
        console.log(pic)

        for( let i = 0; i < pic.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li);
            let img = document.createElement("img");
            img.setAttribute("src", "http://web-training.lt/img_api/img/"+pic[i]);
            li.appendChild(img);
        }
    }
};


// http://web-training.lt/img_api/img/1.png
manoCode.open('GET', 'http://web-training.lt/img_api/'); //requestas
document.querySelector('button.rodyti').onclick = function(){ //event'as po button paspaudimo
    manoCode.send(); //siunciama uzklausa
    document.querySelector('button.rodyti').style.display="none"; //paslepiamas mygtukas
    // document.querySelector('.container div').innerHTML+="<button type='button' class='btn btn-info issaugoti'i>Issaugoti</button>";
};

//-------------------------------------------

document.querySelector('button.maisyti').onclick = function(){ //switch images
    var images = document.querySelectorAll('img');

    for(let imgIndex=0; imgIndex<images.length; imgIndex++){
        randNum=Math.floor(Math.random()*images.length); 
        
         let temp = images[imgIndex].src;
         images[imgIndex].src = images[randNum].src;
         images[randNum].src = temp;
    };
};


