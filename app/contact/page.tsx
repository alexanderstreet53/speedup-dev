import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <Link href="/" className="text-xl font-bold tracking-tight">SpeedUp Dev</Link>
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-black transition-colors">Services</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/contact" className="text-black font-semibold">Contact</Link>
        </div>
      </nav>

      <section className="max-w-2xl mx-auto px-8 pt-24 pb-24">
        <p className="text-sm font-semibold tracking-widest text-indigo-600 uppercase mb-4">Get in touch</p>
        <h1 className="text-5xl font-bold mb-4">Let&apos;s talk.</h1>
        <p className="text-gray-500 mb-16">Tell us about your team and we&apos;ll put together a plan to 10× your output.</p>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                placeholder="Alex"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
                placeholder="Smith"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Work email</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors"
              placeholder="alex@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Team size</label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors text-gray-600">
              <option>1–5 engineers</option>
              <option>6–20 engineers</option>
              <option>21–50 engineers</option>
              <option>50+ engineers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">What&apos;s slowing you down?</label>
            <textarea
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 transition-colors resize-none"
              placeholder="Tell us about your current bottlenecks..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Send message →
          </button>
        </form>
      </section>

      <footer className="border-t border-gray-100 py-8 px-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SpeedUp Dev. All rights reserved.
      </footer>
    </main>
  );
}
