import "./style.css";
import { store } from "./store.js";
import fetchData from "./utils/fetchData.js";
import renderTable from "./renderTable.js";
import search from "./search.js";
import sort from "./sort.js";
import {
  handleFirst,
  handleLast,
  handleNext,
  handlePrevious,
  renderPagination,
  updateActivePage,
} from "./pagination.js";
import exportPdf from "./utils/exportPdf.js";
import exportExcel from "./utils/exportExcel.js";

document.addEventListener("DOMContentLoaded", init, false);

async function init() {
  document.querySelector(".container").classList.remove("hidden-content");

  const response = await fetchData();
  store.setProducts(response);

  renderTable();

  const excelBtn = document.getElementById("excelBtn");
  excelBtn.addEventListener("click", exportExcel);
  const pdfBtn = document.getElementById("pdfBtn");
  pdfBtn.addEventListener("click", exportPdf);

  document.querySelectorAll("table thead tr th").forEach((column) => {
    column.addEventListener("click", sort);
  });

  const nextButton = document.querySelector("#nextButton");
  nextButton.addEventListener("click", handleNext);

  const prevButton = document.querySelector("#prevButton");
  prevButton.addEventListener("click", handlePrevious);

  const firstButton = document.querySelector("#firstButton");
  firstButton.addEventListener("click", handleFirst);

  const lastButton = document.querySelector("#lastButton");
  lastButton.addEventListener("click", handleLast);

  renderPagination();

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", search);

  const itemsPerPageSelect = document.getElementById("itemsPerPage");
  itemsPerPageSelect.addEventListener("change", (event) => {
    store.setItemsPerPage(parseInt(event.target.value));
    store.setCurrentPage(1);
    renderTable();
    renderPagination();
    updateActivePage();
  });
}
