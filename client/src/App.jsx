import { useState } from "react";
import Landing from "./pages/Landing";
import NewApplication from "./pages/NewApplication";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [page, setPage] = useState("landing");
  const [view, setView] = useState("new");

  if (page === "landing") {
    return <Landing onEnter={() => setPage("app")} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* NAVBAR */}
      <nav className="bg-white border-b px-8 py-4 flex justify-between">
        <div className="font-semibold">HireMate</div>

        <div className="flex gap-3">
          <button
            onClick={() => setView("new")}
            className={`px-4 py-2 rounded-lg ${
              view === "new"
                ? "bg-black text-white"
                : "bg-slate-100"
            }`}
          >
            New
          </button>

          <button
            onClick={() => setView("dashboard")}
            className={`px-4 py-2 rounded-lg ${
              view === "dashboard"
                ? "bg-black text-white"
                : "bg-slate-100"
            }`}
          >
            Dashboard
          </button>
        </div>
      </nav>

      <div className="py-10">
        {view === "new" && <NewApplication />}
        {view === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
}
