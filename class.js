// ES6 Class
class Rectangle {
    // Constructor method
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area
    calculateArea() {
        return this.width * this.height;
    }
}

// Creating an instance of the class
const myRectangle = new Rectangle(10, 20);

// Calling a method on the instance
const area = myRectangle.calculateArea();
console.log(`The area of the rectangle is: ${area}`);
