"use strict";

const activities = document.querySelector(".activities");
const generatorBtn = document.querySelector(".generator-btn");

async function getActivity() {
  try {
    const activityResponse = await fetch(
      "https://bored.api.lewagon.com/api/activity",
    );
    if (!activityResponse.ok) {
      throw new Error(activityResponse.status);
    }
    const activityData = await activityResponse.json();
    const { activity } = activityData;
    return activity;
  } catch (error) {
    console.error(error);
  }
}

async function generateActivities() {
  const activity = await getActivity();
  const activityEl = document.createElement("div");
  activityEl.setAttribute("class", "activity");
  activityEl.innerText = activity;
  activities.appendChild(activityEl);
}

generatorBtn.addEventListener("click", () => {
  activities.innerHTML = "";
  generateActivities();
  generateActivities();
  generateActivities();
});
