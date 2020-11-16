var miest = new XMLHttpRequest();

var buttonOrai = document.querySelector('.oruSection button.showOrai');

miest.onreadystatechange = function(){
    if(miest.readyState === 4){
      let miestuInfo = JSON.parse(miest.responseText);
      console.log(miestuInfo);
      let list = '';
      for(let i = 0; i < miestuInfo.length; i++){
        list += '<option label="'+miestuInfo[i].code+'" value="'+ miestuInfo[i].name+ '">';
      }
      document.querySelector('.placesMiestai').innerHTML=list;
    }
  };
    
  buttonOrai.addEventListener('click', function(){
    let miestuInfo = JSON.parse(miest.responseText);
    var value = document.querySelector(".oruSection input").value;

    for(let i = 0; i < miestuInfo.length; i++){
      if(value==miestuInfo[i].name || value==miestuInfo[i].code){
        //alert(document.querySelector(".oruSection input").value);
        document.querySelector(".oruSection input").setAttribute("data-label", miestuInfo[i].code);
      }
    }
  });


miest.open('GET', 'https://api.meteo.lt/v1/places');
miest.send();