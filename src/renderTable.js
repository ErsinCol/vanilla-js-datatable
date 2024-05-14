import formatDate from "./utils/formatDate.js";

export default function renderTable(data, currentPage, itemsPerPage) {
  let result = "";
  data
    .filter((row, index) => {
      let start = (currentPage - 1) * itemsPerPage;
      let end = currentPage * itemsPerPage;
      if (index >= start && index < end) return true;
    })
    .forEach((column) => {
      result += `
        <tr>
            <td class="expand-icon">&#x25B6;</td>
            <td>${column.id}</td>
            <td>${column.title}</td>
            <td>${column.category}</td>
            <td>${column.rating.rate}</td>
            <td>${column.price} TL</td>
            <td>${formatDate(new Date())}</td>
        </tr>
        <tr class="hidden">
            <td colspan="7">
                <h4>Description</h4>
                <p> ${column.description}</p>
                <h4>Image</h4>
                <img src="${column.image}" alt="${
        column.title
      }" width="50" height="50">
                <!-- Diğer detayları buraya ekleyebilirsiniz -->
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
        this.innerHTML = "&#x25B6;";
      } else {
        this.innerHTML = "&#x25BC;";
      }
    });
  });
}
