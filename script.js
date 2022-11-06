const allButtons = document.querySelectorAll(".btn"),
textDisplay = document.querySelector(".content span"),
clearButton = document.querySelector(".clear-button"),
calculateButton = document.querySelector(".calculate")

const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", "/", "x", "(", ")", ".", "*"]

let keyCode, value = "";
var isNotaNumber = false

function getKey(e) {

    const isKeyboard = e.type === "keydown"
    keyCode = isKeyboard ? e.key : e.target.dataset.key
    
    if(keyCode == "Enter") return getResult()
    if(keyCode == "Backspace") return clearText()

    if(allowedKeys.includes(keyCode)) {
        if(keyCode == "x") keyCode = "*"

        if(isNotaNumber) {
            textDisplay.textContent = ""
            isNotaNumber = false
        }

        value = textDisplay.textContent += keyCode;
        textDisplay.innerText = value
    }

    return keyCode;  
}

function getResult() {
    textDisplay.innerText = eval(value)
    if(eval(value) == Infinity || isNaN(eval(value))) isNotaNumber = true
}

function clearText(){
    textDisplay.innerText = ""
    value = ""
}

calculateButton.addEventListener("click", getResult)
clearButton.addEventListener("click", clearText)

allButtons.forEach(button => {
    button.addEventListener("click", getKey)
})

window.addEventListener("keydown", e => getKey(e))