// Q 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hi team, we have a new member in the team. His name ${this.name}, his age is ${this.age} and his interests are ${this.interests} .`;
  }

  farewell() {
    return `Thank you for your dedication, ${this.name}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.subjectsTaught = subjectsTaught;
  }
  farewell() {
    super.farewell()
    return `Thank you for your dedication in teaching the subject ${this.subjectsTaught.join(', ')}.`;
  }
}

const teacher1 = new Teacher("Raj", 25, "male", ['chess','online games', 'coding'], ['Physics','English','Mathematics']);
console.log(teacher1.farewell());
