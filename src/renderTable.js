import formatDate from "./utils/formatDate.js";

export default function renderTable(data, currentPage = 1, itemsPerPage = 6) {
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
            <td>${column.id}</td>
            <td>${column.title}</td>
            <td>${column.category}</td>
            <td>${column.rating.rate}</td>
            <td>${column.price} TL</td>
            <td>${formatDate(new Date())}</td>
        </tr>`;
    });

  const table = document.querySelector("table tbody");
  table.innerHTML = result;
}
