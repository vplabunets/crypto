(() => {
  const refs = {
    openModalBtn: document.querySelector(".data-modal-open"),
    closeModalBtn: document.querySelector(".data-modal-close"),
    modal: document.querySelector(".data-modal"),
    body: document.querySelector("body"),
  };
  console.log(refs.modal);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    console.log("hahah");
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
