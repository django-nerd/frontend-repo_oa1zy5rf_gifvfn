import { motion } from 'framer-motion';

const sampleProjects = [
  {
    id: 1,
    title: 'Neon Commerce',
    year: '2024',
    role: 'Design & Dev',
    summary: '3D product storytelling with silky scroll and high Lighthouse scores.',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
    stack: ['Three.js', 'React', 'GSAP'],
  },
  {
    id: 2,
    title: 'Orbital SaaS',
    year: '2023',
    role: 'Lead Engineer',
    summary: 'Motion-led onboarding and realtime dashboards with WebGL flourishes.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'WebGL', 'Vite'],
  },
  {
    id: 3,
    title: 'Meta Portfolio',
    year: '2022',
    role: 'Creative Dev',
    summary: 'Award-winning microsite with immersive scenes and strong performance.',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1600&auto=format&fit=crop',
    stack: ['Three.js', 'Framer Motion'],
  },
  {
    id: 4,
    title: 'Horizon Labs',
    year: '2024',
    role: 'UX Engineering',
    summary: 'Playful physics interactions and crisp editorial layouts.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'Tailwind', 'Motion'],
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="relative bg-gradient-to-b from-black to-neutral-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/60 max-w-2xl">A few recent projects focusing on craft, motion, and measurable outcomes.</p>
          </div>
          <a href="#contact" className="text-cyan-300 hover:text-cyan-200 underline-offset-4 hover:underline">Get in touch</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={`${p.title} cover`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <span className="text-xs text-white/50">{p.year}</span>
                </div>
                <p className="mt-1 text-sm text-white/70">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">{s}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
