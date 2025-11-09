import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'A Figma-like canvas for teams with presence, comments, and multiplayer cursors powered by WebSockets.',
    tags: ['React', 'WebSockets', 'Canvas', 'Node.js'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Content Platform',
    description:
      'Generative pipelines, embeddings search, and moderation tooling wrapped in a clean editor experience.',
    tags: ['Next.js', 'FastAPI', 'Postgres', 'OpenAI'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Product Configurator',
    description:
      'Interactive 3D model viewer with material switching, lighting controls, and AR handoff.',
    tags: ['Three.js', 'Spline', 'GLTF', 'Vite'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            A selection of recent work focused on delightful interactions, performance, and maintainability.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <a href={p.link} aria-label="Live" className="rounded-md p-1 hover:bg-slate-100">
                    <ExternalLink size={18} />
                  </a>
                  <a href={p.repo} aria-label="Repo" className="rounded-md p-1 hover:bg-slate-100">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
