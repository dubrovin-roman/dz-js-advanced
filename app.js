'use strict';

// Встроенные данные
const user1 = {name: 'Alice', id: 1};
const user2 = {name: 'Bob', id: 2};
const user3 = {name: 'Charlie', id: 3};

// Ваш код здесь
const wSet = new WeakSet();
wSet.add(user1);
console.log(`Добавлен пользователь: Alice`);
wSet.add(user2);
console.log(`Добавлен пользователь: Bob`);
console.log(`Проверка наличия Alice: ${wSet.has(user1)}`);
console.log(`Проверка наличия Charlie: ${wSet.has(user3)}`);