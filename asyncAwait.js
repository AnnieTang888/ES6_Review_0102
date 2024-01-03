//// Asynchronous function returning a Promise
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Async function using async/await
async function asyncOperation() {
    console.log("Start of async operation");

    // Pause for 2 seconds using the delay function
    await delay(2000);

    console.log("After 2 seconds");

    // Pause for 1 second
    await delay(1000);

    console.log("After another second");

    return "Async operation completed";
}

// Using the async function
asyncOperation()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

    //OUTPUT
    //Start of async operation
    //After 2 seconds
    //After another second
    //Async operation completed