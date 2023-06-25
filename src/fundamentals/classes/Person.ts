//Write a class called Person that has private properties name and age, and public methods getName() and getAge() that return the corresponding private properties.
class Person {
  constructor(private name: string, private age: number) {}

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

export default Person;
