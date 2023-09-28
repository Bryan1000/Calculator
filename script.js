let display = document.getElementById('output')

let equation = "0"
updateDisplay()

function updateDisplay() {
    display.innerHTML = equation
}

function output(num) {
    if (equation == "0") equation = ""
    if (num == 'clear') {
        clear()
        return;
    }
    equation += num;
    updateDisplay()
} 

function clear() {
    equation = "0"
    console.log("clear")
    updateDisplay()
}

function operations(){
    const result = eval(equation);
    equation = result.toString();
    if(result == Infinity){
        equation = "Error"
    }
    updateDisplay();
}