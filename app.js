// import functions and grab DOM elements
import { add, subtract, multiply, divide, remainder } from '../mathactions.js';

const firstInputEl = document.getElementById('first-num');
const secondInputEl = document.getElementById('second-num');
const addRadioEl = document.getElementById('radio-add');
const subtractRadioEl = document.getElementById('radio-subtract');
const multiplyRadioEl = document.getElementById('radio-multiply');
const divideRadioEl = document.getElementById('radio-divide');
const actionButtonEl = document.getElementById('action-button');
const resultEl = document.getElementById('result');

// initialize state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

let firstValue = 0;
let secondValue = 0;



actionButtonEl.addEventListener('click', () => {
    firstValue = +firstInputEl.value;
    secondValue = +secondInputEl.value;
    // figure out which radio button is selected

    // perform function according to which radio is selected
    // .checked value returns true/false
    if (addRadioEl.checked) {
        resultEl.textContent = `Result: ${add(firstValue, secondValue)}`;
    } else if (subtractRadioEl.checked) {
        resultEl.textContent = `Result: ${subtract(firstValue, secondValue)}`;
    } else if (multiplyRadioEl.checked) {
        resultEl.textContent = `Result: ${multiply(firstValue, secondValue)}`;
    } else if (divideRadioEl.checked) {
        if (secondValue !== 0) {
            if (remainder(firstValue, secondValue)) {
                resultEl.textContent = `Result: ${divide(firstValue, secondValue)} (or ${parseInt(divide(firstValue, secondValue))} with ${remainder(firstValue, secondValue)} remaining).`;
            } else {
                resultEl.textContent = `Result: ${divide(firstValue, secondValue)}`;
            }
        } else {
            resultEl.textContent = `Result: You can't divide by zero!`;
        }
    } else {
        resultEl.textContent = `Please select an operation.`;
    }
});

