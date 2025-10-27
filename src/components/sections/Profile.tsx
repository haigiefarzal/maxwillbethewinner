import { motion } from 'framer-motion'
import { School, GraduationCap, Briefcase } from 'lucide-react'

// Helper untuk ambil URL yang benar, sesuai base Vite
const publicPath = (file: string) => `${import.meta.env.BASE_URL}${file}`

const experiences = [
  {
    icon: School,
    title: 'High School — SMAN 62 Jakarta',
    description:
      'A place that sharpened my intellect, leadership, and debating skills with integrity.',
    background: publicPath('62Background.png'),
  },
  {
    icon: GraduationCap,
    title: 'University — Universitas Indonesia',
    description:
      'Majoring in Business and Litigation Law, I built my foundation in corporate and civil legal systems.',
    background: publicPath('UnivBackground.png'),
  },
  {
    icon: Briefcase,
    title: 'Internship — Magnus & Co. Attorneys',
    description:
      'Handled corporate dispute analysis, courtroom brief drafting, and litigation assistance.',
    background: publicPath('MagangBackground.jpg'),
  },
]

export const Profile = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* === Title & Bio === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              color: '#000000',
              textShadow:
                '0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4)',
            }}
          >
            About Me
          </h2>

          <p
            className="text-xl mb-16 max-w-3xl leading-relaxed"
            style={{
              color: '#f5f1e8',
              textShadow: `
                2px 2px 6px rgba(0, 0, 0, 0.7),
                0 0 8px rgba(230, 222, 207, 0.25)
              `,
            }}
          >
            MUHAMAD HAIGIE FARZAL DEVITO <br />
            Born in Anaheim, United States — raised between cultures that shaped
            my precision, resilience, and rational thinking. <br />
            Graduated from SMAN 62 Jakarta, a place that honed not only my
            intellect but also my ability to lead and debate with integrity. <br />
            Later, I pursued my law degree at Universitas Indonesia, Faculty of
            Law (FHUI), where I majored in Business and Litigation Law. <br />
            <br />
            During my studies, I interned at Magnus & Co. Attorneys, one of
            Indonesia’s most prominent legal firms, where I handled corporate
            dispute analysis and courtroom brief drafting. <br />
            After that, I continued my professional path at Prasetya & Partners,
            focusing on high-profile civil cases and corporate restructuring.
          </p>
        </motion.div>

        {/* === Experience Cards === */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-2xl border border-gray-300/50 transition-all cursor-none shadow-lg overflow-hidden bg-white/60 backdrop-blur-sm"
              >
                {/* Background transparan di setiap kartu */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 transition-opacity duration-500 hover:opacity-45"
                  style={{ backgroundImage: `url(${exp.background})` }}
                />

                {/* Konten utama */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center mb-6 shadow-md">
                    <Icon size={28} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{
                      color: '#1a1a1a',
                      textShadow:
                        '0 0 6px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.3)',
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      color: '#2e2e2e',
                      textShadow:
                        '0 0 4px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.2)',
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Profile
