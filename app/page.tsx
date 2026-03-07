import Link from "next/link";

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
      <section className="max-w-4xl mx-auto px-8 pt-32 pb-24">
        <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-6">Developer Acceleration</p>
        <h1 className="text-6xl font-bold leading-tight tracking-tight mb-8">
          Ship faster.<br />Break nothing.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-12 leading-relaxed">
          We embed AI-powered development pipelines into your team — automated code, tests, reviews, and deployments. Your engineers focus on what matters.
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Get started →
          </Link>
          <Link
            href="/services"
            className="border border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-sm font-semibold hover:border-gray-400 transition-colors"
          >
            See what we do
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-8 grid grid-cols-3 gap-12">
          {[
            { value: "10×", label: "Faster issue resolution" },
            { value: "80%", label: "Reduction in review time" },
            { value: "0", label: "Intervention required" },
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
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-16">How it works</h2>
          <div className="grid grid-cols-2 gap-8">
            {[
              { title: "Autonomous coding agents", desc: "AI agents pick up GitHub issues, write the fix, and open a PR — automatically." },
              { title: "Parallel PR reviews", desc: "Every PR is reviewed instantly. Review comments are addressed before you've finished your coffee." },
              { title: "Full test coverage", desc: "Agents run your test suite, catch regressions, and fix them before merge." },
              { title: "CI/CD from day one", desc: "Automatic preview deployments on every PR. Merge with confidence." },
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
          <h2 className="text-4xl font-bold mb-6">Ready to accelerate?</h2>
          <p className="text-gray-500 mb-10">Let's talk about your team and how we can 10× your output.</p>
          <Link
            href="/contact"
            className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Book a call
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
