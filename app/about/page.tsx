import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-slate-800">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-white">
          patter<span className="text-cyan-400">.</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="text-white font-semibold">About</Link>
          </div>
          <Link href="/contact" className="bg-cyan-400 text-slate-900 px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-300 transition-colors whitespace-nowrap">
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20">
          <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">Who we are</p>
          <h1 className="text-4xl md:text-6xl font-black mb-10 md:mb-12 leading-tight">
            Built by skiers.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Built for resorts.
            </span>
          </h1>

          {/* Story + Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                Patter started on a chairlift. We were frustrated — checking a resort&apos;s website on a slow connection just to find out if a run was open, only to find an outdated PDF from three days ago.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                We&apos;re developers who ski. We knew resorts deserved better tools — and so did their guests. So we built them. Bespoke apps that put live piste status, conditions, and the full resort experience in the palm of every guest&apos;s hand.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Every resort is different. Every app we build is different too. No templates, no shortcuts — just great software, tailored to your mountain.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Resorts powered", value: "12+", color: "from-cyan-400 to-sky-500" },
                { label: "Runs tracked live", value: "2,400+", color: "from-blue-400 to-indigo-500" },
                { label: "Seasons delivered", value: "5", color: "from-violet-400 to-purple-500" },
                { label: "Uptime during season", value: "99.9%", color: "from-emerald-400 to-teal-500" },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                  <p className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-20 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-black mb-10 md:mb-12">Our principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Bespoke, not templated",
                desc: "Your resort has its own identity. Your app should too. We build from scratch, every time.",
                color: "from-cyan-400 to-sky-500",
                bg: "bg-cyan-400/5 border-cyan-500/20",
              },
              {
                title: "Live means live",
                desc: "Status that's 3 hours old isn't status. We build systems that update the moment something changes on the mountain.",
                color: "from-blue-400 to-indigo-500",
                bg: "bg-blue-400/5 border-blue-500/20",
              },
              {
                title: "Simple for your team",
                desc: "Your ops team shouldn't need a developer to open a run. We make the backend as easy as the front end is beautiful.",
                color: "from-violet-400 to-purple-500",
                bg: "bg-violet-400/5 border-violet-500/20",
              },
            ].map((p) => (
              <div key={p.title} className={`rounded-3xl p-7 border ${p.bg}`}>
                <div className={`w-8 h-1.5 rounded-full bg-gradient-to-r ${p.color} mb-5`} />
                <h3 className="font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 md:px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Patter. All rights reserved.
      </footer>
    </main>
  );
}
