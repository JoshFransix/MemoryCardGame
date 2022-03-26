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

    return;
  }
  // second Click
  hasFlippedCard = false;
  secondCard = this;

  // do cards match
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
  // not a match

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
}
