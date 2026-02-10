import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to land your dream job?
          </h2>

          <Link to="/new">
            <button className="bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg">
              Get Started — It's Free →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
