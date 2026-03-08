import Link from "next/link";

const services = [
  {
    title: "Bespoke Resort App",
    price: "Per resort",
    desc: "A fully custom app built around your mountain — your branding, your map, your guest journey. iOS, Android, and web, all from one build.",
    bullets: [
      "Custom UI & resort branding",
      "Interactive piste map",
      "iOS, Android & web",
      "Multi-language support",
    ],
  },
  {
    title: "Live Conditions Platform",
    price: "Included + hosting",
    desc: "The engine behind your app. Real-time run and lift status, snow depth, grooming reports, and weather — updated by your team, live for your guests.",
    bullets: [
      "Open/closed run & lift status",
      "Snow depth & grooming reports",
      "Weather integration",
      "Push alert notifications",
    ],
  },
  {
    title: "Resort Management Dashboard",
    price: "Included",
    desc: "A clean, simple backend for your ops team. Update run status, post resort news, manage lift schedules, and push emergency alerts — no tech skills needed.",
    bullets: [
      "One-click run status updates",
      "News & events publishing",
      "Lift schedule management",
      "Emergency alert system",
    ],
  },
  {
    title: "Ongoing Support & Evolution",
    price: "Annual retainer",
    desc: "Your mountain changes every season. We stay with you — new features, design updates, integrations, and priority support whenever you need it.",
    bullets: [
      "Seasonal feature releases",
      "Priority bug fixes",
      "New integrations (ticketing, F&B, etc.)",
      "Performance monitoring",
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <Link href="/" className="text-xl font-bold tracking-tight">SpeedUp Dev</Link>
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="text-black font-semibold">Services</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-8 pt-24 pb-16">
        <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-4">What we build</p>
        <h1 className="text-5xl font-bold mb-6">Services</h1>
        <p className="text-xl text-gray-500 max-w-2xl">
          Everything a modern ski resort needs — from a beautifully designed guest app to the live conditions platform powering it behind the scenes.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-8 pb-24 grid gap-8">
        {services.map((s) => (
          <div key={s.title} className="border border-gray-100 rounded-xl p-10 hover:border-gray-300 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">{s.title}</h2>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest pt-1">{s.price}</span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">{s.desc}</p>
            <ul className="grid grid-cols-2 gap-3">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-sky-500">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer className="border-t border-gray-100 py-8 px-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SpeedUp Dev. All rights reserved.
      </footer>
    </main>
  );
}
