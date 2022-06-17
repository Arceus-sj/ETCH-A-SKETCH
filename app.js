const display = document.querySelector('.container');

for(let row = 0; row < 256; row++) {
    const box = document.createElement('div');
    box.setAttribute('class', 'grid-box');
    display.appendChild(box);

}