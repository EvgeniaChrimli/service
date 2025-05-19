export const data = [
  {
    id: 1,
    name: "Крестовины карданных валов",
    products: [
      {
        id: 11,
        name: "Крестовина 15х38",
        img: "assets/images/catalog/img1.png",
        diametr: 15,
        size: 38,
        article: "ST 1538",
        descr: "Крестовина рулевая GMB",
        price: "400₽/ш",
      },
      {
        id: 12,
        name: "Крестовина 15х39, под кернение",
        img: "assets/images/catalog/img1.png",
        diametr: 15,
        size: 39,
        article: "ST 1538",
        descr: "Крестовина рулевая GMB",
        price: "500₽/ш",
      },
    ],
  },
  {
    id: 2,
    name: "Подвесные подшипники",
    products: [
      {
        id: 13,
        name: "Подвесной подшипник 100х193,5",
        img: "assets/images/catalog/img2.png",
      },
      {
        id: 14,
        name: "Подвесной подшипник 22х66",
        img: "assets/images/catalog/img2.png",
      },
    ],
  },
  {
    id: 3,
    name: "Шлицевые фланцы",
    products: [
      {
        id: 15,
        name: "Шлицевой фланец 57х164",
        img: "assets/images/catalog/img3.png",
      },
      {
        id: 16,
        name: "Шлицевой фланец",
        img: "assets/images/catalog/img3.png",
      },
    ],
  },
  {
    id: 4,
    name: "Шлицевые валы",
    products: [
      {
        id: 17,
        name: "Шлицевой вал 62х2,5",
        img: "assets/images/catalog/img4.png",
      },
      {
        id: 18,
        name: "Шлицевой вал 62х2,5",
        img: "assets/images/catalog/img4.png",
      },
    ],
  },
  {
    id: 5,
    name: "Вилки карданного вала",
    products: [
      {
        id: 19,
        name: "Вилка в трубу 20х55",
        img: "assets/images/catalog/img5.png",
      },
      {
        id: 20,
        name: "Вилка в трубу 20",
        img: "assets/images/catalog/img5.png",
      },
    ],
  },
];

export function initCatalog(data) {
  const list = document.querySelector(".body-left_list");
  const items = document.querySelector(".items");

  if (!list || !items) return;

  const productName = data.map((item) => item.name);

  list.innerHTML = "";
  items.innerHTML = "";

  productName.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("body-left_item");
    if (index === 0) li.classList.add("active");
    li.textContent = item;
    list.appendChild(li);
  });

  const renderItems = (name) => {
    items.innerHTML = "";
    const category = data.find((d) => d.name === name);
    category?.products.forEach((p) => {
      const html = `<div class="items_body">
          <img src="${p.img}" alt="" class="items_body-img" />
          <div class="items_body-text">${p.name}</div>
           <a href="pages/product.html?id=${p.id}" class="items_btn">Подробнее</a>         
        </div>`;
      items.insertAdjacentHTML("beforeend", html);
    });
  };

  renderItems(productName[0]);

  document.querySelectorAll(".body-left_item").forEach((li) => {
    li.addEventListener("click", (e) => {
      document
        .querySelectorAll(".body-left_item")
        .forEach((el) => el.classList.remove("active"));
      li.classList.add("active");
      renderItems(e.target.textContent);
    });
  });
}
