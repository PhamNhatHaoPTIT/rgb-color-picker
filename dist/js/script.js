function getQuerySelector(selectEl) {
    return document.querySelector(selectEl);
}

let red = getQuerySelector("#red"), 
    green = getQuerySelector("#green"), 
    blue = getQuerySelector("#blue");

let colorDisplay = getQuerySelector("#color-display");

let redLabel = getQuerySelector("label[for=red]"),
    greenLabel = getQuerySelector("label[for=green]"),
    blueLabel = getQuerySelector("label[for=blue]");

displayColor();
initSlidesColor();
colorSlides();

function displayColor() {
    colorDisplay.style.backgroundColor = ` rgb( ${red.value}, ${green.value}, ${blue.value}) `;
}

function initSlidesColor() {
    redLabel.style.background = ` rgb(${red.value}, 0, 0) `;
    greenLabel.style.background = ` rgb(0 , ${green.value}, 0) `;
    blueLabel.style.background = ` rgb(0, 0, ${blue.value}) `;

    sliderFill(red);
    sliderFill(green);
    sliderFill(blue);

}

function sliderFill(clr) {
    let val = (clr.value - clr.min) / (clr.max - clr.min);
    let percent = val * 100;
    if(clr == red) {
        clr.style.background = `linear-gradient(to right, rgb(${clr.value}, 0, 0) ${percent}%, #cccccc 0%)`;
    } else if(clr == green) {
        clr.style.background = `linear-gradient(to right, rgb(0, ${clr.value}, 0) ${percent}%, #cccccc 0%)`;
    } else if(clr == blue) {
        clr.style.background = `linear-gradient(to right, rgb(0, 0, ${clr.value}) ${percent}%, #cccccc 0%)`;
    }
}

function colorSlides() {
    red.addEventListener('input', () => {
        displayColor();
        initSlidesColor();
    });

    green.addEventListener('input', () => {
        displayColor();
        initSlidesColor();
    });

    blue.addEventListener('input', () => {
        displayColor();
        initSlidesColor();
    });

}