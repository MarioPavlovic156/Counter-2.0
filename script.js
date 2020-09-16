let display = document.querySelector('.display').innerText;
console.log(display);
let updatedDisplay = document.querySelector('.display_number');
console.log(updatedDisplay);
const buttons = document.querySelectorAll('button');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const buttonPlusTwo = document.querySelector('.plus_two');
const buttonPlusFive = document.querySelector('.plus_five');
const buttonPlusTen = document.querySelector('.plus_ten');
const buttonMinusTwo = document.querySelector('.minus_two');
const buttonMinusFive = document.querySelector('.minus_five');
const buttonMinusTen = document.querySelector('.minus_ten');

function addOrSubtract(e) {
    if(e.currentTarget === buttonPlus) {
        display++;
        document.getElementById('display').textContent = display;
    } if(e.currentTarget === buttonMinus) {
        display--;
        document.getElementById('display').textContent = display;
    } if(e.currentTarget === buttonPlusTwo) {
        console.log(display);
        display = display += 2;
        console.log(display);
        display = document.getElementById('display_number').innerText; 
    } if(e.currentTarget === buttonPlusFive) {
        display = display +=5;
        document.getElementById('display').textContent = display;
        console.log('plus 5');
    } if(e.currentTarget === buttonPlusTen) {
        console.log('plus 10');
    } if(e.currentTarget === buttonMinusTwo) {
        console.log('minus 2');
    } if(e.currentTarget === buttonMinusFive) {
        console.log('minus 5');
    } if(e.currentTarget === buttonMinusTen) {
        console.log('minus 10');
    }
}

buttons.forEach(buttons => buttons.addEventListener('click', addOrSubtract));