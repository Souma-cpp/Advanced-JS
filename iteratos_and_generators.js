function* generateNumber() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let gen = generateNumber();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

