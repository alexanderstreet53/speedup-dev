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
        <p className="text-sm font-semibold tracking-widest text-sky-600 uppercase mb-4">Get in touch</p>
        <h1 className="text-5xl font-bold mb-4">Tell us about<br />your resort.</h1>
        <p className="text-gray-500 mb-16">
          Every app starts with a conversation. Tell us about your mountain, your guests, and what you need — we&apos;ll come back with a plan built around you.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">First name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                placeholder="Alex"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                placeholder="Smith"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors"
              placeholder="alex@yourresort.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Resort name</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors"
              placeholder="e.g. Ridgeline Resort"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Number of pistes / runs</label>
            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors text-gray-600">
              <option>Under 20</option>
              <option>20–50</option>
              <option>50–100</option>
              <option>100+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">What does your resort need?</label>
            <textarea
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
              placeholder="Tell us what you currently have and what you'd like to improve..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-4 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors"
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
