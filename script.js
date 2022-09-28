const cardForm = document.querySelector(".card__form");
const submitButton = document.getElementById("card__form--submit-button");

// Reset cardForm and disable submitButton on load.
window.addEventListener("load", () => {
  cardForm.reset();
  submitButton.disabled = true;
});
