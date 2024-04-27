import { jsPDF } from "jspdf";
import crypto from "crypto";

export const generatePDF = (data: string) => {
  const jspf = new jsPDF("p", "pt", "letter");
  const uuid = crypto.randomBytes(8).toString("hex");

  jspf.html(data, {
    callback: (doc) => {
      doc.save(`sumariz.ai-${uuid}.pdf`);
    },
    margin: [10, 10, 10, 10],
  });
};
