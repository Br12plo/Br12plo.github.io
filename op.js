let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value); // używa operatorów JS do obliczeń
    } catch (error) {
        display.value = 'Błąd';
    }
}
