export const store = {
  products: [],
  currentPage: 1,
  itemsPerPage: 5,
  setProducts: function (data) {
    this.products = data;
  },
  getProductsByPage: function (pageNumber, data) {
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  },
  getTotalPages: function () {
    return Math.ceil(this.products.length / this.itemsPerPage);
  },
  setCurrentPage: function (pageNumber) {
    this.currentPage = pageNumber;
  },
  setItemsPerPage: function (length) {
    this.itemsPerPage = length;
  },
};
