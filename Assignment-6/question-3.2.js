// Q 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

// Ans.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hi team, we have a new member in the team. His name ${this.name}, his age is ${this.age} and his interests are ${this.interests.join(', ')} .`;
  }

  farewell() {
    return `Thank you for your hard work and dedication, ${this.name}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }
  greeting() {
    super.greeting()
    return `The student ${this.name} is doing very well in ${this.studies}. He is good in communication and very dedicated.`;
  }
}

const student1 = new Student("John", 25, "male", ['chess','online games', 'coding'], "English");
console.log(student1.greeting());
