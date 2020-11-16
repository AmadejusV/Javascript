(function () {


const button2 = document.querySelector('.formButton');
const inputCol = document.querySelector('.inputCol');
const inputRow = document.querySelector('.inputRow');
const table = document.getElementById('myTable');


function makeTable(){
  
  for(let i=0; i<inputRow.value; i++){
    let row = document.createElement('tr');
    table.appendChild(row);

    for(let b=0; b<inputCol.value; b++){
      let column = document.createElement('td');
      row.appendChild(column);
      column.innerHTML = "|c"+(b+1)+" r"+(i+1)+"|";
    }
  }
}

button2.addEventListener('click', makeTable);


})();