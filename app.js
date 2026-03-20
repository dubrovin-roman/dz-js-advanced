'use strict';

const users = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    ];

function getUniqueUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return null;
    }
    for (const user of users) {
        if (typeof user !== 'object' || !user?.id) {
            return null;
        }
    }

    const userIdSet = new Set(users.map(user => user.id));
    const result = [];
    userIdSet.forEach(id => result.push(users.find(user => user.id === id)));
    return result;
}

// проверка валидации
console.log(getUniqueUsers('string'));
console.log(getUniqueUsers([]));
console.log(getUniqueUsers(['str', 'str', 1]));
console.log(getUniqueUsers([{name: 'Вася'}, {name: 'Петя'}, {name: 'Петя'}]));

// проверка рабочего сценария
console.log(users);
const uniqUsers = getUniqueUsers(users);
console.log(uniqUsers);