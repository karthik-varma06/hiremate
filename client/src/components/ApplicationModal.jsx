export default function ApplicationModal({ app, onClose, onDeleted }) {
  if (!app) return null;

  const API = "http://localhost:5000";

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this application?");
    if (!confirmDelete) return;

    await fetch(`${API}/api/applications/${app._id}`, {
      method: "DELETE",
    });

    onClose();
    onDeleted(); // refresh dashboard
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-1">{app.company}</h2>
        <div className="text-gray-500 mb-6">{app.role}</div>

        <h3 className="font-semibold mb-2">Cover Letter</h3>
        <div className="bg-slate-50 p-4 rounded mb-6 whitespace-pre-wrap max-h-60 overflow-y-auto">
          {app.coverLetter}
        </div>

        <h3 className="font-semibold mb-2">Suggestions</h3>
        <div className="bg-slate-50 p-4 rounded whitespace-pre-wrap max-h-40 overflow-y-auto">
          {app.suggestions}
        </div>

        <button
          onClick={handleDelete}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Delete Application
        </button>
      </div>
    </div>
  );
}
