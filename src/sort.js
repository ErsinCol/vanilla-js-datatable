import renderTable from "./renderTable";

let sortCol;
let sortAsc = false;

export default function sort(e, data, currentPage, itemsPerPage) {
  let thisSort = e.target.dataset.sort;
  if (sortCol === thisSort) sortAsc = !sortAsc;
  sortCol = thisSort;
  data.sort((a, b) => {
    if (a[sortCol] < b[sortCol]) return sortAsc ? 1 : -1;
    if (a[sortCol] > b[sortCol]) return sortAsc ? -1 : 1;
    return 0;
  });
  renderTable(data, currentPage, itemsPerPage);
}
