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

    // do cards match

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      // not a match
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1500);
    }
  }
}
