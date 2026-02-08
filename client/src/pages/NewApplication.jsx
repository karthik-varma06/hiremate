import { useState } from "react";

export default function NewApplication() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000";

  const generate = async () => {
    setLoading(true);

    const res = await fetch(`${API}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resumeText, jobDescription }),
    });

    const data = await res.json();
    setCoverLetter(data.coverLetter);
    setSuggestions(data.suggestions);

    setLoading(false);
  };

  const save = async () => {
    await fetch(`${API}/api/applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        role,
        resumeText,
        jobDescription,
        coverLetter,
        suggestions,
      }),
    });

    alert("Saved");
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <h1 className="text-2xl font-semibold mb-6">
          Generate Job Application
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border rounded-lg p-3"
          />
          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border rounded-lg p-3"
          />
        </div>

        <textarea
          placeholder="Paste Resume"
          rows={8}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <textarea
          placeholder="Paste Job Description"
          rows={8}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button
          onClick={generate}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {coverLetter && (
          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Cover Letter</h2>
              <textarea
                rows={10}
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <h2 className="font-semibold mb-2">Suggestions</h2>
              <textarea
                rows={6}
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button
              onClick={save}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Save Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
