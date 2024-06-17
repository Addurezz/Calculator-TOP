let firstNumber = null;
let secondNumber = null;
let opperand = null;

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

const operate = (firstNumber, secondNumber, opperand) => {
    switch (opperand) {
        case "+":
            return addition(firstNumber, secondNumber);
        case "-":
            return subtraction(firstNumber, secondNumber);
        case "*":
            return multiplication(firstNumber,secondNumber);
        case "/":
            return division(firstNumber,secondNumber);
    }
}



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







