const pads = document.querySelector('.pads');
createPads(16);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    removePads();
    const count = promptPadsCount();
    createPads(count);
});

function promptPadsCount () {
    let padsCount;
    const PADS_MAX = 100;

    do {
        padsCount = +prompt(`Enter new grid size (max - ${PADS_MAX})`)
    } while (!padsCount || padsCount > PADS_MAX);

    return padsCount;
}

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
        pad.style.height = pads.childNodes.length === 1 ?
                getComputedStyle(pad).getPropertyValue('width') :
                pads.firstChild.style.height;
        pad.style.background = 'white';
        pad.addEventListener('mouseenter', e => updatePadColor(e.target));
    }
}

function updatePadColor (pad) {
    const hue = random(360);
    const saturation = '100%';
    const lightness = '50%';
    pad.style.background = `hsl(${hue}, ${saturation}, ${lightness})`;
}

function random (limit) {
    return Math.floor(Math.random() * limit);
}
