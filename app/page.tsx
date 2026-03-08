import Link from "next/link";

const runs = [
  { name: "Summit Express", type: "Black", status: "open", condition: "Groomed" },
  { name: "Pine Ridge", type: "Red", status: "open", condition: "Packed powder" },
  { name: "Valley Run", type: "Blue", status: "open", condition: "Groomed" },
  { name: "North Face", type: "Black", status: "closed", condition: "Wind hold" },
  { name: "Meadow Cruise", type: "Green", status: "open", condition: "Groomed" },
  { name: "Couloir X", type: "Black", status: "open", condition: "Off-piste" },
];

const typeColor: Record<string, string> = {
  Green: "bg-green-500",
  Blue: "bg-blue-500",
  Red: "bg-red-500",
  Black: "bg-gray-900",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <span className="text-xl font-bold tracking-tight">SpeedUp Dev</span>
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-8 pt-32 pb-24">
        <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-6">Ski App Developers</p>
        <h1 className="text-6xl font-bold leading-tight tracking-tight mb-8">
          Your mountain.<br />Your app.<br />
          <span className="text-sky-500">Live.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
          We build bespoke apps for ski resorts — live piste and lift status, real-time conditions, and a digital experience tailored entirely to your mountain.
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-sky-600 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
          >
            Talk to us →
          </Link>
          <Link
            href="/services"
            className="border border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-sm font-semibold hover:border-gray-400 transition-colors"
          >
            What we build
          </Link>
        </div>
      </section>

      {/* Live Run Status Demo */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm font-semibold tracking-widest text-sky-400 uppercase mb-2">Live Example</p>
              <h2 className="text-3xl font-bold text-white">Run Status — Ridgeline Resort</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Live now
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {runs.map((run) => (
              <div
                key={run.name}
                className={`rounded-xl p-5 flex items-start justify-between ${
                  run.status === "open" ? "bg-slate-800" : "bg-slate-800 opacity-50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-3 h-3 rounded-sm mt-1 flex-shrink-0 ${typeColor[run.type]}`} />
                  <div>
                    <p className="text-white font-semibold text-sm">{run.name}</p>
                    <p className="text-slate-400 text-xs mt-1">{run.condition}</p>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    run.status === "open"
                      ? "bg-green-900 text-green-300"
                      : "bg-red-900 text-red-300"
                  }`}
                >
                  {run.status === "open" ? "Open" : "Closed"}
                </span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6">This is how your guests see it — branded to your resort, on any device.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-3 gap-12">
          {[
            { value: "12+", label: "Resorts powered" },
            { value: "2,400+", label: "Runs tracked live" },
            { value: "99.9%", label: "Uptime during season" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16">Built for mountains</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: "Live piste & lift status", desc: "Real-time open/closed status for every run and lift — updated the moment conditions change, straight from your ops team." },
              { title: "Bespoke to your resort", desc: "No white-label templates. Every app is built around your brand, your map, your guest experience." },
              { title: "Snow & conditions reporting", desc: "Fresh snow depth, grooming status, visibility, and temperature — all surfaced beautifully for your guests." },
              { title: "Resort management dashboard", desc: "Your ops team updates run status, posts alerts, and manages the whole experience from a simple backend dashboard." },
            ].map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to build your app?</h2>
          <p className="text-gray-500 mb-10">Tell us about your resort and we&apos;ll put together a proposal — no templates, just your mountain.</p>
          <Link
            href="/contact"
            className="bg-sky-600 text-white px-10 py-4 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SpeedUp Dev. All rights reserved.
      </footer>
    </main>
  );
}
