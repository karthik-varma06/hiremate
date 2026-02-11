import { useState } from "react";
import Navbar from "../components/landing/Navbar";
import axios from "axios";

export default function NewApplication() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [file, setFile] = useState(null);
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [generated, setGenerated] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // GENERATE
  // =========================
  const generateLetter = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("company", company);
      formData.append("role", role);
      formData.append("jobDescription", jobDescription);

      if (file) {
        formData.append("resumeFile", file);
      } else {
        formData.append("resume", resume);
      }

      const res = await axios.post(
        "https://hiremate-api.onrender.com/api/generate",
        formData,
        { timeout: 60000 }
      );

      setGenerated(res.data.coverLetter);
      setSuggestions(res.data.suggestions || []);
    } catch (err) {
      console.log(err);
      alert("Generation failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // SAVE
  // =========================
  const saveApplication = async () => {
    try {
      await axios.post(
        "https://hiremate-api.onrender.com/api/applications",
        {
          company,
          role,
          resumeText: resume,
          jobDescription,
          coverLetter: generated,
          suggestions,
        }
      );

      alert("Saved successfully!");
    } catch (err) {
      console.log(err);
      alert("Save failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-28 bg-gradient-to-b from-[#0b1220] to-[#0a0f1a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">New Application</h1>

          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full mb-4 bg-[#0f172a] border border-white/10 rounded-xl p-4"
          />

          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mb-4 bg-[#0f172a] border border-white/10 rounded-xl p-4"
          />

          {/* FILE UPLOAD */}
          <input
            type="file"
            accept=".pdf,.txt"
            onChange={(e) => {
              const selected = e.target.files[0];
              if (!selected) return;

              setFile(selected);

              if (selected.type === "text/plain") {
                const reader = new FileReader();
                reader.onload = (e) => setResume(e.target.result);
                reader.readAsText(selected);
              }
            }}
            className="mb-4 text-white"
          />

          <textarea
            placeholder="Paste resume"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="w-full mb-4 h-40 bg-[#0f172a] border border-white/10 rounded-xl p-4"
          />

          <textarea
            placeholder="Job description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full mb-6 h-40 bg-[#0f172a] border border-white/10 rounded-xl p-4"
          />

          <button
            onClick={generateLetter}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          {generated && (
            <div className="mt-10">
              <h2 className="text-xl mb-3">Preview</h2>

              <textarea
                value={generated}
                onChange={(e) => setGenerated(e.target.value)}
                className="w-full h-64 bg-[#0f172a] border border-white/10 rounded-xl p-5 text-gray-200"
              />

              {suggestions.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg mb-2 font-semibold text-orange-400">
                    Suggestions
                  </h3>

                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    {suggestions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={saveApplication}
                className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
              >
                Save Application
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
