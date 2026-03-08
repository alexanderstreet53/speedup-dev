import Link from "next/link";

const services = [
  {
    title: "Bespoke Resort App",
    price: "Per resort",
    desc: "A fully custom app built around your mountain — your branding, your map, your guest journey. iOS, Android, and web, all from one build.",
    bullets: ["Custom UI & resort branding", "Interactive piste map", "iOS, Android & web", "Multi-language support"],
    gradient: "from-cyan-400 to-sky-500",
    bg: "from-cyan-950/50 to-slate-900",
    border: "border-cyan-500/20",
    tag: "bg-cyan-400/10 text-cyan-400",
  },
  {
    title: "Live Conditions Platform",
    price: "Included + hosting",
    desc: "The engine behind your app. Real-time run and lift status, snow depth, grooming reports, and weather — updated by your team, live for your guests.",
    bullets: ["Open/closed run & lift status", "Snow depth & grooming reports", "Weather integration", "Push alert notifications"],
    gradient: "from-blue-400 to-indigo-500",
    bg: "from-blue-950/50 to-slate-900",
    border: "border-blue-500/20",
    tag: "bg-blue-400/10 text-blue-400",
  },
  {
    title: "Resort Management Dashboard",
    price: "Included",
    desc: "A clean backend for your ops team. Update run status, post resort news, manage lift schedules, and push emergency alerts — no tech skills needed.",
    bullets: ["One-click run status updates", "News & events publishing", "Lift schedule management", "Emergency alert system"],
    gradient: "from-violet-400 to-purple-500",
    bg: "from-violet-950/50 to-slate-900",
    border: "border-violet-500/20",
    tag: "bg-violet-400/10 text-violet-400",
  },
  {
    title: "Ongoing Support & Evolution",
    price: "Annual retainer",
    desc: "Your mountain changes every season. We stay with you — new features, design updates, integrations, and priority support whenever you need it.",
    bullets: ["Seasonal feature releases", "Priority bug fixes", "New integrations (ticketing, F&B)", "Performance monitoring"],
    gradient: "from-emerald-400 to-teal-500",
    bg: "from-emerald-950/50 to-slate-900",
    border: "border-emerald-500/20",
    tag: "bg-emerald-400/10 text-emerald-400",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
          patter<span className="text-cyan-400">.</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link href="/services" className="text-white font-semibold">Services</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition-colors">
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-8 pt-24 pb-16">
        <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">What we build</p>
        <h1 className="text-6xl font-black mb-6">Services</h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Everything a modern ski resort needs — from a beautifully designed guest app to the live conditions platform powering it behind the scenes.
        </p>
      </section>

      {/* Service cards */}
      <section className="max-w-5xl mx-auto px-8 pb-24 grid gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className={`bg-gradient-to-br ${s.bg} border ${s.border} rounded-3xl p-10 hover:border-opacity-60 transition-all`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${s.tag}`}>
                  {s.price}
                </div>
                <h2 className="text-2xl font-black">{s.title}</h2>
              </div>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} flex-shrink-0`} />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">{s.desc}</p>
            <ul className="grid grid-cols-2 gap-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Patter. All rights reserved.
      </footer>
    </main>
  );
}
