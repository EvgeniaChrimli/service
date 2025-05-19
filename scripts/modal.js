export function initModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalTitle = document.querySelector(".modal_title");
  const closeButton = document.querySelector(".modal_close");

  if (!modalOverlay || !modalTitle) return;

  closeButton.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  return function openModal(titleText) {
    modalTitle.textContent = titleText;
    modalOverlay.classList.add("active");
  };
}
