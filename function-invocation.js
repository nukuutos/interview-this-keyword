console.log("\nIs function invocation refers to global object?");

function outerFunction() {
  console.log("\tOuter function", this === global);

  function innerRegularFunction() {
    console.log("\tInner regular function", this === global);
  }

  function innerArrowFunction() {
    console.log("\tInner arrow function", this === global);
  }

  innerRegularFunction();
  innerArrowFunction();
}

console.log("\nFunction invocation within global scope:");
outerFunction();

console.log("\nFunction invocation within object(property):");
const object = {
  property: outerFunction(),
  method() {
    outerFunction();
  },
};

console.log("\nFunction invocation within object(method):");
object.method();

function ObjectConstructor() {
  this.name = "object name";
  this.fruit = outerFunction();
}

console.log("\nFunction invocation within object constructor:");
new ObjectConstructor();
