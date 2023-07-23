let displayTextBase = [];
let displayTextNew = [];
let operatorCurrent = ``;
let primed = false;
let chain = false;
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
    if (operatorCurrent === ``) {
        operatorCurrent = `multiply`;
        primed = true;
    } else {
        resultGiver();
        operatorCurrent = `multiply`;
    };
});

divideButton.addEventListener(`click`, () => {
    if (operatorCurrent === ``) {
        operatorCurrent = `divide`;
        primed = true;
    } else {
        resultGiver();
        operatorCurrent = `divide`;
    };
});

subtractButton.addEventListener(`click`, () => {
    if (operatorCurrent === ``) {
        operatorCurrent = `subtract`;
        primed = true;
    } else {
        resultGiver();
        operatorCurrent = `subtract`;
    };
});

addButton.addEventListener(`click`, () => {
    if (operatorCurrent === ``) {
        operatorCurrent = `add`;
        primed = true;
    } else {
        resultGiver();
        operatorCurrent = `add`;
    };
    
});

remainderButton.addEventListener(`click`, () => {
    if (operatorCurrent === ``) {
        operatorCurrent = `remainder`;
        primed = true;
    } else {
        resultGiver();
        operatorCurrent = `remainder`;
    };
});

sqrtButton.addEventListener(`click`, () => {
    if (operatorCurrent === ``) {
        operatorCurrent = `sqrt`;
        primed = true;
    } else {
        resultGiver()
    };
});

exponentButton.addEventListener(`click`, () => {
    if (operatorCurrent === ``) {
        operatorCurrent = `exponent`;
        primed = true;
    } else {
        resultGiver();
        operatorCurrent = `exponent`;
    };
});

clearButton.addEventListener(`click`, clear);

result.addEventListener(`click`,  resultGiver);

numpad.forEach(num => num.addEventListener(`click`, () => {
    if (!primed) {
        displayTextBase.push(num.textContent);
        baseValue = parseFloat(displayTextBase.join(``), 10)
        display.textContent = displayTextBase.join(``);
        
    } else {
        displayTextNew.push(num.textContent);
        newValue = parseFloat(displayTextNew.join(``), 10)
        display.textContent = displayTextNew.join(``);
    };

}));

function multiply(baseV, newV) {
    return baseV * newV
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

function sqrt(baseV) {
    return Math.sqrt(baseV);
};

function exponent(baseV, newV) {
    geoSum = 1;
    for (let i = 0; i < newV; i++) {
        geoSum = geoSum * baseV
    }
    return geoSum;
};

function resultGiver() {
    switch (operatorCurrent) {
        case `multiply`:
            baseValue = multiply(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break

        case `divide`:
            baseValue = divide(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break

        case `subtract`:
            baseValue = subtract(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break

        case `add`:
            baseValue = add(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break

        case `remainder`:
            baseValue = remainder(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break

        case `sqrt`:
            baseValue = sqrt(baseValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break

        case `exp`:
            baseValue = exponent(baseValue, newValue);
            display.textContent = baseValue;
            displayTextBase = [];
            displayTextNew = [];
            chain = true;
            break
    }
}

function clear() {
    displayTextBase = [];
    displayTextNew = [];
    baseValue = 0;
    newValue = 0;
    operatorCurrent = ``;
    primed = false;
    display.textContent = 0;
}

