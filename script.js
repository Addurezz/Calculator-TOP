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
let isfirstNumber = true;
let opperand = null;

const operations = document.querySelectorAll(".opperand");

operations.forEach((op) => {
    op.addEventListener("click", () => {
        opperand = op.textContent
        isfirstNumber = false;
        console.log(opperand)
    })
})

const numbers = document.querySelectorAll(".button");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (isfirstNumber && opperand == null) {
            firstNumber += number.textContent;
            console.log(firstNumber)
        }
        else if (!isfirstNumber && opperand != null) {
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
    isfirstNumber = true;
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
