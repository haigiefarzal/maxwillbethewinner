import { useState, useEffect } from 'react';

// Components
import { CustomCursor } from './components/CustomCursor';
import { RetroBackground } from './components/RetroBackground';
import { Navigation } from './components/Navigation';

// Section Components
import { Home } from './components/sections/Home';
import { Profile } from './components/sections/Profile';
import { Cases } from './components/sections/Cases';
import { Career } from './components/sections/Career';
import { Address } from './components/sections/Address';
import { Contact } from './components/sections/Contact';

function App() {
  // State untuk melacak bagian aktif (section)
  const [activeSection, setActiveSection] = useState('home');

  // Fungsi navigasi ke section tertentu
  const handleNavigate = (section: string) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Efek: deteksi scroll untuk update activeSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'cases', 'career', 'address', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Render utama
  return (
    <div className="cursor-none">
      {/* Custom Cursor dan Background */}
      <CustomCursor />
      <RetroBackground />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Sections */}
      <div id="home">
        <Home onNavigate={handleNavigate} />
      </div>

      <div id="profile">
        <Profile />
      </div>

      <div id="cases">
        <Cases />
      </div>

      <div id="career">
        <Career />
      </div>

      <div id="address">
        <Address />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
