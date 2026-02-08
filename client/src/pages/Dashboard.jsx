import { useEffect, useState } from "react";
import ApplicationModal from "../components/ApplicationModal";

export default function Dashboard() {
  const [apps, setApps] = useState([]);
  const [selected, setSelected] = useState(null);

  const API = "https://hiremate-api.onrender.com";

  const fetchApps = () => {
    fetch(`${API}/api/applications`)
      .then((r) => r.json())
      .then(setApps);
  };

  useEffect(() => {
    fetchApps();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-2xl font-semibold mb-6">Applications</h1>

      <div className="grid gap-4">
        {apps.map((a) => (
          <div
            key={a._id}
            onClick={() => setSelected(a)}
            className="bg-white border rounded-xl p-5 hover:shadow-md cursor-pointer"
          >
            <div className="font-semibold">{a.company}</div>
            <div className="text-sm text-gray-500">{a.role}</div>
          </div>
        ))}
      </div>

      <ApplicationModal
        app={selected}
        onClose={() => setSelected(null)}
        onDeleted={fetchApps}
      />
    </div>
  );
}
