import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'FastAPI',
    'MongoDB',
    'Postgres',
    'Tailwind',
    'Framer Motion',
    'Testing',
    'CI/CD',
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About</h2>
            <p className="mt-4 text-slate-600">
              I’m a product-minded engineer who blends design sensibility with solid engineering
              practices. I care about accessible interfaces, elegant architecture, and collaborative
              teamwork.
            </p>
            <p className="mt-4 text-slate-600">
              Beyond shipping features, I love building systems that make teams faster: component
              libraries, CI pipelines, and docs that reduce friction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Core Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
