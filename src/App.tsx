import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Credentials from './components/Credentials';
import TheBook from './components/TheBook';
import SignatureTechnique from './components/SignatureTechnique';
import ServicesPricing from './components/ServicesPricing';
import Education from './components/Education';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { Service } from './types';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleToggleService = (service: Service) => {
    setSelectedServices((prev) => {
      const exists = prev.some((s) => s.id === service.id);
      if (exists) {
        return prev.filter((s) => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleRemoveService = (service: Service) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== service.id));
  };

  const handleClearServices = () => {
    setSelectedServices([]);
  };

  return (
    <div className="relative min-h-screen bg-cream text-ink overflow-x-hidden selection:bg-burgundy selection:text-cream">
      {/* Absolute high-end aesthetic frame overlay (visible only on large viewports for magazine spread aesthetic) */}
      <div className="hidden xl:block fixed inset-6 border border-bronze/20 pointer-events-none z-50"></div>
      
      {/* 1. Header (Fixed Luxury Navigation) */}
      <Header />

      {/* Main Container */}
      <main className="relative z-10">
        
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Credentials Bar */}
        <Credentials />

        {/* 4. The Book Section */}
        <TheBook />

        {/* 5. Signature Technique Section */}
        <SignatureTechnique />

        {/* 6. Services & Pricing Section */}
        <ServicesPricing
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
        />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Gallery Section */}
        <Gallery />

        {/* 9. Book Now (Custom Restyled Square Portal) */}
        <BookingForm
          selectedServices={selectedServices}
          onRemoveService={handleRemoveService}
          onClearServices={handleClearServices}
        />

      </main>

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}
