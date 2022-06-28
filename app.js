const display = document.querySelector('.container');
// displaying grid box
for(let row = 0; row < 256; row++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'grid-box');
    display.appendChild(box);

}

let gridBox = document.querySelectorAll('.grid-box');

gridBox.forEach(function (box) {
    // adding random colors to divs elements: 
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    box.addEventListener('mouseover', function (event) {
       event.target.style.backgroundColor = `#${randomColor}`;
    });
});




