(() => {
  const refs = {
    backdropCookiesEl: document.querySelector(".backdrop-cookies"),
    acceptCookieslBtn: document.querySelector(".data-confirm-cookies"),
    body: document.querySelector("body"),
  };

  refs.acceptCookieslBtn.addEventListener("click", confirmCookies);

  function confirmCookies() {
    refs.backdropCookiesEl.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
