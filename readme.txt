There are two invocations: function invocation and method invocation
On function invocation this is always global object (exception: arrow function!)
On method invocation this refers to object that invoke this method (exception: arrow function!)
Exception here is arrow function!
Arrow function doesn't have own this and it takes this from outer(parent) scope

In constructor function this always refers to object

Detached method is method that detached from object by destructuring or passing method as a callback to any function. 
Detached method becomes regular function so it's function invocation(be careful with arrow functions) 

How to solve this tasks (not detached method)

1. If our function is arrow function => detect this of parent scope
2. Check how it invokes(method invocation or function invocation)
2.1 if it's function invocation this is global object
2.2 if it's method invocation this is object that it invokes

How to solve this tasks (detached methods)

1. if its