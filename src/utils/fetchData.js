import axios from "axios";

export default async function fetchData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Data fetching error: ", error);
  }
}
