import { Upload, Wand2, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      desc: "Add resume + job description"
    },
    {
      icon: Wand2,
      title: "Generate",
      desc: "AI writes your letter"
    },
    {
      icon: Send,
      title: "Save & Apply",
      desc: "Track in dashboard"
    },
  ];

  return (
    <section className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Three steps to your next role
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="text-center">

              <div className="bg-orange-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-orange-400" />
              </div>

              <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
              <p className="text-gray-400">{s.desc}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
