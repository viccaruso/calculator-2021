// import functions and grab DOM elements
import { add, subtract, multiply, divide, remainder } from './mathfunctions.js';

const oneButtonEl = document.getElementById('one');
const twoButtonEl = document.getElementById('two');
const threeButtonEl = document.getElementById('three');
const fourButtonEl = document.getElementById('four');
const fiveButtonEl = document.getElementById('five');
const sixButtonEl = document.getElementById('six');
const sevenButtonEl = document.getElementById('seven');
const eightButtonEl = document.getElementById('eight');
const nineButtonEl = document.getElementById('nine');
const zeroButtonEl = document.getElementById('zero');

const multiplyButtonEl = document.getElementById('multiply');
const divideButtonEl = document.getElementById('divide');
const addButtonEl = document.getElementById('plus');
const subtractButtonEl = document.getElementById('minus');
const equalsButtonEl = document.getElementById('equals');

const textFieldEl = document.getElementById('input');
const resetButtonEl = document.getElementById('reset');
// initialize state

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

let inputText = '';
let leftSide = '';
let operation = '';
let rightSide = '';


oneButtonEl.addEventListener('click', () => {
    console.log('1');
    inputText += '1';
    textFieldEl.setAttribute('placeholder', inputText);
});

twoButtonEl.addEventListener('click', () => {
    console.log('2');
    inputText += '2';
    textFieldEl.setAttribute('placeholder', inputText);
});

threeButtonEl.addEventListener('click', () => {
    console.log('3');
    inputText += '3';
    textFieldEl.setAttribute('placeholder', inputText);
});

fourButtonEl.addEventListener('click', () => {
    console.log('4');
    inputText += '4';
    textFieldEl.setAttribute('placeholder', inputText);
});

fiveButtonEl.addEventListener('click', () => {
    console.log('5');
    inputText += '5';
    textFieldEl.setAttribute('placeholder', inputText);
});

sixButtonEl.addEventListener('click', () => {
    console.log('6');
    inputText += '6';
    textFieldEl.setAttribute('placeholder', inputText);
});

sevenButtonEl.addEventListener('click', () => {
    console.log('7');
    inputText += '7';
    textFieldEl.setAttribute('placeholder', inputText);
});

eightButtonEl.addEventListener('click', () => {
    console.log('8');
    inputText += '8';
    textFieldEl.setAttribute('placeholder', inputText);
});

nineButtonEl.addEventListener('click', () => {
    console.log('9');
    inputText += '9';
    textFieldEl.setAttribute('placeholder', inputText);
});

zeroButtonEl.addEventListener('click', () => {
    console.log('0');
    inputText += '0';
    textFieldEl.setAttribute('placeholder', inputText);
});

addButtonEl.addEventListener('click', () => {
    addButtonEl.children[0].classList.add('selected-background');
    leftSide = inputText; 
    inputText = '';
    operation = '+';
});

subtractButtonEl.addEventListener('click', () => {
    subtractButtonEl.children[0].classList.add('selected-background');
    leftSide = inputText; 
    inputText = '';
    operation = '-';
});

multiplyButtonEl.addEventListener('click', () => {
    multiplyButtonEl.children[0].classList.add('selected-background');
    leftSide = inputText; 
    inputText = '';
    operation = '*';
});

divideButtonEl.addEventListener('click', () => {
    divideButtonEl.children[0].classList.add('selected-background');
    leftSide = inputText;
    inputText = '';
    operation = '/';
});

equalsButtonEl.addEventListener('click', () => { 
    rightSide = inputText;
    console.log('equals clicked');
    switch (operation) {
        case '+':
            console.log('left: ' + leftSide);
            console.log('right: ' + rightSide);
            textFieldEl.setAttribute('placeholder', (Number(rightSide) + Number(leftSide)));
            break; 
        case '-':
            textFieldEl.setAttribute('placeholder', (Number(rightSide) - Number(leftSide)));
            break; 
        case '*':
            textFieldEl.setAttribute('placeholder', (Number(rightSide) * Number(leftSide)));
            break; 
        case '/':
            textFieldEl.setAttribute('placeholder', (Number(rightSide) / Number(leftSide)));
            break; 
    }
});

resetButtonEl.addEventListener('click', () => {
    console.log(divideButtonEl)
    leftSide = '';
    inputText = '';
    operation = '';
    textFieldEl.setAttribute('placeholder', inputText);
    divideButtonEl.children[0].classList.remove('selected-background');
    multiplyButtonEl.children[0].classList.remove('selected-background');
    addButtonEl.children[0].classList.remove('selected-background');
    subtractButtonEl.children[0].classList.remove('selected-background');
});
