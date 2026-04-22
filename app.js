"use strict";

function getGeoLocationPromise() {
  const { resolve, reject, promise } = Promise.withResolvers();

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        resolve(`Широта: ${latitude}, Долгота: ${longitude}`);
      },
      (error) => {
        reject(new Error(`Ошибка получения геолокации: ${error.message}`));
      },
    );
  } else {
    reject(new Error("Geolocation не поддерживается в этом браузере"));
  }

  return promise;
}

const panel = document.querySelector(".panel");
const geoPromise = getGeoLocationPromise();
geoPromise
  .then((data) => (panel.innerText = data))
  .catch((err) => (panel.innerText = err))
  .finally(() => console.log("Обработка geoPromise завершена."));