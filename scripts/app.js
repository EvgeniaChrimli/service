import { data, initCatalog } from "./catalog.js";
import { initModal } from "./modal.js";

if (
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("index.html")
) {
  const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

if (window.location.pathname.includes("catalog.html")) {
  initCatalog(data);
}

const btn = document.getElementById("headerBtn");
const serviceBtn = document.getElementById("serviceBtn");
const mobileBtn = document.getElementById("header");

const footerRepair = document.getElementById("footerRepair");
const footerOrder = document.getElementById("footerOrder");

document.addEventListener("DOMContentLoaded", () => {
  const openModal = initModal();
  mobileBtn.addEventListener("click", () => {
    openModal("записаться на ремонт");
  });

  footerOrder.addEventListener("click", () => {
    openModal("хотите заказать запчасть?");
  });

  footerRepair.addEventListener("click", () => {
    openModal("записаться на ремонт");
  });
  if (openModal) {
    btn.addEventListener("click", () => {
      openModal("записаться на ремонт");
    });
    serviceBtn.addEventListener("click", () => {
      openModal("хотите заказать запчасть?");
    });
  } else {
    console.error("Модалка не найдена в DOM!");
  }
});

const menuBtn = document.querySelector(".header_btn");
const menuClose = document.querySelector(".men_close");
const menu = document.querySelector(".men");

const handleMenuOpen = () => {
  menu.classList.add("open");
};

const handleMenuClose = () => {
  menu.classList.remove("open");
};

menuBtn.addEventListener("click", handleMenuOpen);
menuClose.addEventListener("click", handleMenuClose);

if (window.location.pathname.includes("contacts.html")) {
  const map = L.map("map").setView([53.3474, 83.7788], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([53.3474, 83.7788])
    .addTo(map)
    .bindPopup("Барнаул, проспект Калинина, 108")
    .openPopup();
}
