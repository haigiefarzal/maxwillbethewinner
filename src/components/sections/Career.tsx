import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const base = import.meta.env.BASE_URL || "";

const careers = [
  {
    company: "Magnus & Co. Attorneys",
    role: "Legal Intern — Corporate & Litigation Division",
    period: "2021",
    description:
      "Assisted senior partners in corporate dispute analysis and courtroom brief drafting. Observed litigation strategies and handled case documentations for real corporate trials.",
    background: `${base}career1.jpg`,
  },
  {
    company: "Prasetya & Partners Law Firm",
    role: "Junior Associate — Civil & Corporate Law",
    period: "2022 - 2024",
    description:
      "Focused on high-profile civil cases and corporate restructuring. Represented clients in negotiation rooms and helped design legal strategies for multimillion-dollar disputes.",
    background: `${base}career2.jpg`,
  },
  {
    company: "Independent Legal Counsel",
    role: "Litigation Lawyer — Business & Dispute Resolution",
    period: "2025 - Present",
    description:
      "Built a personal legal practice specializing in corporate and litigation law. Known for precise argumentation, strong courtroom presence, and a philosophy rooted in mastering the narrative — not just the argument.",
    background: `${base}career3.jpg`,
  },
];

export const Career = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              color: "#000000",
              textShadow:
                "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4)",
            }}
          >
            Career Journey
          </h2>
          <p
            className="text-xl leading-relaxed"
            style={{
              color: "#f5f1e8",
              textShadow: `
                2px 2px 6px rgba(0, 0, 0, 0.7),
                0 0 8px rgba(230, 222, 207, 0.25)
              `,
            }}
          >
            From early internships to courtroom victories — each step shaped my
            growth not just as a lawyer, but as a storyteller of truth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10">
          {careers.map((career, index) => (
            <motion.div
              key={career.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden p-8 rounded-2xl border border-gray-300/40 shadow-lg transition-all cursor-none hover:border-gray-400/60 bg-white/60 backdrop-blur-sm"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 hover:opacity-40 transition-opacity duration-700"
                style={{ backgroundImage: `url(${career.background})` }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Briefcase size={24} />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      color: "#1a1a1a",
                      textShadow:
                        "0 0 6px rgba(255,255,255,0.6), 0 0 10px rgba(255,255,255,0.3)",
                    }}
                  >
                    {career.role}
                  </h3>
                  <div
                    className="flex items-center gap-2 mb-4"
                    style={{
                      color: "#2e2e2e",
                      textShadow:
                        "0 0 4px rgba(255,255,255,0.5), 0 0 8px rgba(255,255,255,0.2)",
                    }}
                  >
                    <span className="font-medium">{career.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {career.period}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "#2e2e2e",
                      textShadow:
                        "0 0 4px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.2)",
                    }}
                  >
                    {career.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
