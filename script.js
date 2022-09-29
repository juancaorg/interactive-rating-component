const ratingCard = document.getElementById("rating__card");
const thanksCard = document.getElementById("thanks__card");
const thanksRating = document.querySelector(".thanks__rating");
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

// After submitting your rating,
// pass the rating to the thanksRating span,
// hide the ratingCard and make the thanksCard visible.
cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (selectedValue !== 0) {
    thanksRating.textContent = selectedValue;
    ratingCard.classList.toggle("hidden");
    thanksCard.classList.toggle("hidden");
  }
});

// Reset cardForm and disable submitButton on load.
window.addEventListener("load", () => {
  cardForm.reset();
  submitButton.disabled = true;
});
