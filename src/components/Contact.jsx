import { useState } from 'react';
import { Mail, Send, Github, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Have a project in mind or want to collaborate? Drop a message and I’ll respond within 24–48 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-700">Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
              </div>
              <div>
                <label className="text-sm text-slate-700">Email</label>
                <input type="email" required name="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-700">Message</label>
              <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-800">
              <Send size={16} /> Send message
            </button>
            {status && (
              <p className="mt-3 text-sm text-emerald-600">{status}</p>
            )}
          </form>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-slate-900 p-2 text-white">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-600">Email</p>
                <a href="mailto:kvenkatasaitarun@gmail.com" className="font-medium text-slate-900 hover:underline">
                  kvenkatasaitarun@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-slate-600">Links</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-slate-700">
                <a href="https://github.com/TarunKatragadda/Tests" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                  <Github size={16} /> Tests Repo
                </a>
                <span>•</span>
                <a href="https://github.com/kolapineniSandeep/smart-Kubear" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
                  <ExternalLink size={16} /> Smart-Kubear
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-600">Phone</p>
              <p className="mt-1 text-slate-900">+1 (608) 338-9838</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
