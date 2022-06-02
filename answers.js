const first = () => {
  const object = {
    message: "Hello, World!",
    getMessage() {
      const message = "Hello, Earth!";
      return this.message;
    },
  };

  console.log(object.getMessage()); // "Hello world!"
};

const second = () => {
  function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const cat = new Pet("Fluffy");
  console.log(cat.getName()); // Fluffy
  const { getName } = cat;
  console.log(getName()); // Fluffy
};

const third = () => {
  const object = {
    message: "Hello, World!",
    logMessage() {
      console.log(this.message); // undefined
    },
  };
  setTimeout(object.logMessage, 1000);
};

const fourth = () => {
  const object = {
    who: "World",
    greet() {
      return `Hello, ${this.who}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.who}!`;
    },
  };

  console.log(object.greet()); // Hello, world!
  console.log(object.farewell()); // Goodbye, undefined!
};

const fifth = () => {
  global.length = 4; // var length = 4 or this.length = 4

  function callback() {
    console.log(this.length); // 4
  }

  const object = {
    length: 5,
    method(callback) {
      callback();
    },
  };

  object.method(callback, 1, 2);
};

const sixth = () => {
  global.length = 4; // var length = 4 or this.length = 4

  function callback() {
    console.log(this.length); // 3
  }

  const object = {
    length: 5,
    method() {
      arguments[0]();
    },
  };
  object.method(callback, 1, 2);
};

const seventh = () => {
  var myObject = {
    foo: "bar",
    func: function () {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo); // bar
      console.log("outer func:  self.foo = " + self.foo); // bar
      (function () {
        console.log("inner func:  this.foo = " + this.foo); // undefined
        console.log("inner func:  self.foo = " + self.foo); // bar
      })();
    },
  };

  myObject.func();
};

const eights = () => {
  var hero = {
    _name: "John Doe",
    getSecretIdentity: function () {
      return this._name;
    },
  };

  var stoleSecretIdentity = hero.getSecretIdentity;

  console.log(stoleSecretIdentity()); // undefined
  console.log(hero.getSecretIdentity()); // John Doe
};
