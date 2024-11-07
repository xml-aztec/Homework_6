function calculate() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const operation = document.getElementById('operation').value;
    const resultDisplay = document.getElementById('result');
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';
    resultDisplay.textContent = '';

    if (number1 === '' || number2 === '') {
        errorMessage.textContent = 'Пожалуйста, введите оба числа.';
        return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorMessage.textContent = 'На ноль делить нельзя.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorMessage.textContent = 'Выберите корректную операцию.';
            return;
    }
    resultDisplay.textContent = `Результат: ${result}`;
}