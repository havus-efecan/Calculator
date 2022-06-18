
let currentNumber = ''
let previousNumber = ''
let operator = ''

const display = document.querySelector('h1')
const container = document.querySelector('.container')
const buttons = document.querySelectorAll('.button')


function appendNumber(buttonCharacter){


    display.textContent += buttonCharacter;


}





function clearDisplay(){

    display.textContent = ''


}

function calculate(operation,num1,num2){

    let result

    switch(operation){
        case '+':
        result = +num1 + +num2;
        break;
        case '-':
        result = +num1- +num2;
        break;
        case 'x':
        result = +num1* +num2;
        break;
        case '/':
        result = +num1/ +num2;
        break;


    }

    return result

}



buttons.forEach(button => {


    button.addEventListener('click',() =>{

        if(button.classList.contains('clr')){
            clearDisplay()
            currentNumber = ''
            previousNumber = ''


        } else if (button.classList.contains('operation')){
            appendNumber(button.textContent)
            previousNumber = currentNumber
            currentNumber = ''
            operator = button.textContent;


        } else if (button.classList.contains('equal')){
            display.innerText = calculate(operator,currentNumber,previousNumber)


        } else {
            currentNumber += button.textContent
            appendNumber(button.textContent)
            


        }


    })

})


