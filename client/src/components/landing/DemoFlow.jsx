import { Link } from "react-router-dom";

export default function DemoFlow() {
  return (
    <section id="demo" className="py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-8">Try it yourself</h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-gray-400 mb-6">
            Paste job description + resume → Generate → Save.
          </p>

          <Link to="/new">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold">
              Go to Generator
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
