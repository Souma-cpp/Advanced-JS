function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`greetings from ${this.name}`);
};

const person1 = new Person("hitesh");
person1.greet();
