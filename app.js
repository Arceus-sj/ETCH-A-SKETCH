const display = document.querySelector('.container');

for(let row = 0; row < 256; row++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'grid-box');
    display.appendChild(box);

}


// adding random colors to divs elements: 
const randomColor = Math.floor(Math.random() * 16777215).toString(16);

