'use strict';

class Car {
  #make;
  #model;
  #mileage;
  
  constructor(make, model, mileage) {
    if (typeof make !== 'string' || make.trim() === '') {
      throw new Error('Марка - непустая строка');
    }
    if (typeof model !== 'string' || model.trim() === '') {
      throw new Error('Модель - непустая строка');
    }
    if (typeof mileage !== 'number' || mileage <= 0) {
      throw new Error('Пробег - положительное число');
    }
    this.#make = make;
    this.#model = model;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(mileage) {
    if (typeof mileage !== 'number' || mileage <= 0 || mileage < this.#mileage ) {
      throw new Error('Пробег - положительное число и не должно быть меньше уже установленного.');
    }
    this.#mileage = mileage;
  }

  info() {
    console.log(`марка: ${this.#make}, модель: ${this.#model}, пробег: ${this.#mileage}`);
  }
}

const car = new Car('Шкода', 'Рапид', 115_000);
car.info();
car.mileage = 150_000;
car.info();

try {
  const car2 = new Car(123, 'Рапид', 115_000);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  const car3 = new Car('Шкода', 123, 115_000);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  const car4 = new Car('Шкода', 'Рапид', '150');
} catch (error) {
  console.log(`Error: ${error.message}`);
}

try {
  const car5 = new Car('Шкода', 'Рапид', 115_000);
  car.mileage = 50_000;
} catch (error) {
  console.log(`Error: ${error.message}`);
}