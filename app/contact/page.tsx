import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <Link href="/" className="text-2xl font-black tracking-tight text-white">
          patter<span className="text-cyan-400">.</span>
        </Link>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="text-white font-semibold">Contact</Link>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-8 pt-24 pb-24">
          <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">Get in touch</p>
          <h1 className="text-6xl font-black mb-4">
            Tell us about<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              your resort.
            </span>
          </h1>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed">
            Every app starts with a conversation. Tell us about your mountain, your guests, and what you need — we&apos;ll come back with a plan built around you.
          </p>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">First name</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                  placeholder="Alex"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">Last name</label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
              <input
                type="email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                placeholder="alex@yourresort.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">Resort name</label>
              <input
                type="text"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                placeholder="e.g. Ridgeline Resort"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">Number of pistes / runs</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-slate-300">
                <option>Under 20</option>
                <option>20–50</option>
                <option>50–100</option>
                <option>100+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-300">What does your resort need?</label>
              <textarea
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none text-white placeholder:text-slate-500"
                placeholder="Tell us what you currently have and what you'd like to improve..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 py-4 rounded-xl text-sm font-bold hover:from-cyan-300 hover:to-sky-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              Send message →
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Patter. All rights reserved.
      </footer>
    </main>
  );
}
