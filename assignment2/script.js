function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}

displayEvenNumbers();
function calculate(num1, num2, operation) {
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
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }

    return result;
}

// Example usage:
console.log('--- Calculate Function Examples(question 2) ---');
console.log(calculate(10, 5, 'add'));        // Output: 15
console.log(calculate(10, 5, 'subtract'));   // Output: 5
console.log(calculate(10, 5, 'multiply'));   // Output: 50
console.log(calculate(10, 5, 'divide'));     // Output: 2
console.log(calculate(10, 5, 'power'));      // Output: Invalid operation
function findTax(salary) {
    let taxRate;

    switch (true) {
        case salary > 1500000:
            taxRate = 0.3;
            break;
        case salary > 1000000:
            taxRate = 0.2;
            break;
        case salary > 500000:
            taxRate = 0.1;
            break;
        default:
            taxRate = 0;
    }

    return salary * taxRate;
}

// Example usage:
console.log('--- Find Tax Function Examples(question 3) ---');
console.log(findTax(400000));   // Output: 0 (0% tax)
console.log(findTax(600000));   // Output: 60000 (10% tax)
console.log(findTax(1200000));  // Output: 240000 (20% tax)
console.log(findTax(2000000));  // Output: 600000 (30% tax)
function sumOfProducts(n1, n2) {
    let sum = 0;
    let digits1 = n1.toString().split('');
    let digits2 = n2.toString().split('');

    for (let i = 0; i < Math.max(digits1.length, digits2.length); i++) {
        let digit1 = parseInt(digits1[i]) || 0;
        let digit2 = parseInt(digits2[i]) || 0;
        sum += digit1 * digit2;
    }

    return sum;
}

// Example usage:
console.log('--- Sum of Products Function Examples (question 4) ---');
console.log(sumOfProducts(6, 34));   // Output: 24 (6*4 + 0*3)
console.log(sumOfProducts(123, 456));   // Output: 38 (1*4 + 2*5 + 3*6)
