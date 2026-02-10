import { motion } from "framer-motion";

const logos = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Meta",
  "Netflix",
];

export default function LogoCarousel() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-24 overflow-hidden border-t border-white/5">
      <div className="text-center mb-10">
        <p className="text-gray-500 uppercase tracking-widest text-sm">
          STUDENTS ARE APPLYING TO TOP COMPANIES
        </p>
      </div>

      <div className="relative">
        <div className="flex marquee gap-6">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="w-48 h-20 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:border-orange-500/40 transition"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
