const dateContainer = document.getElementById("dateContainer");
const peopleContainer = document.getElementById("peopleContainer");

const date = new Date();
dateContainer.innerText = `${
  date.getMonth() + 1
}/${date.getDate()}/${date.getFullYear()}`;
