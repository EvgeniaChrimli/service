import { data } from "./catalog.js";
import { initModal } from "./modal.js";

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

if (!productId) {
  document.body.innerHTML = "<h2>Товар не найден</h2>";
} else {
  let product;
  for (const category of data) {
    product = category.products.find((p) => p.id === productId);
    if (product) break;
  }

  if (!product) {
    document.body.innerHTML = "<h2>Товар не найден</h2>";
  } else {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-img").src = product.img;
    document.getElementById("diametr").textContent = product.diametr;
    document.getElementById("size").textContent = product.size;
    document.getElementById("article").textContent = product.article || "-";
    document.getElementById("descr").textContent = product.descr;
    document.getElementById("product-price").textContent = product.price ?? "—";
  }
}

const openModal = initModal();

const pageBtn = document.getElementById("order");
pageBtn.addEventListener("click", () => {
  openModal("хотите заказать запчасть?");
});
