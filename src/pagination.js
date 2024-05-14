import renderTable from "./renderTable.js";

export function renderPagination(data, itemsPerPage, currentPage) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  let paginationHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? "active" : "";
    paginationHTML += `<button class="pageNumber ${activeClass}" data-page="${i}">${i}</button>`;
  }
  pageNumbers.innerHTML = paginationHTML;

  document.querySelectorAll(".pageNumber").forEach((pageNumber) => {
    pageNumber.addEventListener(
      "click",
      (e) => {
        currentPage = parseInt(e.target.dataset.page);
        renderTable(data, currentPage, itemsPerPage);
        updateActivePage(currentPage);
      },
      false
    );
  });
}

export function updateActivePage(currentPage) {
  document.querySelectorAll(".pageNumber").forEach((pageNumber) => {
    const page = parseInt(pageNumber.dataset.page);
    if (page === currentPage) {
      pageNumber.classList.add("active");
    } else {
      pageNumber.classList.remove("active");
    }
  });
}
