class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    calculate(operation) {
        switch (operation.toLowerCase()) {
            case 'add': {
                console.log(this.a + this.b);
                return;
            }
            case 'subtract': {
                console.log(this.a - this.b);
                return;
            }
            case 'multiply': {  
                console.log(this.a * this.b);
                return;
            }
            case 'divide': {
                if (this.b === 0) {
                    console.log('Cannot divide by zero');
                    return;
                }
                console.log(this.a / this.b);
                return;
            }
            default: {
                console.log('Please enter a valid operation --- eg :- add, subtract, multiply, divide');
            }
        }
    }
}

const myCalculator = new Calculator(0, 20); 
myCalculator.calculate('add');
myCalculator.calculate('subtract');
myCalculator.calculate('divide');
myCalculator.calculate('multiply');
