export default function FeatureCards() {
  const features = [
    {
      title: "AI Cover Letter Generation",
      desc: "Generate tailored letters instantly."
    },
    {
      title: "Track Applications",
      desc: "Manage all your job apps."
    },
    {
      title: "Resume Upload",
      desc: "Upload once, reuse everywhere."
    }
  ];

  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Everything you need to land the job
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((f,i)=>(
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-1 transition">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
