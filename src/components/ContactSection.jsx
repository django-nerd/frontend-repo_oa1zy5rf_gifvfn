import { useState } from 'react';
import { Mail, Send, Linkedin, Github, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      alert('Please enter a valid email.');
      return;
    }
    setStatus('loading');

    // Simulate async submit; ready to connect to a backend
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight flex items-center gap-2">
            <Mail className="h-7 w-7 text-cyan-400" /> Let's build something great
          </h2>
          <p className="mt-2 text-white/70">Drop a note with what you need, timeline, and budget range.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Jane Smith"/>
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="jane@studio.com"/>
              </Field>
            </div>
            <Field label="Budget">
              <select value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})} className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400">
                <option value="">Select a range</option>
                <option>Under $5k</option>
                <option>$5k – $15k</option>
                <option>$15k – $40k</option>
                <option>$40k+</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea required rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-md bg-white/10 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="A few lines about the project..."/>
            </Field>
            <button disabled={status==='loading'} className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 text-black font-semibold px-5 py-3 hover:brightness-95 disabled:opacity-60">
              {status === 'success' ? <CheckCircle2 className="h-4 w-4"/> : <Send className="h-4 w-4" />} {status === 'success' ? 'Sent! I will reply soon.' : status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </form>

          <aside className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <h3 className="font-semibold">Other ways</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><a className="hover:text-white" href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></li>
              <li className="flex items-center gap-3 mt-3">
                <a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10" href="#"><Github className="h-4 w-4"/> GitHub</a>
                <a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10" href="#"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="text-white/70">{label}</span>
      {children}
    </label>
  );
}
