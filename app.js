'use strict';

function castDice(diceType) {
    const diceRegex = /^d(4|6|8|10|12|16|20)$/;
    if (typeof diceType !== 'string' || !diceRegex.test(diceType)) {
        return null;
    }
    const max = Number(diceType.replace('d', ''));
    return Math.ceil(Math.random() * (max - 1 + 1));
}




console.log(castDice('d1'));
console.log(castDice('d100'));
console.log(castDice('8d'));
console.log(castDice(10));
console.log(castDice('error'));
console.log('---------------------');
console.log(castDice('d4'));
console.log(castDice('d6'));
console.log(castDice('d8'));
console.log(castDice('d10'));
console.log(castDice('d12'));
console.log(castDice('d16'));
console.log(castDice('d20'));