// Q 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    return `Hi team, we have a new member in the team. His name is ${this.name}, he is ${this.age} years old, and his interests are ${this.interests.join(', ')}.`;
  }

  farewell() {
    return `Dear ${this.name}, we thank you for your dedication to our institution.`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.subjectsTaught = subjectsTaught;
  }

  farewell() {
    const farewellString = super.farewell();
    return `${farewellString} You have great knowledge of the subjects you teach, including ${this.subjectsTaught.join(', ')}.`;
  }
}

const teacher1 = new Teacher("Raj", 25, "male", ['chess', 'online games', 'coding'], ['Physics', 'English', 'Mathematics']);
console.log(teacher1.farewell());
