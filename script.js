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

//get variables a and b 

const getVariableA = () => {

}







