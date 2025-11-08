import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import ContactSection from './components/ContactSection';

function App() {
  const [dark, setDark] = useState(true);
  const [accent, setAccent] = useState('#22d3ee');

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
    root.style.setProperty('--accent', accent);
  }, [dark, accent]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-400/30">
      <Navbar darkMode={dark} onToggleTheme={() => setDark((d)=>!d)} />
      <main>
        <Hero onAccent={(c)=>setAccent(c)} />
        <About />
        <WorkGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-neutral-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I’m a creative developer crafting futuristic, minimal interfaces with premium WebGL motion. My work blends product thinking with cinematic experience design—always performance-first.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="rounded-md border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">Download CV</a>
            <a href="#work" className="rounded-md border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">View projects</a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {[
            'WebGL + Three patterns',
            'Accessible motion',
            'Design systems',
            'Perf budgets ≥ 95',
            'Scroll choreography',
            'Story-driven product',
          ].map((item) => (
            <li key={item} className="rounded-xl bg-white/5 border border-white/10 p-4 text-sm text-white/80">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white/70 py-10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Your Name</p>
        <div className="text-sm">Built with care — dark by default</div>
      </div>
    </footer>
  );
}

export default App;
