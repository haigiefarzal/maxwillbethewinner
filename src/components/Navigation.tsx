import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = ['Home', 'Profile', 'Cases', 'Career', 'Address', 'Contact'];

export const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'true';

    const link3 = document.createElement('link');
    link3.href =
      'https://fonts.googleapis.com/css2?family=Frijole&family=Playwrite+DE+Grund+Guides&display=swap';
    link3.rel = 'stylesheet';

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Gunakan BASE_URL supaya path tetap valid di GitHub Pages dan localhost
  const base = import.meta.env.BASE_URL;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* === LEFT SIDE: Music Player + Title === */}
          <div className="flex items-center gap-4">
            {/* Mini Music Player */}
            <div
              className="flex items-center gap-3 bg-white/60 px-3 py-2 rounded-2xl shadow-sm border border-gray-200 cursor-none"
              style={{
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Album Art */}
              <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-md">
                <motion.img
                  src={`${base}frankocean.jpg`}
                  alt="Album cover"
                  className="object-cover w-full h-full"
                  animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                  transition={{
                    repeat: isPlaying ? Infinity : 0,
                    duration: 8,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Play / Pause Button */}
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-all cursor-none"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              {/* Song Info */}
              <div className="flex flex-col leading-tight">
                <span
                  className="text-sm font-semibold text-gray-800"
                  style={{ fontFamily: "'Playwrite DE Grund Guides', cursive" }}
                >
                  Self Control
                </span>
                <span className="text-xs text-gray-500">Frank Ocean</span>
              </div>
            </div>

            {/* Title pakai Frijole */}
            <motion.div
              className="text-2xl text-gray-800"
              whileHover={{ scale: 1.05 }}
              style={{
                fontFamily: "'Frijole', cursive",
                letterSpacing: '1px',
                textShadow: `
                  0 0 6px rgba(255,255,255,0.6),
                  0 0 12px rgba(255,255,255,0.3),
                  1px 1px 2px rgba(0,0,0,0.5)
                `,
              }}
            >
              Haigie Farzal's Portfolio
            </motion.div>
          </div>

          {/* === RIGHT SIDE: Navigation === */}
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => onNavigate(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors cursor-none ${
                    activeSection === item.toLowerCase()
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="h-0.5 bg-gray-900 mt-1"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={`${base}selfcontrol.mp3`} loop />
    </motion.nav>
  );
};
