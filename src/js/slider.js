(() => {
  const scrollButton = document.querySelector(".agenta-scroll-button");
  const cardList = document.querySelectorAll(".agenta-card-list li");

  let screenWidth = window.innerWidth;

  let currentCardIndex = screenWidth > 744 ? 4 : 1;
  let cardsPerPage = screenWidth > 744 ? 4 : 1;

  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;

    cardsPerPage = screenWidth > 744 ? 4 : 1;

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
  });

  scrollButton.addEventListener("click", () => {
    cardList.forEach((card) => {
      card.style.display = "none";
    });

    for (let i = currentCardIndex; i < currentCardIndex + cardsPerPage; i++) {
      if (cardList[i]) {
        cardList[i].style.display = "flex";
      }
    }

    currentCardIndex += cardsPerPage;

    if (currentCardIndex >= cardList.length) {
      currentCardIndex = 0;
    }
  });
})();
