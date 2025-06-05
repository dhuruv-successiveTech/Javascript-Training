// Q1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

// Ans. 
    function calculator() {
        const [op, a, b] = process.argv.slice(2);

        // Check for valid number inputs
        if (isNaN(a) || isNaN(b) || !['*', '+', '-', '/'].includes(op)) {
            console.error("Error: Both operands must be valid numbers and operator must be one of +, -, *, /.");
            return;
        }
        const floatNum1 = parseFloat(a);
        const floatNum2 = parseFloat(b);

        // Perform the calculation
        switch (op) {
            case '+':
                console.log(`The sum is ${floatNum1 + floatNum2}`);
                break;
            case '-':
                console.log(`The subtraction is ${floatNum1 - floatNum2}`);
                break;
            case '*':
                console.log(`The product is ${floatNum1 * floatNum2}`);
                break;
            case '/':
                if (floatNum2 === 0) {
                    console.error("Error: Division by zero is not allowed.");
                } else {
                    console.log(`The division result is ${floatNum1 / floatNum2}`);
                }
                break;
            default : return;
        }
    }

calculator();
