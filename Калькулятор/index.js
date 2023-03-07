console.log("Conected!");
let runningTotal = 0 ;
let buffer = "0" ;
let previousOperator;

const screen = document.querySelector(".screen");

function buttonClick(value){
      if (isNaN(value))
    {
        handleSymbol(value);
    }
    else
    {   
        handleNumber(value);     
    }
        screen.innerText = buffer;
}

   // Функция "buttonClick" даёт возможность передавать данныйе от кнопок на screen // ("::")

function handleSymbol(symbol)
{
    switch(symbol)
    {
        case "C":
            buffer = "0";
            runningTotal = 0 ;
            break;
            case "=":
                if (previousOperator === null )
                {
                return
                }
                flushOperation(parseInt(buffer));
                previousOperator = null ; 
                buffer = runningTotal;
                runningTotal = 0 ;
                break;
                case "←":
                    if (buffer.length === 1 )
                    {
                        buffer = "0";
                    }
                    else
                    {
                        buffer = buffer.substring (0 , buffer.length - 1 );                       
                    }
                    break; 
                    case  "+":
                        case "−":
                            case "×":
                                case "÷":
                                    handleMath(symbol);
                                    break;

    }

}

// На знаки назначеный действия function handleSymbol(symbol) // ("::")

function handleMath(symbol)
{
    if (buffer === "0")
    {   
        return;
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0 )
    {
        runningTotal = intBuffer;
    }
    else
    {
        flushOperation(intBuffer);
    }
        previousOperator = symbol;
        buffer = "0";
}

// Добавляет операторов в виде умножения деления и тд. function handleMaht(symbol) ("::")

function flushOperation (intBuffer)
{
    if (previousOperator === "+")
    {
        runningTotal += intBuffer;
    }
    else if(previousOperator === "−")
    {
        runningTotal -= intBuffer;
    }
    else if (previousOperator === "×")
    {
        runningTotal *= intBuffer;
    }
    else if (previousOperator === "÷")
    {
        runningTotal /= intBuffer;
    }

// База операторов которыми пользуется function handleMaht(symbol) ("::")

}

function handleNumber(numberString)
{
    if(buffer === "0")
    {
        buffer = numberString;
    }
    else
    {
        buffer += numberString;
    }
}

function init ()
{
    document.querySelector(".calc-buttons").
    addEventListener("click", function(event){buttonClick(event.target.innerText);
    })
    
}
init();

// function init(_value) {
//     // check if the element exists
//     const element = document.querySelector('.calc-buttons');
//     console.log('elment:', element);
  
//     // add event listener to the element
//     element.addEventListener('click', handleClick);
//   }
  
//   function handleClick() {
//     // check the value of a variable
//     const myVar = 'Hello world';
//     console.log('myVar:', myVar);
    
//     // rest of the code
//   }



// ЗАВЕРШИТЬ КАЛЬКУЛЯТОР (06.03.2023) НЕМЕДЛЕННО !!!
