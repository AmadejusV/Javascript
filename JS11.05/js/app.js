let manoCode = new XMLHttpRequest(); //sukuriamas XMLHttpRequest objektas
let ul = document.querySelector(".imgs");


manoCode.onreadystatechange = function (){ 
    if(manoCode.readyState === 4) {
        let pic = JSON.parse(manoCode.responseText);
        console.log(pic)

        for( let i = 0; i < pic.length; i++) {
            let li = document.createElement("li");
            ul.appendChild(li);
            let img = document.createElement("img");
            img.setAttribute("class", "keisti");
            img.setAttribute("src", "http://web-training.lt/img_api/img/"+pic[i]);
            li.appendChild(img);
        }
        onClickChange();
    }
};


// http://web-training.lt/img_api/img/1.png
manoCode.open('GET', 'http://web-training.lt/img_api/'); //requestas

document.querySelector('button.rodyti').onclick = function(){ //event'as po button paspaudimo
    manoCode.send(); //siunciama uzklausa
    document.querySelector('button.rodyti').style.display="none"; //paslepiamas mygtukas

    let newBtn = document.createElement('button');                  //naujas mygtukas
    let btnLocation = document.querySelector('.container div');
    btnLocation.appendChild(newBtn);
    newBtn.setAttribute("class", "btn btn-info issaugoti");
    newBtn.textContent="Issaugoti";
    // document.querySelector('.container div').innerHTML+='<button type="button" class="btn btn-info issaugoti">Issaugoti</button>';

    let newBtn2 = document.createElement('button');
    btnLocation.appendChild(newBtn2);
    newBtn2.setAttribute("class", "btn btn-info showSaved");
    newBtn2.textContent="Rodyti issaugotas img";


    let savedImgs;
    document.querySelector('button.issaugoti').onclick = function(){    //saugoju i localstorage
        let imgsToSave = document.querySelector('ul.imgs').innerHTML;
        savedImgs = localStorage.setItem("savedImgs", imgsToSave);
        onClickChange();
    };


    document.querySelector('button.showSaved').onclick = function(){    //pakeiciu i tai kas buvo local storage
        savedImgs = localStorage.getItem("savedImgs");
        document.querySelector('ul.imgs').innerHTML=savedImgs;
        onClickChange();
    };
};


document.querySelector('button.maisyti').onclick = function(){ //switch images
    var images = document.querySelectorAll('img');
    onClickChange();

    for(let imgIndex=0; imgIndex<images.length; imgIndex++){
        randNum=Math.floor(Math.random()*images.length); 
        
         let temp = images[imgIndex].src;
         images[imgIndex].src = images[randNum].src;
         images[randNum].src = temp;
    };
};


let onClickChange = function(){     //double click funkcija
    let allImages = document.querySelectorAll('img');
    let pic = JSON.parse(manoCode.responseText);

    allImages.forEach(function(img){
        let randNum=Math.floor(Math.random()*allImages.length);

        img.ondblclick = function(){
            img.src="http://web-training.lt/img_api/img/" + pic[randNum];
        };
    });
};


