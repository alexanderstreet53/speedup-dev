'use client';

import Link from "next/link";
import { useState, FormEvent } from "react";

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName:  fd.get('firstName'),
      lastName:   fd.get('lastName'),
      email:      fd.get('email'),
      resortName: fd.get('resortName'),
      pisteCount: fd.get('pisteCount'),
      message:    fd.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }
      setState('success');
    } catch (err) {
      setState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

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
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <Link href="/contact" className="bg-cyan-400 text-slate-900 px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-cyan-300 transition-colors whitespace-nowrap">
            Get in touch
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-24">
          <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">Get in touch</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Tell us about<br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              your resort.
            </span>
          </h1>
          <p className="text-slate-400 mb-10 md:mb-12 text-lg leading-relaxed">
            Every app starts with a conversation. Tell us about your mountain, your guests, and what you need — we&apos;ll come back with a plan built around you.
          </p>

          {/* Success state */}
          {state === 'success' ? (
            <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-3xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-2xl">
                ✓
              </div>
              <h2 className="text-2xl font-black mb-3">Message sent!</h2>
              <p className="text-slate-400 leading-relaxed">
                Thanks for reaching out. We&apos;ll come back to you with a tailored proposal for your resort.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-slate-300">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-slate-300">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                  placeholder="alex@yourresort.com"
                />
              </div>
              <div>
                <label htmlFor="resortName" className="block text-sm font-semibold mb-2 text-slate-300">Resort name</label>
                <input
                  id="resortName"
                  name="resortName"
                  type="text"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-500"
                  placeholder="e.g. Ridgeline Resort"
                />
              </div>
              <div>
                <label htmlFor="pisteCount" className="block text-sm font-semibold mb-2 text-slate-300">Number of pistes / runs</label>
                <select
                  id="pisteCount"
                  name="pisteCount"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-slate-300"
                >
                  <option>Under 20</option>
                  <option>20–50</option>
                  <option>50–100</option>
                  <option>100+</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">What does your resort need?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none text-white placeholder:text-slate-500"
                  placeholder="Tell us what you currently have and what you'd like to improve..."
                />
              </div>

              {state === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 py-4 rounded-xl text-sm font-bold hover:from-cyan-300 hover:to-sky-400 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === 'submitting' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 md:px-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Patter. All rights reserved.
      </footer>
    </main>
  );
}
