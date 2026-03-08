import Link from "next/link";

const runs = [
  { name: "Summit Express", type: "Black", status: "open", condition: "Groomed ✦ Fresh 8cm" },
  { name: "Pine Ridge", type: "Red", status: "open", condition: "Packed powder" },
  { name: "Valley Cruise", type: "Blue", status: "open", condition: "Groomed" },
  { name: "North Face", type: "Black", status: "closed", condition: "Wind hold" },
  { name: "Meadow Run", type: "Green", status: "open", condition: "Groomed" },
  { name: "Couloir X", type: "Black", status: "open", condition: "Off-piste open" },
];

const lifts = [
  { name: "Eagle Gondola", status: "open", wait: "4 min" },
  { name: "Summit Chair 6", status: "open", wait: "2 min" },
  { name: "Beginner T-Bar", status: "open", wait: "1 min" },
  { name: "North Quad", status: "closed", wait: "—" },
];

const typeStyle: Record<string, { bg: string; label: string }> = {
  Green: { bg: "bg-emerald-500", label: "Green" },
  Blue:  { bg: "bg-blue-500",    label: "Blue"  },
  Red:   { bg: "bg-rose-500",    label: "Red"   },
  Black: { bg: "bg-gray-900",    label: "Black" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 bg-slate-900">
        <span className="text-xl md:text-2xl font-black tracking-tight text-white">
          patter<span className="text-cyan-400">.</span>
        </span>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <Link href="/contact" className="bg-cyan-400 text-slate-900 px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-300 transition-colors whitespace-nowrap">
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs md:text-sm text-slate-300 font-medium">Live conditions across 12+ resorts right now</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight text-white mb-6">
            Your mountain.<br />
            Your app.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              Live.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 md:mb-12 leading-relaxed">
            Patter builds bespoke apps for ski resorts — live piste and lift status, real-time conditions, and a digital experience crafted entirely around your mountain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="text-center bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 px-8 py-4 rounded-full text-sm font-bold hover:from-cyan-300 hover:to-sky-400 transition-all shadow-lg shadow-cyan-500/25"
            >
              Build my app →
            </Link>
            <Link
              href="/services"
              className="text-center border border-slate-700 text-slate-300 px-8 py-4 rounded-full text-sm font-semibold hover:border-slate-500 hover:text-white transition-colors"
            >
              See what we build
            </Link>
          </div>
        </div>
      </section>

      {/* Live Dashboard Demo */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-2">Live Demo</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">Ridgeline Resort</h2>
              <p className="text-slate-400 mt-1 text-sm">Updated 30 seconds ago · −8°C · 42cm base</p>
            </div>
            <div className="flex items-center gap-2 bg-green-500/15 border border-green-500/30 rounded-full px-4 py-2 self-start sm:self-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-glow" />
              <span className="text-green-400 text-sm font-bold">Live</span>
            </div>
          </div>

          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Pistes & Runs</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {runs.map((run) => (
              <div
                key={run.name}
                className={`rounded-2xl p-5 border transition-all ${
                  run.status === "open"
                    ? "bg-slate-800 border-slate-700 hover:border-slate-500"
                    : "bg-slate-800/50 border-slate-800 opacity-60"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-3.5 h-3.5 rounded-sm flex-shrink-0 ${typeStyle[run.type].bg}`} />
                    <span className="text-xs text-slate-500 font-medium">{typeStyle[run.type].label}</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    run.status === "open"
                      ? "bg-green-500/15 text-green-400 border border-green-500/20"
                      : "bg-red-500/15 text-red-400 border border-red-500/20"
                  }`}>
                    {run.status === "open" ? "Open" : "Closed"}
                  </span>
                </div>
                <p className="text-white font-bold">{run.name}</p>
                <p className="text-slate-400 text-xs mt-1">{run.condition}</p>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Lifts</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {lifts.map((lift) => (
              <div
                key={lift.name}
                className={`rounded-2xl p-4 md:p-5 border ${
                  lift.status === "open"
                    ? "bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-blue-500/30"
                    : "bg-slate-800/50 border-slate-800 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-2 h-2 rounded-full ${lift.status === "open" ? "bg-blue-400 animate-pulse" : "bg-slate-600"}`} />
                  <span className={`text-xs font-bold ${lift.status === "open" ? "text-blue-300" : "text-slate-500"}`}>
                    {lift.status === "open" ? `${lift.wait} wait` : "Closed"}
                  </span>
                </div>
                <p className="text-white text-sm font-bold">{lift.name}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 text-sm mt-8 text-center">
            This is what your guests see — branded to your resort, on any device, in real time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-white text-center">
          {[
            { value: "12+", label: "Resorts powered" },
            { value: "2,400+", label: "Runs tracked live" },
            { value: "99.9%", label: "Uptime during season" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl md:text-6xl font-black mb-2">{stat.value}</p>
              <p className="text-sky-100 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4">What we build</p>
          <h2 className="text-3xl md:text-4xl font-black mb-12 md:mb-16 text-slate-900">Crafted for the mountain</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Live piste & lift status", desc: "Real-time open/closed status for every run and lift — updated the moment conditions change by your ops team.", gradient: "from-cyan-500 to-sky-500", bg: "bg-cyan-50", border: "border-cyan-100" },
              { title: "Bespoke to your resort", desc: "No templates. Every app is built around your brand, your map, your guest experience — unique every time.", gradient: "from-violet-500 to-purple-600", bg: "bg-violet-50", border: "border-violet-100" },
              { title: "Snow & conditions reporting", desc: "Fresh snow depth, grooming status, visibility, and temperature — beautifully surfaced for your guests.", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-50", border: "border-blue-100" },
              { title: "Resort management dashboard", desc: "Your ops team updates run status, posts alerts, and manages the whole experience — no tech skills needed.", gradient: "from-emerald-500 to-teal-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            ].map((f) => (
              <div key={f.title} className={`${f.bg} border ${f.border} p-8 rounded-3xl`}>
                <div className={`inline-flex w-10 h-10 rounded-2xl bg-gradient-to-br ${f.gradient} mb-5`} />
                <h3 className="font-bold text-xl mb-3 text-slate-900">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to build<br />your app?</h2>
          <p className="text-slate-400 mb-10 text-lg">Tell us about your resort — no templates, just your mountain.</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 px-10 md:px-12 py-4 rounded-full text-sm font-bold hover:from-cyan-300 hover:to-sky-400 transition-all shadow-2xl shadow-cyan-500/30"
          >
            Get in touch →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6 md:px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Patter. All rights reserved.
      </footer>
    </main>
  );
}
