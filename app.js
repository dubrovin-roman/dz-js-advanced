'use strict';

// Базовый класс Персонаж
function Character(species, name, language) {
  this.species = species;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function() {
  console.log(`language: ${this.language} name: ${this.name}`);
};


// Класс Орк
function Orc(name, weapon) {
  Character.call(this, 'Орк', name, 'орочий');
  this.weapon = weapon;
}
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.strike = function() {
  console.log(`${this.species} по имени ${this.name} нанес удар ${this.weapon}`);
}

const ork1 = new Orc('Ваня', 'Дубина');
ork1.speak();
ork1.strike();

//Класс Эльф
function Elf(name, typeOfSpells) {
  Character.call(this, 'Эльф', name, 'эльфский');
  this.typeOfSpells = typeOfSpells;
}
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.createSpell = function() {
  console.log(`${this.species} по имени ${this.name} создал заклнание ${this.typeOfSpells}`);
}

const elf1 = new Elf('Леголаз', 'Огненный шар');
elf1.speak();
elf1.createSpell();