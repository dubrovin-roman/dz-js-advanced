'use strict';

class Character {
  #race;
  #name;
  #language;

  constructor(race, name, language) {
    if (typeof race !== 'string' || race.trim() === '') {
      throw new Error(`Поле race должно быть string, не пустое`);
    }
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error(`Поле name должно быть string, не пустое`);
    }
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error(`Поле language должно быть string, не пустое`);
    }
    this.#race = race;
    this.#name = name;
    this.#language = language;
  }

  get race() {
    return this.#race;
  }

  get name() {
    return this.#name;
  }

  get language() {
    return this.#language;
  }

  talk() {
    console.log(`${this.#race} по имени ${this.#name} говорит на ${this.#language} языке.`);
  }
}

class Orc extends Character {
  #weapon;
  #health;

  constructor(name, language, health, weapon) {
    super('Orc', name, language);
    if (!(weapon instanceof Weapon)) {
      throw new Error('Поле weapon должно быть экземпляром класса Weapon');
    }
    if (typeof health !== 'number' || health <= 0) {
      throw new Error(`Поле health должно быть number, положительным.`);
    }
    this.#weapon = weapon;
    this.#health = health;
  }

  strike(target) {
    this.#weapon.strike(target);
  }

  takeDamage(weapon) {
    if (!(weapon instanceof Weapon)) {
      console.log('Параметр weapon должен быть экземпляром класса Weapon');
      return;
    }
    if (Math.random() <= 0.5) {
      this.#health -= weapon.damage;
      console.log(`${super.race} по имени ${super.name} получает урон ${weapon.damage} от ${weapon.name} оставшееся здоровье ${this.#health}`);
    } else {
      console.log(`${weapon.name} промахивается ${super.race} по имени ${super.name} не получает урон`);
    }
  }

  talk() {
    console.log(`Я ${super.race} по имени ${super.name} говорю на ${super.language} языке: УРУК ХАЙ!!!`);
  }

  get health() {
    return this.#health;
  }
}

class Elf extends Character {
  #spell;
  #health;

  constructor(name, language, health, spell) {
    super('Elf', name, language);
    if (!(spell instanceof Weapon)) {
      throw new Error('Поле spell должно быть экземпляром класса Weapon');
    }
    if (typeof health !== 'number' || health <= 0) {
      throw new Error(`Поле health должно быть number, положительным.`);
    }
    this.#spell = spell;
    this.#health = health;
  }

  createSpell(target) {
    this.#spell.strike(target);
  }

  takeDamage(weapon) {
    if (!(weapon instanceof Weapon)) {
      console.log('Параметр weapon должен быть экземпляром класса Weapon');
      return;
    }
    this.#health -= weapon.damage;
    console.log(`${super.race} по имени ${super.name} получает урон ${weapon.damage} от ${weapon.name} оставшееся здоровье ${this.#health}`);
  }

  talk() {
    console.log(`Я ${super.race} по имени ${super.name} говорю на ${super.language} языке: АВАКВЭТ!!!`);
  }

  get health() {
    return this.#health;
  }
}

class Weapon {
  #name;
  #damage;

  constructor(name, damage) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error(`Поле name должно быть string, не пустое`);
    }
    if (typeof damage !== 'number' || damage <= 0) {
      throw new Error(`Поле damage должно быть number, положительным.`);
    }
    this.#name = name;
    this.#damage = damage;
  }

  get damage() {
    return this.#damage;
  }

  get name() {
    return this.#name;
  }

  strike(target) {
    if (!(target instanceof Orc || target instanceof Elf)) {
      console.log('Параметр target должен быть экземпляром класса Orc или Elf');
      return;
    }
    target.takeDamage(this);
  }
}

const sword = new Weapon('Меч', 15);
const fireball = new Weapon('Огненный шар', 25);

const orc = new Orc('Белая Рука', 'Орочий', 100, sword);
const elf = new Elf('Легалас', 'Ельфийский', 150, fireball);

orc.talk();
elf.talk();

do {
  elf.createSpell(orc);
  orc.strike(elf);
} while (orc.health > 0 && elf.health > 0);

if (orc.health <= 0 && elf.health <= 0) {
  console.log('Оба героя погибают!');
} else if (elf.health <= 0) {
  console.log('Эльф погибает!');
} else if (orc.health <= 0) {
  console.log('Орк погибает!');
}