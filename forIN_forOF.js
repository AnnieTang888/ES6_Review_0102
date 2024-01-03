//The for...in loop is used to iterate over the enumerable properties of an object. It iterates over the property names/indexes rather than the values.

const fruits = ["apple", "banana", "orange"];

for (let index in fruits) {
    console.log(index); // Outputs: 0, 1, 2
}

//The for...of loop, on the other hand, is used to iterate over the values of an iterable object (like arrays, strings, etc.).

const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit); // Outputs: "apple", "banana", "orange"
}