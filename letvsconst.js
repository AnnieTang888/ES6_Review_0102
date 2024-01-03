//Variables declared with let are mutable, meaning you can reassign values to them.
//let has block scope, which means it is limited to the block, statement, or expression in which it is used.

let i = 1;

if (true) {
    let i = 2;
    console.log("Inner scope:", i); // Inner scope : 2
}

console.log("Outer Scope:", count); // Outer : 1 //changed


//Variables declared with const are constants and cannot be reassigned after initialization.
//Like let, const also has block scope.

const i = 1;

if (true) {
    const i = 2; // Different variable with the same name, but local to this block
    console.log("Inner scope i:", i); // Inner pi: 2
}

console.log("Outer scope i:", i); // Outer pi: 2
