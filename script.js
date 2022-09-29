const cardForm = document.querySelector(".card__form");
const submitButton = document.getElementById("card__form--submit-button");
const scoreButtons = document.querySelectorAll("[type='radio']");
let selectedValue = 0;

// After a radio button is selected,
// enable submit button and save the selected value.
scoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    submitButton.disabled = false;
    selectedValue = button.value;
  });
});

// Reset cardForm and disable submitButton on load.
window.addEventListener("load", () => {
  cardForm.reset();
  submitButton.disabled = true;
});
