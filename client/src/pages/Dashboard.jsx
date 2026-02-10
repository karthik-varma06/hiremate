import { useEffect, useState } from "react";
import Navbar from "../components/landing/Navbar";
import ApplicationModal from "../components/ApplicationModal";

export default function Dashboard() {
  const [apps, setApps] = useState([]);
  const [selected, setSelected] = useState(null);

  // LOAD APPLICATIONS
  useEffect(() => {
    fetch("https://hiremate-api.onrender.com/api/applications")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  // DELETE APPLICATION
  const handleDelete = async (id) => {
    await fetch(`https://hiremate-api.onrender.com/api/applications/${id}`, {
      method: "DELETE",
    });

    setApps(apps.filter((a) => a._id !== id));
  };

  return (
    <div className="bg-[#0b1220] min-h-screen text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-3xl font-bold mb-8">Your Applications</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <div
              key={app._id}
              onClick={() => setSelected(app)}
              className="bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer hover:border-orange-500/40 transition"
            >
              <h2 className="text-xl font-semibold">{app.company}</h2>
              <p className="text-gray-400">{app.role}</p>
              <p className="text-sm text-gray-500 mt-2">Click to open</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <ApplicationModal
          app={selected}
          onClose={() => setSelected(null)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
