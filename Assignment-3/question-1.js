// Q1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

// Ans. 
    function calculator() {
        const [op, a, b] = process.argv.slice(2);

        // Check for valid number inputs
        if (isNaN(a) || isNaN(b) || !['*', '+', '-', '/'].includes(op)) {
            console.error("Error: Both operands must be valid numbers and operator must be one of +, -, *, /.");
            return;
        }
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        // Perform the calculation
        switch (op) {
            case '+':
                console.log(`The sum is ${num1 + num2}`);
                break;
            case '-':
                console.log(`The subtraction is ${num1 - num2}`);
                break;
            case '*':
                console.log(`The product is ${num1 * num2}`);
                break;
            case '/':
                if (num2 === 0) {
                    console.error("Error: Division by zero is not allowed.");
                } else {
                    console.log(`The division result is ${num1 / num2}`);
                }
                break;
        }
    }

calculator();
