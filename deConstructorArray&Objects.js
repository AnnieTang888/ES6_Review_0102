// In JavaScript, destructuring assignment allows you to extract values from arrays or properties from objects and assign them to variables in a more concise way.
// array destructuring
const numbers = [1, 2, 3, 4, 5];

// Extracting values from the array
const [first, second, ...rest] = numbers;

console.log(first); // Outputs: 1
console.log(second); // Outputs: 2
console.log(rest); // Outputs: [3, 4, 5]

// object destructuring
const Student = {
    Name: "Annie",
    ID: "888",
    age: 30,
    address: {
        city: "San Jose",
        country: "USA",
    },
};

// Extracting properties from the object
const { Name, ID, age, address: { city, country } } = person;

console.log(Name); // Outputs: "Annie"
console.log(ID); // Outputs: "888"
console.log(age); // Outputs: 30
console.log(city); // Outputs: "San Jose"
console.log(country); // Outputs: "USA"