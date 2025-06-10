// Q2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

// Ans.
    
class Shape{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        console.log("This is area");
    }
}

class Rectangle extends Shape{
    getArea(){
        return this.width*this.height;
    }
}

class Triangle extends Shape{
    getArea(){
        return 1/2 * this.width*this.height;
    }
}

const myRectangle = new Rectangle(2,3)
console.log(myRectangle.getArea());

const myTriangle = new Triangle(2,3)
console.log(myTriangle.getArea());


