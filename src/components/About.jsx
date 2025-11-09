import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Python', 'Java', 'Bash', 'Groovy',
    'Prometheus', 'Grafana', 'Splunk', 'ELK', 'CloudWatch', 'MySQL', 'MongoDB', 'Elasticsearch',
    'SageMaker', 'Azure ML', 'Vertex AI', 'KServe', 'Ray', 'MLflow',
    'AppDynamics', 'ServiceNow', 'Helm', 'Argo CD', 'Ansible', 'Chef', 'Puppet'
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About</h2>
            <p className="mt-4 text-slate-700">
              Experienced Site Reliability Engineer/DevOps Engineer with 9 years of expertise across AWS and GCP. I design, automate, and operate reliable cloud platforms with a focus on observability, security, and CI/CD.
            </p>
            <p className="mt-4 text-slate-700">
              I’ve delivered 99.99% availability, shortened MTTR by 30%, and built standardized delivery platforms with Helm and GitOps. From microservices migrations to model serving infrastructure, I ship scalable, cost‑effective solutions.
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
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">Contact</p>
                <a href="mailto:kvenkatasaitarun@gmail.com" className="mt-1 block text-slate-700 hover:underline">kvenkatasaitarun@gmail.com</a>
                <a href="tel:+16083389838" className="block text-slate-700 hover:underline">+1 (608) 338-9838</a>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">Location</p>
                <p className="mt-1 text-slate-700">Austin, TX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
