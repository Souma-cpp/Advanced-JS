const person = {
  name: "username",
  greet: function greet() {
    return this.name;
  },
};

console.log(person.greet());

const greetname = person.greet;
console.log(greetname());

const correct_message = person.greet.bind({ name: "newusername" });
console.log(correct_message());
