export default function Landing({ onEnter }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAV */}
      <nav className="px-8 py-6 flex justify-between items-center">
        <div className="font-semibold text-lg">HireMate</div>

        <button
          onClick={onEnter}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Open App
        </button>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-8 pt-20 pb-24 text-center">
        <h1 className="text-5xl font-semibold leading-tight mb-6">
          Land interviews faster
          <br />
          with HireMate
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Your AI-powered workspace to generate cover letters and track job
          applications in one place.
        </p>

        <button
          onClick={onEnter}
          className="bg-black text-white px-8 py-4 rounded-xl text-lg"
        >
          Start Applying →
        </button>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-8 pb-24 grid grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-2">HireMate</h3>
          <p className="text-gray-600">
            Generate tailored cover letters instantly for each role.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-2">Track Applications</h3>
          <p className="text-gray-600">
            Save and manage all your job applications in one place.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold mb-2">Student Friendly</h3>
          <p className="text-gray-600">
            Built for students and interns applying to multiple roles.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center pb-10 text-gray-500 text-sm">
        HireMate — built for students & job seekers
      </footer>
    </div>
  );
}
