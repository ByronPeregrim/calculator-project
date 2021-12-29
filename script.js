


const add = (x, y) => {
    return Number(x) + Number(y);
};

const subtract = (x, y) => {
    return Number(x) - Number(y);
};

const multiply = (x, y) => {
    return Number(x) * Number(y);
};

const divide = (x, y) => {
    if (y === 0 || y === '0') {
        return "ERROR, CANNOT DIVIDE BY 0!"
    } return Number(x) / Number(y);
};



// equals function activated when user clicks equals button. 
// It takes the first operation and executes, then continues with the next operation, using the result of the first as the first operand.

const equals = () => {
    array = displayValue.split(' ');
    for (let i=0; i< array.length; i) {
        if (array[i+1] === '+') {
            array[i] = add(array[i], array[i+2]);
            array.splice(i+1, 2)
        } else if (array[i+1] === '-') {
            array[i] = subtract(array[i], array[i+2]);
            array.splice(i+1, 2)
        } else if (array[i+1] === 'x' || array[i+1] === '*') {
            array[i] = multiply(array[i], array[i+2]);
            array.splice(i+1, 2)
        } else if (array[i+1] === '/') {
            array[i] = divide(array[i], array[i+2]);
            array.splice(i+1, 2)
        } else {
            break;
        }
        
    };
    return array.join(' ');
};



//Keyboard feature
window.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key == 0 || key == 1 || key == 2 || key == 3 || key == 4 || key == 5 ||
        key == 6 || key == 7 || key == 8 || key == 9 || key == '.') {
        displayValue += key;
        topBox.textContent = displayValue;
    } else if (key == '/' || key == 'x' || key == '-' || key == '+' || key == '*') {
        displayValue += ' ' + key + ' ';
        topBox.textContent = displayValue;
    } else if (key == 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        topBox.textContent = displayValue;
    } else if (key == 'Delete') {
        displayValue = '';
        topBox.textContent = displayValue;
        bottomBox.textContent = '';
    } else if (key == 'Enter' || key == '=') {
        bottomBox.textContent = '= ' + (Math.round(equals() * 100) / 100);
    }
});


const topBox = document.querySelector('#topBox');
const bottomBox = document.querySelector('#bottomBox');


let displayValue = '';
topBox.textContent = displayValue;




const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', function () {
    displayValue = '';
    topBox.textContent = displayValue;
    bottomBox.textContent = '';
    this.classList.add('selected');
});

const deleteButton = document.querySelector('#deleteButton');
deleteButton.addEventListener('click', function () {
    displayValue = displayValue.slice(0, -1);
    topBox.textContent = displayValue;
    this.classList.add('selected');
});





const button7 = document.querySelector('#button7');
button7.addEventListener('click', function () {
    displayValue += 7;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button8 = document.querySelector('#button8');
button8.addEventListener('click', function () {
    displayValue += 8;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button9 = document.querySelector('#button9');
button9.addEventListener('click', function () {
    displayValue += 9;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const buttonDiv = document.querySelector('#buttonDiv');
buttonDiv.addEventListener('click', function () {
    displayValue += ' / ';
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button4 = document.querySelector('#button4');
button4.addEventListener('click', function () {
    displayValue += 4;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button5 = document.querySelector('#button5');
button5.addEventListener('click', function () {
    displayValue += 5;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button6 = document.querySelector('#button6');
button6.addEventListener('click', function () {
    displayValue += 6;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const buttonX = document.querySelector('#buttonX');
buttonX.addEventListener('click', function () {
    displayValue += ' x ';
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
    displayValue += 1;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function () {
    displayValue += 2;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button3 = document.querySelector('#button3');
button3.addEventListener('click', function () {
    displayValue += 3;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const buttonMinus = document.querySelector('#buttonMinus');
buttonMinus.addEventListener('click', function () {
    displayValue += ' - ';
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const button0 = document.querySelector('#button0');
button0.addEventListener('click', function () {
    displayValue += 0;
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const buttonDecimal = document.querySelector('#buttonDecimal');
buttonDecimal.addEventListener('click', function () {
    displayValue += '.';
    topBox.textContent = displayValue;
    this.classList.add('selected');
});

const buttonEqual = document.querySelector('#buttonEqual');
buttonEqual.addEventListener('click', function () {
    bottomBox.textContent = '= ' + (Math.round(equals() * 100) / 100);
    this.classList.add('selected');
});

const buttonPlus = document.querySelector('#buttonPlus');
buttonPlus.addEventListener('click', function () {
    displayValue += ' + ';
    topBox.textContent = displayValue;
    this.classList.add('selected');
});






const buttons = document.querySelectorAll('.buttons');
buttons.forEach(button => button.addEventListener('transitionend', function (e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('selected');
}));

const clearDeleteButtons = document.querySelectorAll('.clearDeleteButton');
clearDeleteButtons.forEach(button => button.addEventListener('transitionend', function (e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('selected');
}));
