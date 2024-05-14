import renderTable from "./renderTable.js";
import { store } from "./store.js";

export default function search(e) {
  const searchQuery = e.target.value;
  const filteredProducts = store.products.filter((product) => {
    return (
      product.title.includes(searchQuery) ||
      product.description.includes(searchQuery)
    );
  });

  renderTable(filteredProducts);
}
