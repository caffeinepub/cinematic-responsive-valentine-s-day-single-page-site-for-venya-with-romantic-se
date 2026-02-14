import { useEffect } from 'react';
import HeroSection from './valentine/sections/HeroSection';
import StorySections from './valentine/sections/StorySections';
import ClosingSection from './valentine/sections/ClosingSection';
import FinaleSection from './valentine/sections/FinaleSection';
import PhotoGallerySection from './valentine/sections/PhotoGallerySection';
import DaysSinceCounter from './valentine/components/DaysSinceCounter';
import SurpriseTrigger from './valentine/components/SurpriseTrigger';
import MusicToggle from './valentine/components/MusicToggle';
import AmbientHearts from './valentine/components/AmbientHearts';

function App() {
  useEffect(() => {
    // Preload fonts
    document.fonts.ready.then(() => {
      console.log('Fonts loaded');
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient floating hearts across entire page */}
      <AmbientHearts />
      
      {/* Music toggle - fixed position */}
      <MusicToggle />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <DaysSinceCounter />
        <StorySections />
        <PhotoGallerySection />
        <ClosingSection />
        <FinaleSection />
        
        {/* Surprise trigger positioned near bottom */}
        <div className="py-12 flex justify-center">
          <SurpriseTrigger />
        </div>
      </main>
    </div>
  );
}

export default App;
