function openModal(modalSelector, timerModal) {
  const modalWindow = document.querySelector(modalSelector);

  modalWindow.classList.add("show");
  modalWindow.classList.remove("hide");
  document.body.style.overflow = "hidden";

  if (timerModal) {
    clearInterval(timerModal);
  }
}

function closeModal(modalSelector) {
  const modalWindow = document.querySelector(modalSelector);

  modalWindow.classList.add("hide");
  modalWindow.classList.remove("show");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, timerModal) {
  //Modal
  const modalTrigger = document.querySelectorAll(triggerSelector),
    modalWindow = document.querySelector(modalSelector);

  modalTrigger.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(modalSelector, timerModal);
    });
  });

  modalWindow.addEventListener("click", (e) => {
    if (
      (e.target === modalWindow && modalWindow.classList.contains("show")) ||
      e.target.getAttribute("data-close") == ""
    ) {
      e.preventDefault();
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modalWindow.classList.contains("show")) {
      event.preventDefault();
      closeModal(modalSelector);
    }
  });

  function openModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, timerModal);
      window.removeEventListener("scroll", openModalByScroll);
    }
  }

  window.addEventListener("scroll", openModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };
