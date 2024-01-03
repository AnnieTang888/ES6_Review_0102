// Default parameters allow you to specify default values for function parameters. If a parameter is not provided when the function is called, the default value will be used.

// default parameters in ES6
function greet(greeting1 = "Happy", greeting2 = "NewYear") {
    console.log(`${greeting1}, ${greeting2}!`);
}

// Calling the function without providing parameters
greet(); // Outputs: "Happy, NewYear"

// Calling the function with provided parameters
greet("Hi", "2024"); // Outputs: "Hi, 2024!"
