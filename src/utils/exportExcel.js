import * as XLSX from "xlsx/xlsx.mjs";

export default function exportExcel() {
  const table = document.getElementById("datatable");

  // Excel dosyasını oluştur
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.table_to_sheet(table);

  XLSX.utils.book_append_sheet(wb, ws, "Datatable");

  XLSX.writeFile(wb, "datatable" + ".xlsx");
}
