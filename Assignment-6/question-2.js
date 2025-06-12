// Q2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

// Ans.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    throw new Error( "Please create object with respect to shape and then get area.");
    
  }
}

class Rectangle extends Shape {
  constructor(width,height){
    super(width,height)
  }
  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(width,height){
    super(width,height)
  }
  getArea() {
    return 0.5 * this.width * this.height;
  }
}

const myRectangle = new Rectangle(2, 3);
console.log("The area of Rectangle is",myRectangle.getArea());

const myTriangle = new Triangle(1, 3);
console.log("The area of Triangle is",myTriangle.getArea());

const myShape = new Shape(1,2);
console.log(myShape.getArea());

