const sketchpad = document.querySelector('.sketchpad');
const buttons = document.querySelectorAll('.buttons');


function drawPad(size=2){
    document.querySelectorAll('.pixel').forEach(p => sketchpad.removeChild(p))

    sketchpad.style.cssText = `grid-template-rows: repeat(${size}, 1fr);`
    sketchpad.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
    for(let i = 0; i < size * size; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        sketchpad.appendChild(pixel);
    }

    document.querySelectorAll('.pixel').forEach(pix => {
        pix.addEventListener('mouseover', e => {
            pix.style.cssText = 'background-color: black;'
        })
    })
}

drawPad();

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let size = button.value;
        drawPad(size);   
        document.querySelectorAll('.pixel').forEach(pix => {
            pix.addEventListener('click', e => {
                pix.style.cssText = 'background-color: black;'
            })
        })
    })
})

document.querySelector('#clear').addEventListener('click', e => {
    document.querySelectorAll('.pixel').forEach(p => {
        p.style.cssText = 'background-color: none';
    })
})
