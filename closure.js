function outer_function() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let answer = outer_function();
console.log(answer());
console.log(answer());
console.log(answer());
console.log(answer());
console.log(answer());
