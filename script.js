//calculator functions

const addition = (a,b) => {
    return a + b;
}

const subtraction = (a,b) => {
    return a - b;
}

const multiplication = (a,b) => {
    return a * b;
}

const division = (a,b) => {
    if (b===0) {
        return "ERROR"
    }
    return a/b;
}   

const operate = (a, b, opperand) => {
    switch (opperand) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiplication(a,b);
        case "/":
            return division(a,b);
    }
}

// get numbers and operand

let firstNumber = "";
let secondNumber = "";
let isFirstNumber = true;
let opperand = null;

const operations = document.querySelectorAll(".opperand");

operations.forEach((op) => {
    op.addEventListener("click", () => {
        opperand = op.textContent
        decimalBtn.disabled = false;
        isFirstNumber = false;
        console.log(opperand)
    })
})

const numbers = document.querySelectorAll(".button");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (isFirstNumber && opperand == null) {
            firstNumber += number.textContent;
            console.log(firstNumber)
        }
        else if (!isFirstNumber && opperand != null) {
            secondNumber += number.textContent;
            console.log(secondNumber)
        }
    } 
)});

// result

const result = document.querySelector("#equals");
let num1;
let num2;

result.addEventListener("click", () => {
    num1 = parseFloat(firstNumber);
    num2 = parseFloat(secondNumber);
    const result = operate(num1, num2, opperand);
    
    output.value = result;
    opperand = null;
    isFirstNumber = true;
    firstNumber = `${result}`;
    secondNumber = "";
    num1 = result;
    num2 = 0;
    console.log(result,opperand, num1, num2);
})

//display pressed buttons on screen

const output = document.querySelector("input");

const displayItems = (item) => {
    output.value += item.textContent;
}

const button = document.querySelectorAll(".button");

button.forEach((element) => {
    element.addEventListener("click", () => displayItems(element))
})

operations.forEach((op) => {
    op.addEventListener("click", () => displayItems(op));
})

//clear the screen 

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    opperand = null;
    output.value = ""
    })

//clear last

const clearLastBtn = document.querySelector("#clearLast");

const str = output.value;

const clearLast = () => {
    const lastD = str.substring(str.length-1, str.length);

    if (lastD == "+" || lastD == "-" || lastD == "*" || lastD == "/"){
        output.value = output.value.slice(0,-1)
        opperand = null;
        console.log(firstNumber, opperand, secondNumber)
    }
    else if (!opperand) {
        output.value = output.value.slice(0,-1)
        firstNumber = firstNumber.slice(0,-1);
        console.log(firstNumber, opperand, secondNumber)
    }

    else if (opperand) {
        output.value = output.value.slice(0,-1)
        secondNumber = secondNumber.slice(0,-1);
        console.log(firstNumber, opperand, secondNumber)
    }
}

clearLastBtn.addEventListener("click", clearLast)

// throw error if more than one decimal point

const decimalBtn = document.querySelector("#dot");

const decimalPoint = () => {
    if (isFirstNumber && firstNumber.includes(".")) {
        decimalBtn.disabled = true;
    }

    else if (!isFirstNumber && secondNumber.includes(".")) {
        decimalBtn.disabled = true;
    }
}

decimalBtn.addEventListener("click", decimalPoint);