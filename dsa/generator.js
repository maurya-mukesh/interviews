function* generate() {
  yield 20;
  yield function () {
    return "hello world";
  };
}

let result = generate();
console.log(result.next().value);
console.log(result.next().value());

console.log(result.next());
