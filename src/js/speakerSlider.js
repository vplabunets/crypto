(() => {
  const prevButton = document.querySelector(".speakers-slider-prev");
  const nextButton = document.querySelector(".speakers-slider-next");
  const cardList = document.querySelectorAll(".speakers-item");

  let screenWidth = window.innerWidth;

  let currentCardIndex = getCards();
  let cardsPerPage = getCards();

  console.log(cardList.length);

  function getCards() {
    if (screenWidth > 744 && screenWidth < 1440) return 3;
    else if (screenWidth >= 1440) return cardList.length;
  }

  const updateCardVisibility = () => {
    cardList.forEach((card, index) => {
      if (
        index < currentCardIndex ||
        index >= currentCardIndex + cardsPerPage
      ) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
  };

  const updateButtonsAvailability = () => {
    if (currentCardIndex <= 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (currentCardIndex + cardsPerPage >= cardList.length) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };

  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
    cardsPerPage = getCards();
    updateCardVisibility();
    updateButtonsAvailability();
  });

  const showNextCards = () => {
    currentCardIndex += 1;

    updateCardVisibility();
    updateButtonsAvailability();
  };

  const showPrevCards = () => {
    currentCardIndex -= 1;

    updateCardVisibility();
    updateButtonsAvailability();
  };

  nextButton.addEventListener("click", showNextCards);
  prevButton.addEventListener("click", showPrevCards);

  // Initial card visibility setup
  updateCardVisibility();
  updateButtonsAvailability();
})();
