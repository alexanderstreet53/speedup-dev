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

      <section className="max-w-4xl mx-auto px-8 pt-24 pb-16">
        <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-4">Who we are</p>
        <h1 className="text-5xl font-bold mb-8">Built by engineers,<br />for engineers.</h1>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <p className="text-gray-500 leading-relaxed mb-6">
              SpeedUp Dev was born from frustration. We watched talented engineers spend their days on repetitive code reviews, chasing failing CI pipelines, and manually triaging GitHub issues.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              We built a better way. AI agents that handle the grunt work — autonomously, accurately, and fast — so your team can focus on architecture, product, and the hard problems that actually matter.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We're not a tool. We're a team that embeds into your workflow and makes it faster.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { label: "Founded", value: "2024" },
              { label: "Issues resolved", value: "10,000+" },
              { label: "PRs shipped", value: "3,500+" },
              { label: "Teams accelerated", value: "40+" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-indigo-100 pl-6">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-12">Our principles</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: "Zero intervention", desc: "If it needs a human to work, we haven't finished the job." },
              { title: "Quality at speed", desc: "Fast doesn't mean sloppy. Every change is tested and reviewed." },
              { title: "Your stack, your rules", desc: "We adapt to how you work, not the other way around." },
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
