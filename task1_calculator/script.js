document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.textContent === '=') {
                calculate();
            } else if (button.textContent === 'AC') {
                clearAll();
            } else if (button.textContent === 'CE') {
                clearEntry();
            } else {
                display.value += button.textContent;
            }
        });
    });

    // Event listener for keyboard input
    document.addEventListener('keydown', function (event) {
        const key = event.key;

        // Check if the pressed key is a number or a mathematical operator
        if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(key)) {
            display.value += key;
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            clearEntry();
        }
    });

    function calculate() {
        try {
            // Replace the percentage sign (%) with '/100*' for proper evaluation
            let expression = display.value.replace(/%/g, '/100*');
            display.value = eval(expression);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function clearAll() {
        display.value = '';
    }

    function clearEntry() {
        display.value = display.value.slice(0, -1);
    }
});
