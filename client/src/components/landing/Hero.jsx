import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const text = "AI that writes your job applications";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-28 bg-gradient-to-b from-[#0b1220] to-[#09101a]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="inline-block mb-6 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm">
          Built for students & early-career seekers
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 min-h-[80px]">
          {display}
          <span className="text-orange-500 animate-pulse">|</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Generate tailored cover letters, upload resumes, and track applications.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <Link to="/new">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30">
              Start Applying <ArrowRight className="inline ml-1 w-4"/>
            </button>
          </Link>

          <a href="#demo">
            <button className="border border-white/20 px-8 py-3 rounded-xl hover:bg-white/5">
              <Play className="inline w-4 mr-1"/> See Demo
            </button>
          </a>
        </div>

        {/* stats */}
        <div className="flex justify-center gap-12 text-gray-400">
          <div>
            <div className="text-2xl font-bold text-white">10K+</div>
            Applications
          </div>
          <div>
            <div className="text-2xl font-bold text-white">95%</div>
            Match Rate
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Free</div>
            For Students
          </div>
        </div>
      </div>
    </section>
  );
}
