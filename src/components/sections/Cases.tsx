import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// ✅ gunakan import.meta.env.BASE_URL untuk path gambar yang fleksibel
const base = import.meta.env.BASE_URL || '';

const projects = [
  {
    title: 'Corporate Fraud Settlement, Jakarta High Court',
    category: '2021 — Corporate Law',
    description:
      'Successfully defended a multinational client in a $2.4M fraud allegation; resulted in full acquittal and compensation granted.',
    background: `${base}case2021background.jpg`,
  },
  {
    title: 'Civil Property Dispute, Bandung District Court',
    category: '2022 — Civil Litigation',
    description:
      'Represented an international real estate investor; secured 95% asset ownership rights through strategic evidential submission.',
    background: `${base}case2022background.jpg`,
  },
  {
    title: 'Intellectual Property Case, Surabaya',
    category: '2023 — Intellectual Property',
    description:
      'Protected a startup’s trademark from unlawful replication; won exclusive IP rights registration under client’s name.',
    background: `${base}case2021background.jpg`,
  },
  {
    title: 'Employment Law Conflict, Central Jakarta Court',
    category: '2024 — Employment Law',
    description:
      'Negotiated a dispute between a foreign company and its employees; reached a landmark settlement without litigation escalation.',
    background: `${base}case2022background.jpg`,
  },
];

export const Cases = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center md:text-left"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              color: '#000000',
              textShadow:
                '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4)',
            }}
          >
            Legal Cases
          </h2>
          <p
            className="text-xl max-w-3xl leading-relaxed"
            style={{
              color: '#f5f1e8',
              textShadow: `
                2px 2px 6px rgba(0, 0, 0, 0.7),
                0 0 8px rgba(230, 222, 207, 0.25)
              `,
            }}
          >
            A collection of legal cases that reflect my dedication to advocacy,
            precision, and achieving impactful outcomes for clients across
            diverse areas of law.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl border border-gray-300/40 transition-all cursor-none shadow-lg overflow-hidden bg-white/60 backdrop-blur-sm"
            >
              {/* Background foto lembut di tiap card */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 transition-opacity duration-500 hover:opacity-45"
                style={{ backgroundImage: `url(${project.background})` }}
              />

              {/* Isi teks */}
              <div className="relative z-10">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} className="text-gray-800" />
                </div>
                <span
                  className="text-sm font-medium mb-2 block"
                  style={{
                    color: '#1a1a1a',
                    textShadow:
                      '0 0 6px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.3)',
                  }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{
                    color: '#000000',
                    textShadow:
                      '0 0 10px rgba(255,255,255,0.7), 0 0 25px rgba(255,255,255,0.4)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: '#2e2e2e',
                    textShadow:
                      '0 0 4px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.2)',
                  }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
