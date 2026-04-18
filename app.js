"use strict";

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => {
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }
    return res.json();
  })
  .then((data) => {
    const { abilities } = data;
    if (!Array.isArray(abilities) || abilities.length === 0) {
      throw new Error("Invalid abilities");
    }
    const url = abilities[0].ability.url;
    return fetch(url);
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error("HTTP " + res.status);
    }
    return res.json();
  })
  .then((data) => {
    const { effect_entries } = data;
    if (!Array.isArray(effect_entries) || effect_entries.length === 0) {
      throw new Error("Invalid effect_entries");
    }
    const enRes = effect_entries.find((e) => e.language.name === "en");
    if (enRes) {
      console.log(enRes.effect);
    } else {
      throw new Error("The description in English was not found.");
    }
  })
  .catch((err) => console.log(err));