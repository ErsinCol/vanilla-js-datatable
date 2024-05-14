import renderTable from "./renderTable.js";

export default function search(e, data) {
  const searchTerm = e.target.value;
  const filteredData = data.filter((row) => {
    return Object.values(row).some((value) => {
      return value.toString().includes(searchTerm);
    });
  });
  renderTable(filteredData);
}
