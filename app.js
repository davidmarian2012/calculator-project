let active_number = 0;
let inactive_number = 0;

let operator = "undefined";
let current_operation = false;

let active = document.createElement('h2');
let inactive = document.createElement('h3');

const resultScreen = document.querySelector('.resultscreen');

const digit0btn = document.querySelector('.digit0-btn');
const digit1btn = document.querySelector('.digit1-btn');
const digit2btn = document.querySelector('.digit2-btn');
const digit3btn = document.querySelector('.digit3-btn');
const digit4btn = document.querySelector('.digit4-btn');
const digit5btn = document.querySelector('.digit5-btn');
const digit6btn = document.querySelector('.digit6-btn');
const digit7btn = document.querySelector('.digit7-btn');
const digit8btn = document.querySelector('.digit8-btn');
const digit9btn = document.querySelector('.digit9-btn');

//Adding effect for clicking buttons

const button = document.querySelectorAll('.btn');

button.forEach(button => button.addEventListener('mousedown', () => {
    button.style.marginTop = '7px';
}))

button.forEach(button => button.addEventListener('mouseup', () => {
    button.style.marginTop = '0px';
}))

//Function to form the number

function addDigit(digit) {
    if (current_operation == true) {
        current_operation = false;
    }
    active_number = active_number * 10 + digit;
}

//Adding digits to the screen on click

for (let i = 0; i < 10; i++) {
    document.querySelector(`.digit${i}-btn`).addEventListener('click', () => {
        addDigit(i);
        active.textContent = active_number;
        resultScreen.appendChild(active);
    })
}

//Adding digits to the screen on keyboard

document.addEventListener('keyup', (event) => {
    let name = event.key;
    for (let i = 0; i < 10; i++) {
        if (name == i) {
            addDigit(i);
            active.textContent = active_number;
            resultScreen.appendChild(active);
        }
    }
})

//Functionality for the Clear button on click

document.querySelector('.clear-btn').addEventListener('click', () => {
    active_number = 0;
    inactive_number = 0;
    active.textContent = '';
    inactive.textContent = '';
})

//Functionality for the Remove button on click

document.querySelector('.remove-btn').addEventListener('click', () => {
    active_number -= active_number % 10;
    active_number /= 10;
    active.textContent = active_number;
})

//Functionality for Adding numbers

document.querySelector('.add-btn').addEventListener('click', () => {
    if (current_operation == false) {
        current_operation = true;
        operator = "add";

        inactive_number += active_number;
        active_number = 0;

        active.textContent = inactive_number;
        inactive.textContent = `${inactive_number} +`;

        resultScreen.appendChild(inactive);
        resultScreen.appendChild(active);
    }
})

document.addEventListener('keyup', (event) => {
    let name = event.key;
    if (name == '+') {
        if (current_operation == false) {
            current_operation = true;
            operator = "add";

            inactive_number += active_number;
            active_number = 0;

            active.textContent = inactive_number;
            inactive.textContent = `${inactive_number} +`;

            resultScreen.appendChild(inactive);
            resultScreen.appendChild(active);
        }
    }
})

//Functionality for Subtracting numbers

document.querySelector('.subtract-btn').addEventListener('click', () => {
    if (current_operation == false) {
        current_operation = true;
        operator = "subtract";

        if (inactive_number != 0) {
            inactive_number -= active_number;
        }
        else {
            inactive_number = active_number;
        }

        active_number = 0;

        active.textContent = inactive_number;
        inactive.textContent = `${inactive_number} -`;

        resultScreen.appendChild(inactive);
        resultScreen.appendChild(active);
    }
})

document.addEventListener('keyup', (event) => {
    let name = event.key;
    if (name == '-') {
        if (current_operation == false) {
            current_operation = true;
            operator = "subtract";

            if (inactive_number != 0) {
                inactive_number -= active_number;
            }
            else {
                inactive_number = active_number;
            }

            active_number = 0;

            active.textContent = inactive_number;
            inactive.textContent = `${inactive_number} -`;

            resultScreen.appendChild(inactive);
            resultScreen.appendChild(active);
        }
    }
})

//Functionality for Multiplying numbers

document.querySelector('.multiply-btn').addEventListener('click', () => {
    if (current_operation == false) {
        current_operation = true;
        operator = "multiply";

        if (inactive_number != 0) {
            inactive_number *= active_number;
        }
        else {
            inactive_number = active_number;
        }

        active_number = 0;

        active.textContent = inactive_number;
        inactive.textContent = `${inactive_number} ×`;

        resultScreen.appendChild(inactive);
        resultScreen.appendChild(active);
    }
})

document.addEventListener('keyup', (event) => {
    let name = event.key;
    if (name == '*') {
        if (current_operation == false) {
            current_operation = true;
            operator = "multiply";

            if (inactive_number != 0) {
                inactive_number *= active_number;
            }
            else {
                inactive_number = active_number;
            }

            active_number = 0;

            active.textContent = inactive_number;
            inactive.textContent = `${inactive_number} ×`;

            resultScreen.appendChild(inactive);
            resultScreen.appendChild(active);
        }
    }
})

//Functionality for Dividing numbers

document.querySelector('.divide-btn').addEventListener('click', () => {
    if (current_operation == false) {
        current_operation = true;
        operator = "divide";

        if (inactive_number != 0) {
            inactive_number /= active_number;
            inactive_number = Number(inactive_number.toFixed(2));
        }
        else {
            inactive_number = active_number;
        }

        active_number = 0;

        active.textContent = inactive_number;
        inactive.textContent = `${inactive_number} ÷`;

        resultScreen.appendChild(inactive);
        resultScreen.appendChild(active);
    }
})

document.addEventListener('keyup', (event) => {
    let name = event.key;
    if (name == '/') {
        if (current_operation == false) {
            current_operation = true;
            operator = "divide";

            if (inactive_number != 0) {
                inactive_number /= active_number;
                inactive_number = Number(inactive_number.toFixed(2));
            }
            else {
                inactive_number = active_number;
            }

            active_number = 0;

            active.textContent = inactive_number;
            inactive.textContent = `${inactive_number} ÷`;

            resultScreen.appendChild(inactive);
            resultScreen.appendChild(active);
        }
    }
})


//Functionality for Equal sign

document.querySelector('.equal-btn').addEventListener('click', () => {
    if (operator == "add") {
        active_number += inactive_number;
        inactive_number = 0;
    } else if (operator == "subtract") {
        active_number = inactive_number - active_number;
        inactive_number = 0;
    } else if (operator == "multiply") {
        active_number *= inactive_number;
        inactive_number = 0;
    } else if (operator == "divide") {
        active_number = inactive_number / active_number;
        active_number = Number(active_number.toFixed(2));
        inactive_number = 0;
    }

    inactive.textContent = '';
    active.textContent = active_number;
    resultScreen.appendChild(inactive);
    resultScreen.appendChild(active);
    current_operation = false;
})

document.addEventListener('keyup', (event) => {
    let name = event.key;
    if (name == '=' || name == 'Enter') {
        if (operator == "add") {
            active_number += inactive_number;
            inactive_number = 0;
        } else if (operator == "subtract") {
            active_number = inactive_number - active_number;
            inactive_number = 0;
        } else if (operator == "multiply") {
            active_number *= inactive_number;
            inactive_number = 0;
        } else if (operator == "divide") {
            active_number = inactive_number / active_number;
            active_number = Number(active_number.toFixed(2));
            inactive_number = 0;
        }

        inactive.textContent = '';
        active.textContent = active_number;
        resultScreen.appendChild(inactive);
        resultScreen.appendChild(active);
        current_operation = false;
    }
})

//Animations support for keyboard pt1

document.addEventListener('keydown', (event) => {
    let name = parseInt(event.key);
    let nameString = event.key;
    if (name == 1) {
        digit1btn.style.marginTop = '7px';
    }
    else if (name == 2) {
        digit2btn.style.marginTop = '7px';
    }
    else if (name == 3) {
        digit3btn.style.marginTop = '7px';
    }
    else if (name == 4) {
        digit4btn.style.marginTop = '7px';
    }
    else if (name == 5) {
        digit5btn.style.marginTop = '7px';
    }
    else if (name == 6) {
        digit6btn.style.marginTop = '7px';
    }
    else if (name == 7) {
        digit7btn.style.marginTop = '7px';
    }
    else if (name == 8) {
        digit8btn.style.marginTop = '7px';
    }
    else if (name == 9) {
        digit9btn.style.marginTop = '7px';
    }
    else if (name == 0) {
        digit0btn.style.marginTop = '7px';
    }

    if (nameString == 'Delete' || nameString == 'Backspace') {
        document.querySelector('.remove-btn').style.marginTop = '7px';
    }
    else if (nameString == '-') {
        document.querySelector('.subtract-btn').style.marginTop = '7px';
    }
    else if (nameString == '+') {
        document.querySelector('.add-btn').style.marginTop = '7px';
    }
    else if (nameString == '*') {
        document.querySelector('.multiply-btn').style.marginTop = '7px';
    }
    else if (nameString == '/') {
        document.querySelector('.divide-btn').style.marginTop = '7px';
    }
    else if (nameString == '=' || nameString == 'Enter') {
        document.querySelector('.equal-btn').style.marginTop = '7px';
    }
})

//Animations support for keyboard pt2

document.addEventListener('keyup', (event) => {
    let name = parseInt(event.key);
    let nameString = event.key;
    if (name == 1) {
        digit1btn.style.marginTop = '0px';
    }
    else if (name == 2) {
        digit2btn.style.marginTop = '0px';
    }
    else if (name == 3) {
        digit3btn.style.marginTop = '0px';
    }
    else if (name == 4) {
        digit4btn.style.marginTop = '0px';
    }
    else if (name == 5) {
        digit5btn.style.marginTop = '0px';
    }
    else if (name == 6) {
        digit6btn.style.marginTop = '0px';
    }
    else if (name == 7) {
        digit7btn.style.marginTop = '0px';
    }
    else if (name == 8) {
        digit8btn.style.marginTop = '0px';
    }
    else if (name == 9) {
        digit9btn.style.marginTop = '0px';
    }
    else if (name == 0) {
        digit0btn.style.marginTop = '0px';
    }

    if (nameString == 'Delete' || nameString == 'Backspace') {
        document.querySelector('.remove-btn').style.marginTop = '0px';
        active_number -= active_number % 10;
        active_number /= 10;
        active.textContent = active_number;
    }
    else if (nameString == '-') {
        document.querySelector('.subtract-btn').style.marginTop = '0px';
    }
    else if (nameString == '+') {
        document.querySelector('.add-btn').style.marginTop = '0px';
    }
    else if (nameString == '*') {
        document.querySelector('.multiply-btn').style.marginTop = '0px';
    }
    else if (nameString == '/') {
        document.querySelector('.divide-btn').style.marginTop = '0px';
    }
    else if (nameString == '=' || nameString == 'Enter') {
        document.querySelector('.equal-btn').style.marginTop = '0px';
    }
})