const sketchpad = document.querySelector('.sketchpad');

for(let i = 0; i < 16; i++){
    const pixel = document.createElement('div');
    pixel.style.cssText = 'height: 50px; width: 50px; border: 2px solid orange;'
    sketchpad.appendChild(pixel);
}