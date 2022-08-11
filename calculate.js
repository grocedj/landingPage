window.onload = function() {
  //calculate();
  document.getElementsByClassName('calculatorDisplay').value = '';
}

const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculatorKeys');
const display = calculator.querySelector('.calculatorDisplay');
let a = 0;
let b = 0;

keys.addEventListener('click', (e) => {
  if(!e.target.closest('button')) return;
  
  const key = e.target
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset
  const { previousKeyType } = calculator.dataset

  //is this a number key?
  if(type === 'number') {
    if(displayValue === '0' || previousKeyType === 'operator') {
      display.textContent =  keyValue; 
      console.log('wtt');    
    }else if(previousKeyType === 'operator') {
      calculator.dataset.previousKeyType = type;
      display.textContent = keyValue;
      return b = displayValue;
    }else if(calculator.dataset.operator !== '') {
      display.textContent = displayValue + keyValue;
    }
    else{
      display.textContent = displayValue + keyValue;
      console.log('wtx');
    } 
  }

  calculator.dataset.previousKeyType = type;

  //decimal key
  if(key.dataset.type === 'decimal') {
    if(displayValue.includes('.')) {
      display.textContent = displayValue;
    }else {
        display.textContent = displayValue + '.';
        console.log(key);
        console.log('fuck');
    }   
  }
  //is this an operator key?
  if(key.dataset.type === 'operator') {
    let previousValue = displayValue;
    calculator.dataset.firstNumber = previousValue;
    calculator.dataset.previousKeyType = 'operator';
    calculator.dataset.operator = (keyValue);
    return a = parseInt(previousValue);
  }
  
  if(key.dataset.type === 'equals') {
    //calculate
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;
    display.textContent = Calculate(firstNumber, operator, secondNumber);
  }
  
  if(key.dataset.type === 'clear') {
      console.log(e.tartet);
      display.textContent = 0;
      delete calculator.dataset.operator;
      delete calculator.dataset.previousKeyType;
  }
})

function Calculate (firstNumber, operator, secondNumber){
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if(operator === '+') return firstNumber + secondNumber;
  if(operator === '-') return firstNumber - secondNumber;
  if(operator === '*') return firstNumber * secondNumber;
  if(operator === '/') return firstNumber / secondNumber;
}

const power = function(a , b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
  if (x === 0) return 1;
  let result = 1;
  for(let i = x; i > 0; i--) {
    result *= i;
  }
  return result;
};


