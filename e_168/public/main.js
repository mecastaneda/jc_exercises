function Person(name, lastName) {
  this.getFullName = function() {
    return name + " " + lastName;
  }
  this.toObject = function() {
    return {name: name, lastName: lastName};
  }
}

function Medic(name, lastName, specialty) {
  Person.call(this, name, lastName);
}

Medic.prototype = Object.create(Person.prototype);

var drWho = new Medic("Pedro", "Camote", "Neural");

console.log(drWho.getFullName());

var client3 = new Person("Charles", "Barkley");

$.get('person', client3.toObject());
