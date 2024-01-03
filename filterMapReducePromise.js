// FILTER
// The filter method is used to create a new array with elements that pass a certain condition.
const numbers = [1, 2, 3, 4, 5, 6];

// Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Outputs: [2, 4, 6]


//MAP
//The map method is used to create a new array by applying a function to each element of the existing array.

const numbers = [1, 2, 3, 4, 5];

// Doubling each number
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]

//REDUCE
//The reduce method is used to accumulate values of an array into a single result.

const numbers = [1, 2, 3, 4, 5];

// Summing all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Outputs: 15


//PROMISE
//The Promise object is used for asynchronous operations and represents a value that may be available now, or in the future, or never.
// Example using Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            // Resolving the Promise with the data
            resolve(data);
            // Rejecting the Promise (if there's an error)
            // reject("Error fetching data");
        }, 2000);
    });
};

// Consuming the Promise
fetchData() //fetchData returns a Promise that resolves with data after a simulated asynchronous operation. 
    .then(data => { //then method is used to handle the successful resolution
        console.log(data.message);
    })
    .catch(error => { //catch method is used to handle any errors that might occur during the asynchronous operation.
        console.error(error);
    });
