const dateContainer = document.getElementById("dateContainer");
const peopleContainer = document.getElementById("peopleContainer");
const addPersonButton = document.getElementById("addPersonButton");
const searchOutput = document.getElementById("searchOutput");
const addPersonForm = document.getElementById("addPersonForm");

addPersonForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
});

async function getCurrentDate() {
  await fetch("/getCurrentDate")
    .then((response) => response.json())
    .then((data) => (dateContainer.innerText = data.date));
}
async function getPeople() {
  await fetch("/getPeople")
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        peopleContainer.innerText = JSON.stringify(data.users);
      }
    });
}

getCurrentDate();
getPeople();
