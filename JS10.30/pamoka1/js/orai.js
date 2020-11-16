
let buttonRodyt = document.querySelector(".showOrai");
var oruPrognoze = '';

let divOrai = document.createElement('div');

  buttonRodyt.addEventListener("click", function(){
    var orai = new XMLHttpRequest();
    let kodas = document.querySelector(".oruSection input").getAttribute("data-label");
    let miestas = document.querySelector(".oruSection input").value;
    orai.onreadystatechange = function(){
      if(orai.readyState === 4){
        let oruInfo = JSON.parse(orai.responseText);
        let kondicija = oruInfo.forecastTimestamps[0].conditionCode;
        
        document.querySelector('.oruSection').appendChild(divOrai);
        divOrai.classList.add("mystyle");
        
        switch(kondicija) {
          case 'clear':
            oruPrognoze ='<i class="fas fa-sun"></i>';
            break;
          case 'isolated-clouds':
            oruPrognoze ='<i class="fab fa-soundcloud"></i>';
            break;
          case 'scattered-clouds':
            oruPrognoze ='<i class="fas fa-cloud-sun"></i>';
            break;
          case 'overcast':
            oruPrognoze ='<i class="fas fa-cloud"></i>';
            break;
          case 'light-rain':
            oruPrognoze ='<i class="fas fa-tint"></i>';
            break;
          case 'moderate-rain':
            oruPrognoze ='<i class="fas fa-cloud-rain"></i>';
            break;
          case 'heavy-rain':
            oruPrognoze ='<i class="fas fa-cloud-showers-heavy"></i>';
            break;
          case 'sleet':
            oruPrognoze ='<i class="fas fa-snowflake"></i><i class="fas fa-cloud-showers-heavy"></i>';
            break;
          case 'light-snow':
            oruPrognoze ='<i class="fas fa-snowflake"></i>';
            break;
          case 'moderate-snow':
            oruPrognoze ='<i class="fas fa-snowflake"></i><i class="fas fa-snowflake"></i>';
            break;
          case 'heavy-snow':
            oruPrognoze ='<i class="fas fa-snowflake"></i><i class="fas fa-snowflake"></i><i class="fas fa-snowflake"></i>';
            break;
          case 'fog':
            oruPrognoze ='<i class="fas fa-smog"></i>';
            break;
          default:
            oruPrognoze = '<i class="fas fa-camera"></i>';
        } 
        divOrai.innerHTML=oruPrognoze+" ivestas pavadinimas: "+miestas;
      }
      if(orai.status === 404){
        document.querySelector('.oruSection').appendChild(divOrai);
        divOrai.classList.add("mystyle");
        oruPrognoze='<i class="fas fa-minus-circle"></i>';
        divOrai.innerHTML=oruPrognoze+" ivestas pavadinimas: "+miestas;
    }
    document.querySelector(".oruSection input").setAttribute("data-label", "tuscia2");
    };
    
    var link ='https://api.meteo.lt/v1/places/'+kodas+'/forecasts/long-term';
    orai.open('GET', link);
    orai.send();
  });









// orai.open('GET', 'https://api.meteo.lt/v1/places/'+kodas+'/forecasts/long-term');
// orai.send();


