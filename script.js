const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');

function appendValue(val) {
    if (display.value === '0' && val !== '.') {
        display.value = val;
    } else {
        display.value += val;
    }
}

function appendFunction(func) {
    if (display.value === '0') {
        display.value = func;
    } else {
        display.value += func;
    }
}

function clearAll() {
    display.value = '0';
    historyDisplay.textContent = '';
}

function deleteChar() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculate() {
    try {
        let expression = display.value;
        historyDisplay.textContent = expression + ' =';
        
        // Convert symbols to executable JS code
        expression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/\^2/g, '**2')
            .replace(/\^/g, '**')
            .replace(/%/g, '/100');

        let result = eval(expression);
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            // Round to avoid long messy floating decimals
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        display.value = 'Error';
    }
}
