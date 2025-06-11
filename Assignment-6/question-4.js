// Q4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

// Ans .
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName(){
    return `Fullname is ${this.firstName} ${this.lastName}`;
  }
  // Method 1 using forEach 
  static averageAge1(personArray){
    let sum=0;
    personArray.forEach(person => {
        sum+=person.age;
    });
    return sum/personArray.length;
  }

  // Method 2 using reduce
  static averageAge2(personArray){
    return personArray.reduce((sum,person)=>sum+person?.age,0)/personArray.length;
  }
}

// const person1 = new Person("Raj","Singh",12);
// const person2 = new Person("Viru","Dev",13);
// const person3 = new Person("Abhi","Singh",14);

// const personArray = [person1,person2,person3]

const personArray = [{firstName:"Raj",lastName:"Singh",age:12},{firstName:"Viru",lastName:"Dev",age:13},{firstName:"Abhi",lastName:"Singh",age:14}];

console.log("Average age using method 1",Person.averageAge1(personArray));
console.log("Average age using method 1",Person.averageAge2(personArray));

