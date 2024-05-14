import renderTable from "./renderTable.js";
import { store } from "./store.js";

export function renderPagination() {
  const totalPages = store.getTotalPages();
  let paginationHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === store.currentPage ? "active" : "";
    paginationHTML += `<button class="pageNumber ${activeClass}" data-page="${i}">${i}</button>`;
  }
  const pageNumbers = document.querySelector("#pageNumbers");
  pageNumbers.innerHTML = paginationHTML;

  document.querySelectorAll(".pageNumber").forEach((pageNumber) => {
    pageNumber.addEventListener(
      "click",
      (e) => {
        const pageNumber = parseInt(e.target.dataset.page);
        store.setCurrentPage(pageNumber);
        renderTable();
        updateActivePage();
      },
      false
    );
  });
}

export function updateActivePage() {
  document.querySelectorAll(".pageNumber").forEach((pageNumber) => {
    const page = parseInt(pageNumber.dataset.page);
    if (page === store.currentPage) {
      pageNumber.classList.add("active");
    } else {
      pageNumber.classList.remove("active");
    }
  });
}

export function handlePrevious() {
  if (store.currentPage > 1) {
    store.setCurrentPage(store.currentPage - 1);
    renderTable();
    updateActivePage();
  }
}

export function handleNext() {
  if (store.currentPage * store.itemsPerPage < store.products.length) {
    store.setCurrentPage(store.currentPage + 1);
    renderTable();
    updateActivePage();
  }
}

export function handleFirst() {
  store.setCurrentPage(1);
  renderTable();
  updateActivePage();
}

export function handleLast() {
  const totalPages = store.getTotalPages();
  store.setCurrentPage(totalPages);
  renderTable();
  updateActivePage();
}
