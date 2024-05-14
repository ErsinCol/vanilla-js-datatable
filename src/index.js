import "./style.css";
import fetchData from "./utils/fetchData.js";
import renderTable from "./renderTable.js";
import search from "./search.js";
import sort from "./sort.js";
import { renderPagination, updateActivePage } from "./pagination.js";
import exportPdf from "./utils/exportPdf.js";
import exportExcel from "./utils/exportExcel.js";

document.addEventListener("DOMContentLoaded", init, false);

let prevButton, nextButton, firstButton, lastButton;
let searchInput;
let pageNumbers;
let excelBtn, pdfBtn;
let data;
let currentPage = 1;
let itemsPerPageSelect;
let itemsPerPage = 5;

async function init() {
  document.querySelector(".container").classList.remove("hidden-content");

  data = await fetchData();

  renderTable(data, currentPage, itemsPerPage);

  excelBtn = document.getElementById("excelBtn");
  pdfBtn = document.getElementById("pdfBtn");

  excelBtn.addEventListener("click", exportExcel);
  pdfBtn.addEventListener("click", exportPdf);

  document.querySelectorAll("table thead tr th").forEach((column) => {
    column.addEventListener(
      "click",
      (event) => sort(event, data, currentPage, itemsPerPage),
      false
    );
  });

  nextButton = document.querySelector("#nextButton");
  nextButton.addEventListener(
    "click",
    () => {
      if (currentPage * itemsPerPage < data.length) {
        currentPage++;
        renderTable(data, currentPage, itemsPerPage);
        updateActivePage(currentPage);
      }
    },
    false
  );

  prevButton = document.querySelector("#prevButton");
  prevButton.addEventListener(
    "click",
    () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable(data, currentPage, itemsPerPage);
        updateActivePage(currentPage);
      }
    },
    false
  );

  firstButton = document.querySelector("#firstButton");
  firstButton.addEventListener(
    "click",
    () => {
      currentPage = 1;
      renderTable(data, currentPage, itemsPerPage);
      updateActivePage(currentPage);
    },
    false
  );

  lastButton = document.querySelector("#lastButton");
  lastButton.addEventListener(
    "click",
    () => {
      const totalPages = Math.ceil(data.length / itemsPerPage);
      currentPage = totalPages;
      renderTable(data, currentPage, itemsPerPage);
      updateActivePage(currentPage);
    },
    false
  );

  pageNumbers = document.querySelector("#pageNumbers");

  renderPagination(data, itemsPerPage, currentPage);

  searchInput = document.getElementById("searchInput");
  searchInput.addEventListener(
    "input",
    (event) => {
      search(event, data, currentPage, itemsPerPage);
    },
    false
  );

  itemsPerPageSelect = document.getElementById("itemsPerPage");
  itemsPerPageSelect.addEventListener("change", (event) => {
    itemsPerPage = parseInt(event.target.value);
    currentPage = 1;
    renderTable(data, currentPage, itemsPerPage);
    renderPagination(data, itemsPerPage, currentPage);
    updateActivePage(currentPage);
  });
}
