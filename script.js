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

//display pressed buttons on screen

const output = document.querySelector("input");

const displayItems = (item) => {
    output.value += item.textContent;
}

// 

const button = document.querySelectorAll(".button");

button.forEach((element) => {
    const userInput = element;
    element.addEventListener("click", () => displayItems(element))
})