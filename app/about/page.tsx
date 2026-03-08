import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <Link href="/" className="text-xl font-bold tracking-tight">SpeedUp Dev</Link>
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/about" className="text-black font-semibold">About</Link>
          <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-8 pt-24 pb-16">
        <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-4">Who we are</p>
        <h1 className="text-5xl font-bold mb-8">Built by skiers.<br />Built for resorts.</h1>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <p className="text-gray-500 leading-relaxed mb-6">
              SpeedUp Dev started on a chairlift. We were frustrated — checking a resort&apos;s website on a slow mobile connection just to find out if a run was open, only to get an outdated PDF from three days ago.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              We&apos;re developers who ski. We knew resorts deserved better tools — and so did their guests. So we built them. Bespoke apps that put live piste status, conditions, and the full resort experience in the palm of every guest&apos;s hand.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Every resort is different. Every app we build is different too. No templates, no shortcuts — just great software, tailored to your mountain.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { label: "Resorts powered", value: "12+" },
              { label: "Runs tracked live", value: "2,400+" },
              { label: "Seasons delivered", value: "5" },
              { label: "Uptime during season", value: "99.9%" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-sky-100 pl-6">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-12">Our principles</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Bespoke, not templated", desc: "Your resort has its own identity. Your app should too. We build from scratch, every time." },
              { title: "Live means live", desc: "Status that&apos;s 3 hours old isn&apos;t status. We build systems that update the moment something changes on the mountain." },
              { title: "Simple for your team", desc: "Your ops team shouldn&apos;t need a developer to open a run. We make the backend as easy as the front end is beautiful." },
            ].map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 px-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SpeedUp Dev. All rights reserved.
      </footer>
    </main>
  );
}
