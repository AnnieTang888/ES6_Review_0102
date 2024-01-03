// shorthand syntax is often used to make code more concise and readable,especially when dealing with objects and functions.

//object property shorthand in ES6
const firstName = "John";
const lastName = "Doe";

// Shorthand when creating an object with variables as property names
const person = { firstName, lastName };

console.log(person); // Outputs: { firstName: "John", lastName: "Doe" }

// object method shorthand in ES6
const calculator = {
    add(x, y) {
        return x + y;
    },
    subtract(x, y) {
        return x - y;
    }
};

console.log(calculator.add(1, 2)); // Outputs: 3
console.log(calculator.subtract(4, 2)); // Outputs: 2