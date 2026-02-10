import jsPDF from "jspdf";

export default function ApplicationModal({ app, onClose, onDelete }) {
  if (!app) return null;

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(app.coverLetter || "", 10, 10);
    doc.save(`${app.company}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0b1220] p-8 rounded-xl w-[700px] max-h-[80vh] overflow-y-auto border border-white/10">

        <h2 className="text-xl font-bold mb-4">
          {app.company} — {app.role}
        </h2>

        <div className="whitespace-pre-wrap bg-[#111827] p-4 rounded-lg mb-4">
          {app.coverLetter}
        </div>

        {/* suggestions */}
        {app.suggestions?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Suggestions</h3>
            <ul className="list-disc pl-5 text-gray-300">
              {app.suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button
            onClick={exportPDF}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            Export PDF
          </button>

          <button
            onClick={() => onDelete(app._id)}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Delete
          </button>

          <button
            onClick={onClose}
            className="bg-gray-600 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
