let displayTextBase = [];
let displayTextNew = [];
let operatorCurrent = ``;
let primed = false;
let baseValue = 0;
let newValue = 0;

const numpad = document.querySelectorAll(`.number`);
const display = document.querySelector(`.num-display`);

const clearButton = document.getElementById(`clear`);
const multiplyButton = document.getElementById(`multiply`);
const divideButton = document.getElementById(`divide`);
const subtractButton = document.getElementById(`subtract`);
const addButton = document.getElementById(`add`);
const remainderButton = document.getElementById(`remainder`);
const sqrtButton = document.getElementById(`sqrt`);
const exponentButton = document.getElementById(`exponent`);
const result = document.getElementById(`result`);

multiplyButton.addEventListener(`click`, () => {
    operatorCurrent = `multiply`
    primed = true;
});

divideButton.addEventListener(`click`, () => {
    operatorCurrent = `divide`
    primed = true;
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

numpad.forEach(num => num.addEventListener(`click`, () => {
    if (!primed) {
        displayTextBase.push(num.textContent);
        baseValue = parseInt(displayTextBase.join(``), 10)
        display.textContent = displayTextBase.join(``);
        console.log(baseValue)
        console.log(newValue)
        
    } else {
        displayTextNew.push(num.textContent);
        newValue = parseInt(displayTextNew.join(``), 10)
        display.textContent = displayTextNew.join(``);
        console.log(baseValue)
        console.log(newValue)
    };

}));

function multiply(baseV, newV) {
    return baseV * newV;
};

function divide(baseV, newV) {
    return baseV / newV;
};

function subtract(baseV, newV) {
    return baseV - newV;
};

function add(baseV, newV) {
    return baseV + newV;
};

function remainder(baseV, newV) {
    return baseV % newV;
};

function sqrt(baseV, newV) {
    return baseV + newV;
};

function exponent(baseV, newV) {
    geoSum = 1;
    for (let i = 0; i < newV; i++) {
        geoSum = geoSum * baseV
    }
    return geoSum;
};


result.addEventListener(`click`, () => {
    switch (operatorCurrent) {
        case `multiply`:
            baseValue = multiply(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break

        case `divide`:
            baseValue = divide(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break

        case `subtract`:
            baseValue = subtract(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break

        case `add`:
            baseValue = add(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break

        case `remainder`:
            baseValue = remainder(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break

        case `sqrt`:
            baseValue = sqrt(baseValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break

        case `exp`:
            baseValue = exponent(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            break
    }
});

clearButton.addEventListener(`click`, () => {
    displayTextBase = [];
    displayTextNew = [];
    baseValue = 0;
    newValue = 0;
    operatorCurrent = ``;
    primed = false;
    display.textContent = 0;
});

