"use strict";

const request = new XMLHttpRequest();
request.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto");
request.onerror = function () {
  console.log("Ошибка сети");
};
request.send();

request.addEventListener("load", function () {
  if (this.status >= 200 && this.status < 300) {
    try {
      const { abilities } = JSON.parse(this.responseText);
      if (!Array.isArray(abilities) || abilities.length === 0) {
        return;
      }
      const url = abilities[0].ability.url;
      const rq = new XMLHttpRequest();
      rq.open("GET", url);
      rq.send();
      rq.addEventListener("load", function () {
        if (this.status >= 200 && this.status < 300) {
          try {
            const { effect_entries } = JSON.parse(this.responseText);
            if (!Array.isArray(effect_entries) || effect_entries.length === 0) {
              return;
            }
            const enRes = effect_entries.find((e) => e.language.name === "en");
            console.log(enRes.effect);
          } catch (error) {
            console.error("Invalid JSON");
          }
        } else {
          console.log("Ошибка сервера:", this.status);
        }
      });
    } catch (error) {
      console.error("Invalid JSON");
    }
  } else {
    console.log("Ошибка сервера:", this.status);
  }
});
