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

// get first number

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

//display pressed buttons on screen

const output = document.querySelector("input");

const displayItems = (item) => {
    output.value += item.textContent;
}

const button = document.querySelectorAll(".button");

button.forEach((element) => {
    const userInput = element;
    element.addEventListener("click", () => displayItems(element))
})


//clear the screen 

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => output.value = "")
