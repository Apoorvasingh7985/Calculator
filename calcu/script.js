const resultElement=document.getElementById('result');
const clearBtn=document.getElementById('clear-button');
const deleteBtn=document.getElementById('delete-button');
const divideBtn=document.getElementById('divide-button');
const multiplyBtn=document.getElementById('');
const subtractBtn=document.getElementById('subtract-button');
const addBtn=document.getElementById('add-button');
const decimalBtn=document.getElementById('decimal-button');
const equalBtn=document.getElementById('equal-button');
const numberbtns=document.querySelectorAll('.number');

let result='';
let operation='';
let previousOperand=0;

const appendNumber=(numer)=> {
   if(numer === '.' && result.includes('.')) return;
   
    result += number;
    updateDisplay();

}
const updateDisplay=() =>{
    if(operation){
        resultElement.innerText= `${previousOperand}  ${operation} ${result}` ; 
      }
      else
      {

          resultElement.innerText=result;
      }

}
const selectoperator=(operatorvalue)=>{
    if(result === '') return;
    if(operation!=='' && previousOperand!==''){
        calculateResult();
    }
    
    operation=operatorValue;
    previousOperand=result;
    result='';
    updateDisplay();
}

const calculateResult=()=>{
let evalutedResult;
cons prev=parseFloat(previousOperand);
const current=parseFloat(result);
 
if(isNaN(pre) || isNaN(current)) return;
switch (operation) {
    case '+':
        evalutedResult=prev + current;
        
        break;
        case '-':
        evalutedResult=prev - current;
        
        break;
        case '*':
        evalutedResult=prev * current;
        
        break;
        case '/':
        evalutedResult=prev / current; 
        
        break;
        

    default:
        return;
}
result=evalutedResult.toString();
operation='';
previousOperand='';
}

numberBtns.forEach(button => {
    button.addEventListener('click',()=>{
        appendNumber(button.innerText);
    });
    
});

const clearDisplay=()=>{
    result='';
    previousOperand='';
    operation='';
    updateDisplay();
}

const deletelastDigit=()=>{
    if(result==='')return
    result=result.slice(0, -1);
    updateDisplay();
}

decimalBtn.addEventListener('click',appendNumber('.'));
 addBtn.addEventListener('click',()=>appendNumber('+'));
 subtractBtn.addEventListener('click',()=>appendNumber('-'));
 mutiplyBtn.addEventListener('click',()=>appendNumber('*'));
 divideBtn.addEventListener('click',()=>appendNumber('/'));
 equalBtn.addEventListener('click',()=>{
    if(result==='') return;
    calculateResult();
    updateDisplay();

 });

 clearBtn.addEventListener('click',clearDisplay);
 deleteBtn.addEventListener('click',deleteLastDigit);




