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
let isFirstNumber = true; //to check if inputs are added to first or second number
let operand = null;

const operations = document.querySelectorAll(".opperand");

operations.forEach((op) => {
    op.addEventListener("click", () => {
        operand = op.textContent
        decimalBtn.disabled = false;
        isFirstNumber = false;
    })
})

const numbers = document.querySelectorAll(".button");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (isFirstNumber && operand == null) {
            firstNumber += number.textContent;
        }
        else if (!isFirstNumber && operand != null) {
            secondNumber += number.textContent;
        }
    } 
)});

const plusOrMinusBtn = document.querySelector("#plusOrMinus");

plusOrMinusBtn.addEventListener("click", () => { //changes algebraic sign of the number
    if (isFirstNumber && operand == null) {
        firstNumber = "-"+firstNumber;
        output.value = firstNumber;
    }
    else if (!isFirstNumber) {
        secondNumber = "-"+secondNumber;
        output.value = firstNumber + operand + "("+secondNumber+")"
    }
})


// get the result

const result = document.querySelector("#equals");

result.addEventListener("click", () => {
    

    if (secondNumber == "" || operand && secondNumber=="") {
        output.value = num1;
        operand = null;
        isFirstNumber = true;
        firstNumber = `${output.value}`;
        secondNumber = "";
    }

    const num1 = parseFloat(firstNumber); // convert user input (string) to integer
    const num2 = parseFloat(secondNumber); // ...
    output.value = operate(num1, num2, operand); // display result to display
    operand = null;
    isFirstNumber = true;
    firstNumber = `${output.value}`;
    secondNumber = ""; 
})


//display pressed buttons on screen

const output = document.querySelector("input");


const displayItems = (item) => {
    output.value += item.textContent;
}


numbers.forEach((element) => {
    element.addEventListener("click", () => displayItems(element)) //display numbers
})

operations.forEach((op) => {
    op.addEventListener("click", () => displayItems(op)); //display operators
})


//clear the screen 

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    decimalBtn.disabled = false;
    isFirstNumber = true;
    firstNumber = "";
    secondNumber = "";
    operand = null;
    output.value = "";
    })


//clear last

const clearLastBtn = document.querySelector("#clearLast");


const clearLast = () => {
    const lastD = output.value.substring(output.value.length-1, output.value.length);

    if (lastD == "+" || lastD == "-" || lastD == "*" || lastD == "/"){
        output.value = output.value.slice(0,-1)
        operand = null;
    }
    else if (lastD =="." && operand) {
        decimalBtn.disabled = false;
        output.value = output.value.slice(0,-1)
        firstNumber = firstNumber.slice(0,-1);
    }
    else if (lastD =="." && !operand) {
        output.value = output.value.slice(0,-1)
        decimalBtn.disabled = false;
        secondNumber = secondNumber.slice(0,-1);
    }
    else if (!operand) {
        output.value = output.value.slice(0,-1)
        firstNumber = firstNumber.slice(0,-1);
    }

    else if (operand) {
        output.value = output.value.slice(0,-1)
        secondNumber = secondNumber.slice(0,-1);
    }
}

clearLastBtn.addEventListener("click", clearLast)


// throw error if more than one decimal point
// disable decimal point if it is clicked once already

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

