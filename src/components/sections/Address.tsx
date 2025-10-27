import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const base = import.meta.env.BASE_URL || "";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["New York City, NY", "United States"],
    link: "https://share.google/0jUrlmscDb5Zmru3q",
    background: `${base}gmapsbackground.png`,
  },
  {
    icon: Phone,
    title: "Contact",
    details: ["+62 812-8717-9950", "haigiedevito@lawfirm.com"],
    link: "https://wa.me/6281234567890",
    background: `${base}botaksenku.png`,
  },
  {
    icon: Clock,
    title: "Availability",
    details: [
      "Law Offices of David S. Smith, LLC",
      "Smith & King, LLC",
    ],
    link: "https://share.google/0jUrlmscDb5Zmru3q",
    background: `${base}gmapsbackground.png`,
  },
];

export const Address = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Title — shadow tetap sama */}
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
            Get In Touch
          </h2>
          <p
            className="text-xl leading-relaxed max-w-3xl"
            style={{
              color: "#f5f1e8",
              textShadow:
                "2px 2px 6px rgba(0, 0, 0, 0.7), 0 0 8px rgba(230, 222, 207, 0.25)",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              href={info.link}
              key={info.title}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-gray-300 transition-all text-center cursor-pointer overflow-hidden"
            >
              {/* Background image dengan opacity */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-500 hover:opacity-45"
                style={{ backgroundImage: `url(${info.background})` }}
              ></div>

              {/* Konten utama */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center mb-6 mx-auto shadow-md">
                  <info.icon size={28} />
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: "#000000",
                    textShadow:
                      "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.4)",
                  }}
                >
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p
                    key={i}
                    style={{
                      color: "#2e2e2e",
                      textShadow:
                        "0 0 4px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.2)",
                    }}
                    className="mb-1"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Address;
