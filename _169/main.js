function Avatar(name) {
  this.strength = 0;
  this.dexterity = 0;
  this.magic = 0;
  this.name = name;

  this.attack = function() {
    this.strength += this.strengthAdder;
    this.dexterity += this.dexterityAdder;
    this.magic += this.magicAdder;
    this.performAtack();
  }

  this.printStats = function() {
    console.log('Stats for:', this.name);
    console.log('\tStrength', this.strength);
    console.log('\tDexterity', this.dexterity);
    console.log('\tMagic', this.magic);
  }
}

function Warrior(name) {
  this.strengthAdder = 3;
  this.dexterityAdder = 1;
  this.magicAdder = 0;
  this.performAtack = function() {
    console.log("Sword atack");
  }
  Avatar.call(this, name);
}


function Sorcerer(name) {
  this.strengthAdder = 0;
  this.dexterityAdder = 1;
  this.magicAdder = 3;
  this.performAtack = function() {
    console.log("Spell atack");
  }
  Avatar.call(this, name);
}

function Rogue(name) {
  this.strengthAdder = 1;
  this.dexterityAdder = 2;
  this.magicAdder = 1;
  this.performAtack = function() {
    console.log("Bow atack");
  }
  Avatar.call(this, name);
}

Warrior.prototype = Object.create(Avatar.prototype);
Sorcerer.prototype = Object.create(Avatar.prototype);
Rogue.prototype = Object.create(Avatar.prototype);

var rogue = new Rogue("Link");
rogue.attack();
rogue.attack();
rogue.printStats();
