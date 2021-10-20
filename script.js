const pads = document.querySelector('.pads');
createPads(16);

function removePads () {
    while (pads.firstChild) {
        pads.removeChild(pads.firstChild);
    }
}

function createPads (count) {
    for (let i = 0; i < count * count; i++) {
        const pad = document.createElement('div');
        pads.appendChild(pad);
        pad.style.width = (1 / count * 100) + '%';
        pad.style.height = getComputedStyle(pad).getPropertyValue('width');
    }
}
