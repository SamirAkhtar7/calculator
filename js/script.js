function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (e) {
        display.value = "Error"
    }
}