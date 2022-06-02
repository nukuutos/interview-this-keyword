const first = () => {
  const object = {
    message: "Hello, World!",
    getMessage() {
      const message = "Hello, Earth!";
      return this.message;
    },
  };

  console.log(object.getMessage());
};

const second = () => {
  function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
  }
  const cat = new Pet("Fluffy");
  console.log(cat.getName());
  const { getName } = cat;
  console.log(getName());
};

const third = () => {
  const object = {
    message: "Hello, World!",
    logMessage() {
      console.log(this.message);
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

  console.log(object.greet());
  console.log(object.farewell());
};

const fifth = () => {
  global.length = 4; // var length = 4 or this.length = 4

  function callback() {
    console.log(this.length);
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
    console.log(this.length);
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
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function () {
        console.log("inner func:  this.foo = " + this.foo);
        console.log("inner func:  self.foo = " + self.foo);
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

  console.log(stoleSecretIdentity());
  console.log(hero.getSecretIdentity());
};

// first();
// second();
// third();
// fourth();
// fifth();
// sixth();
// seventh();
// eights();
