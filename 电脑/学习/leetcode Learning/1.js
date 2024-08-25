const a = {
  name: 'a',
  say: function () {
    console.log(this.name)
  }
}

function Person (name) {
  this.name = name
}

Person.prototype.say = function () {
  console.log(this.name)
}

const b = new Person('b')

// a.say() // a
// b.say() // b
console.log(b.__proto__); // true
console.log(Person.prototype.__proto__.__proto__); // true