import { jsPDF } from "jspdf";

export default function exportPdf() {
  const doc = new jsPDF();

  const source = document.getElementById("datatable");

  doc.html(source, {
    callback: function (doc) {
      doc.save("document.pdf");
    },
    x: 10,
    y: 10,
    html2canvas: { scale: 0.2 },
  });
}
