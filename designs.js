// Select color input
let color = document.getElementById('colorPicker');

// Select size input
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let form = document.getElementById('sizePicker');
let canvas = document.getElementById('pixelCanvas');
function makeGrid() {
       canvas.innerHTML = '';

    for (let h = 0; h < height.value; h++) {
      	    let row = document.createElement('tr');
          for (let w = 0; w < width.value; w++) {	
          let td = document.createElement('td');
            let cell = row.appendChild(td);       
           }
        canvas.appendChild(row);
    }
}

canvas.addEventListener('click', function (evt) {
   if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
       event.target.style.backgroundColor = color.value;
   }
});

form.onsubmit = function (e) {
    e.preventDefault();
    makeGrid();
};
