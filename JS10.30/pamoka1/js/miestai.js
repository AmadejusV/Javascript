var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      let miestuInfo = JSON.parse(xhr.responseText);
      console.log(miestuInfo);
      let list = '';
      for(let i = 0; i < miestuInfo.length; i++){
        list += '<option value=">'+ miestuInfo[i].name+ '">';
      }
      document.querySelector('.placesMiestai').innerHTML=list;
      console.log();
    }
  };

xhr.open('GET', 'https://api.meteo.lt/v1/places');
xhr.send();

