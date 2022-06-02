const globalArrowFunction = (object, methodType) =>
  console.log(`\tglobal arrow function in ${methodType} method`, this === object);

console.log("\nIs invocation refers to object that invokes method?");

console.log("\nObject literal");

const objectLiteral = {
  name: "value",
  method() {
    console.log("\tfunction method ", this === objectLiteral);

    const innerArrowFunction = () =>
      console.log("\tinner arrow function in function method", this === objectLiteral);

    innerArrowFunction();
    globalArrowFunction(objectLiteral, "function");
  },
  arrowMethod: () => {
    console.log("\tarrow method ", this === objectLiteral);
  },
  detachedMethod() {
    console.log("\tdetached function method ", this === objectLiteral);
  },
  detachedArrowMethod: () => {
    console.log("\tdetached arrow method ", this === objectLiteral);
  },
};

const { detachedMethod: detachedMethodLiteral, detachedArrowMethod: detachedArrowMethodLiteral } =
  objectLiteral;

objectLiteral.method();
objectLiteral.arrowMethod();
detachedMethodLiteral();
detachedArrowMethodLiteral();

console.log("\nObject constructor and prototype");

function ObjectConstructor() {
  this.property = "value";

  this.constructorArrowMethod = () =>
    console.log("\tarrow constructor method ", this === objectConstructor);

  this.constructorMethod = function () {
    console.log("\tconstructor method ", this === objectConstructor);

    const innerArrowFunction = () =>
      console.log("\tinner arrow function in constructor method", this === objectConstructor);

    innerArrowFunction();
    globalArrowFunction(objectConstructor, "constructor");
  };

  this.constructorDetachedMethod = function () {
    console.log("\tdetached constructor function method ", this === objectConstructor);
  };

  this.constructorDetachedArrowMethod = () => {
    console.log("\tdetached constructor arrow method ", this === objectConstructor);
  };
}

ObjectConstructor.prototype.method = function () {
  console.log("\tfunction method ", this === objectConstructor);

  const innerArrowFunction = () =>
    console.log("\tinner arrow function in function method", this === objectConstructor);

  innerArrowFunction();
  globalArrowFunction(objectConstructor, "function");
};

ObjectConstructor.prototype.arrowMethod = () => {
  console.log("\tarrow method ", this === objectConstructor);
};

ObjectConstructor.prototype.detachedMethod = function () {
  console.log("\tdetached function method ", this === objectConstructor);
};

ObjectConstructor.prototype.detachedArrowMethod = () => {
  console.log("\tdetached arrow method ", this === objectConstructor);
};

const objectConstructor = new ObjectConstructor();

const {
  detachedMethod,
  detachedArrowMethod,
  constructorDetachedMethod,
  constructorDetachedArrowMethod,
} = objectConstructor;

objectConstructor.constructorMethod();
objectConstructor.constructorArrowMethod();
constructorDetachedMethod();
constructorDetachedArrowMethod();
objectConstructor.method();
objectConstructor.arrowMethod();
detachedMethod();
detachedArrowMethod();

console.log("\nClass");

class ObjectClass {
  constructor() {
    this.property = "value";
    this.constructorArrowMethod = () =>
      console.log("\tarrow constructor method ", this === objectClass);
    this.constructorMethod = function () {
      console.log("\tconstructor method ", this === objectClass);

      const innerArrowFunction = () =>
        console.log("\tinner arrow function in constructor method", this === objectClass);

      innerArrowFunction();
      globalArrowFunction(objectClass, "constructor");
    };

    this.constructorDetachedMethod = function () {
      console.log("\tdetached constructor function method ", this === objectClass);
    };

    this.constructorDetachedArrowMethod = () => {
      console.log("\tdetached constructor arrow method ", this === objectClass);
    };
  }

  method() {
    console.log("\tfunction method ", this === objectClass);

    const innerArrowFunction = () =>
      console.log("\tinner arrow function in function method", this === objectClass);

    innerArrowFunction();
    globalArrowFunction(objectClass, "function");
  }

  arrowMethod = () => {
    console.log("\tarrow method ", this === objectClass);
  };

  detachedMethod() {
    console.log("\tdetached function method ", this === objectClass);
  }

  detachedArrowMethod = () => {
    console.log("\tdetached arrow method ", this === objectClass);
  };
}

const objectClass = new ObjectClass();

const {
  detachedMethod: detachedMethodClass,
  detachedArrowMethod: detachedArrowMethodClass,
  constructorDetachedMethod: constructorDetachedMethodClass,
  constructorDetachedArrowMethod: constructorDetachedArrowMethodClass,
} = objectClass;

objectClass.constructorMethod();
objectClass.constructorArrowMethod();
constructorDetachedMethodClass();
constructorDetachedArrowMethodClass();
objectClass.method();
objectClass.arrowMethod();
detachedMethodClass();
detachedArrowMethodClass();
