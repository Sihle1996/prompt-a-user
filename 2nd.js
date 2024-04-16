const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Enter first number: ')); 
let num2 = parseInt(prompt('Enter second number: '));
let oparator = prompt('Enter the oparator +,-,*, or /: ');

let output = 0;

switch (oparator){
    case '+':
        output = num1 + num2;
        console.log(`${num1} + ${num2} = ${output}`)
        break
    case '-':
        output = num1 - num2;
        console.log(`${num1} - ${num2} = ${output}`)
        break
    case '*':
        output = num1 * num2;
        console.log(`${num1} * ${num2} = ${output}`)
        break
    case '/':
        output = num1 / num2;
        console.log(`${num1} / ${num2} = ${output}`)
        break
    default:
        console.log('follow the instructions');
}

// const oparator = +;

// console.log(typeof oparator)


