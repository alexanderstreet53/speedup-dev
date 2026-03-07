import Link from "next/link";

const services = [
  {
    title: "AI Issue Resolution",
    price: "Per issue",
    desc: "We connect AI agents to your GitHub repo. They pick up labelled issues, write fixes, run tests, and open PRs automatically.",
    bullets: ["Parallel agent processing", "Full test suite validation", "Auto-PR with description", "Review comment handling"],
  },
  {
    title: "Developer Pipeline Setup",
    price: "One-time",
    desc: "We design and implement your full SDLC pipeline — from issue triage to deployment — optimised for speed and quality.",
    bullets: ["CI/CD configuration", "Automated code review", "Preview deployments", "Quality gates"],
  },
  {
    title: "Ongoing Acceleration",
    price: "Monthly retainer",
    desc: "Continuous improvement of your dev pipeline. We monitor, tune, and expand automation as your team grows.",
    bullets: ["Weekly pipeline reviews", "New automation rollouts", "Agent fine-tuning", "Priority support"],
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

      <section className="max-w-4xl mx-auto px-8 pt-24 pb-16">
        <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-4">What we do</p>
        <h1 className="text-5xl font-bold mb-6">Services</h1>
        <p className="text-xl text-gray-500 max-w-2xl">Everything you need to go from slow to autonomous — without changing how your team works.</p>
      </section>

      <section className="max-w-4xl mx-auto px-8 pb-24 grid gap-8">
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
                  <span className="text-indigo-500">✓</span> {b}
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
