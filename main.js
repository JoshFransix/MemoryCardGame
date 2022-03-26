const cards = document.querySelectorAll(".memory-card");

cards.forEach((card) => card.addEventListener("click", flipCard));

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first Click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second Click
    hasFlippedCard = false;
    secondCard = this;

    // console.log({ firstCard, secondCard });
  }
}
