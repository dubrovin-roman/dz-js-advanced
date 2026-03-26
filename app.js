'use strict';

const strictDateRegex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

function isValidDateString(dateString) {
  // Шаг 1: проверка формата регулярным выражением
  if (!strictDateRegex.test(dateString)) {
    return false;
  }

  // Шаг 2: разбор на компоненты
  const [yearStr, monthStr, dayStr] = dateString.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10); // 1–12
  const day = parseInt(dayStr, 10);

  // Шаг 3: создание даты и проверка её валидности
  const date = new Date(year, month - 1, day); // месяц в Date() от 0 до 11

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function isOver14YearsOld(dateOfBirthStr) {
    if (!isValidDateString(dateOfBirthStr)) {
        return null;
    }

    const birth  = new Date(dateOfBirthStr);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }
    return age >= 14;
}

console.log(isOver14YearsOld(14));
console.log(isOver14YearsOld('1986-20-50'));
console.log(isOver14YearsOld('1986-04-21'));
console.log(isOver14YearsOld('2018-01-01'));
console.log(isOver14YearsOld('2012-01-01'));
console.log(isOver14YearsOld('2013-01-01'));
