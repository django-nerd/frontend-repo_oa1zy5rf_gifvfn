import { useEffect, useState } from 'react';
import { Rocket, Mail, Moon, Sun } from 'lucide-react';

export default function Navbar({ darkMode, onToggleTheme }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20 bg-black/10 dark:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-white">
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="tracking-tight">Your Name</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1"><Mail className="h-4 w-4" /> Contact</a>
            <button aria-label="Toggle theme" onClick={onToggleTheme} className="rounded-md px-2 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <div className="md:hidden">
            <button aria-label="Toggle theme" onClick={onToggleTheme} className="rounded-md p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>
      <div className="relative h-0.5 w-full bg-white/10">
        <div className="absolute left-0 top-0 h-0.5 bg-cyan-400 transition-[width]" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}
