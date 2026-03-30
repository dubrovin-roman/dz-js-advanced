'use strict';

const panel = document.querySelector('.panel');

setInterval(() => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const currentSeconds = now.getSeconds();
  const currentMinutes = now.getMinutes();
  const currentHours = now.getHours();
  const currentDay = now.getDate();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const secondsUntilEndOfMinute = 60 - currentSeconds;
  const minutesUntilEndOfHour = 60 - currentMinutes;
  const hoursUntilEndOfDay = 24 - currentHours;
  const daysLeftInMonth = lastDayOfMonth - currentDay;
  const monthsUntilEndOfYear = 11 - month;
  panel.innerText = `${monthsUntilEndOfYear} месяцев, ${daysLeftInMonth} дней, ${hoursUntilEndOfDay} часов, ${minutesUntilEndOfHour} минут, ${secondsUntilEndOfMinute} секунд`;
}, 1000);
