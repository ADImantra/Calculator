let displayTextBase = [];
let displayTextNew = [];
let operatorCurrent = ``;
let primed = false;

let baseValue = parseInt(displayTextBase.join(), 10);
let newValue = parseInt(displayTextNew.join(), 10);

const numpad = document.querySelectorAll(`.number`);
const display = document.querySelector(`.num-display`);

const clearButton = document.getElementById(`clear`);
const multiplyButton = document.getElementById(`multiply`);
const subtractButton = document.getElementById(`subtract`);
const addButton = document.getElementById(`add`);
const remainderButton = document.getElementById(`remainder`);
const sqrtButton = document.getElementById(`sqrt`);
const exponentButton = document.getElementById(`exponent`);
const result = document.getElementById(`result`);

multiplyButton.addEventListener(`click`, () => {
    if (!primed) {
        operatorCurrent = `multiply`
        primed = true;
    } else {
        //
    }
});

subtractButton.addEventListener(`click`, () => {
    operatorCurrent = `subtract`;
    primed = true;
});

addButton.addEventListener(`click`, () => {
    operatorCurrent = `add`;
    primed = true;
});

remainderButton.addEventListener(`click`, () => {
    operatorCurrent = `remainder`;
    primed = true;
});

sqrtButton.addEventListener(`click`, () => {
    operatorCurrent = `sqrt`;
    primed = true;
});

exponentButton.addEventListener(`click`, () => {
    operatorCurrent = `exp`;
    primed = true;
});

result.addEventListener(`click` ,() => {

})

numpad.forEach(num => num.addEventListener(`click`, () => {
    displayTextBase.push(num.textContent)
    display.textContent = displayTextBase.join(``); 
}))

clearButton.addEventListener(`click`, () => {
    displayTextBase = [];
    display.textContent = 0;
    primed = false;
});

