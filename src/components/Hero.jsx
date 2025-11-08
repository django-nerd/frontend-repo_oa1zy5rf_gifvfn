import { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function useAccentFromImage(src) {
  const [color, setColor] = useState('#22d3ee');
  useEffect(() => {
    // Lightweight dominant color approximation using canvas average
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const w = (canvas.width = 24);
        const h = (canvas.height = 24);
        ctx.drawImage(img, 0, 0, w, h);
        const data = ctx.getImageData(0, 0, w, h).data;
        let r = 0, g = 0, b = 0;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }
        const n = data.length / 4;
        r = Math.round(r / n);
        g = Math.round(g / n);
        b = Math.round(b / n);
        setColor(`rgb(${r}, ${g}, ${b})`);
      } catch (e) {
        // ignore failures, keep default
      }
    };
  }, [src]);
  return color;
}

export default function Hero({ onAccent }) {
  const poster = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop';
  const accent = useAccentFromImage(poster);

  useEffect(() => {
    onAccent?.(accent);
  }, [accent, onAccent]);

  const prefersReduced = useMemo(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {!prefersReduced ? (
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <img src={poster} alt="Futuristic abstract hero" className="w-full h-full object-cover" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          style={{ textShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
        >
          Building immersive, high-performance experiences.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-xl text-white/80"
        >
          I design and engineer premium product websites with cinematic motion and world-class performance.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CTAButton href="#work" label="View Work" accent={accent} />
          <CTAButton href="#contact" label="Contact" variant="secondary" accent={accent} />
        </div>
      </div>
    </section>
  );
}

function CTAButton({ href, label, variant = 'primary', accent = '#22d3ee' }) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-150 will-change-transform ${
        variant === 'primary' ? 'text-black' : 'text-white border border-white/20'
      }`}
      style={variant === 'primary' ? { background: accent } : {}}
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `0 0 0 8px ${accent}20 inset` }} />
      <span className="pointer-events-none absolute -inset-8 rounded-full opacity-0 group-active:opacity-100 transition-opacity" style={{ boxShadow: `0 0 0 120px ${accent}30 inset` }} />
    </a>
  );
}
