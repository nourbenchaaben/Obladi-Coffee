import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import SocialFeed from './components/SocialFeed';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <GallerySection />
      <SocialFeed />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
