import formatDate from "./utils/formatDate.js";
import { store } from "./store.js";

export default function renderTable(products) {
  let result = "";
  let productsToRender;
  if (products) {
    productsToRender = store.getProductsByPage(store.currentPage, products);
  } else {
    productsToRender = store.getProductsByPage(
      store.currentPage,
      store.products
    );
  }

  productsToRender.forEach((product) => {
    result += `
        <tr>
            <td class="expand-icon"><i class="fa-solid fa-circle-chevron-right"></i></td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.category}</td>
            <td>${product.rating.rate}</td>
            <td>${product.price} TL</td>
            <td>${formatDate(new Date())}</td>
        </tr>
        <tr class="hidden">
            <td colspan="7">
                <h4>Description</h4>
                <p> ${product.description}</p>
                <h4>Image</h4>
                <img src="${product.image}" alt="${
      product.title
    }" width="50" height="50">
            </td>
        </tr>`;
  });

  const table = document.querySelector("table tbody");
  table.innerHTML = result;

  const expandIcons = document.querySelectorAll(".expand-icon");
  expandIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const row = this.parentNode;
      const detailsRow = row.nextElementSibling;

      detailsRow.classList.toggle("hidden");

      if (detailsRow.classList.contains("hidden")) {
        this.innerHTML = "<i class='fa-solid fa-circle-chevron-right'></i>";
      } else {
        this.innerHTML = "<i class='fa-solid fa-circle-chevron-down'></i>";
      }
    });
  });
}
