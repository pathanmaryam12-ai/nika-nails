import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md py-4 border-b border-bronze/20 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group text-left focus:outline-none"
        >
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-widest text-burgundy transition-colors duration-300 group-hover:text-wine">
            NIKA NAILS
          </span>
          <span className="block font-sans text-[10px] tracking-[0.3em] text-bronze uppercase -mt-1 font-medium">
            Oksana Nykolyak · Miami
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <button
            onClick={() => scrollToSection('the-book')}
            className="font-sans text-xs uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors duration-300 font-semibold"
          >
            The Book
          </button>
          <button
            onClick={() => scrollToSection('technique')}
            className="font-sans text-xs uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors duration-300 font-semibold"
          >
            Technique
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="font-sans text-xs uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors duration-300 font-semibold"
          >
            Services & Pricing
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="font-sans text-xs uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors duration-300 font-semibold"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="font-sans text-xs uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors duration-300 font-semibold"
          >
            Gallery
          </button>
        </nav>

        {/* CTA Button - Solid Burgundy fill with cream text */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('booking')}
            className="relative px-6 py-2.5 bg-burgundy text-cream font-sans font-semibold text-xs uppercase tracking-[0.15em] rounded-none hover:bg-wine transition-all duration-300 shadow-md shadow-burgundy/10 focus:outline-none focus:ring-1 focus:ring-burgundy/50 flex items-center gap-2 group"
          >
            <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
            Book Appt
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-ink hover:text-burgundy transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-cream border-l border-bronze/30 z-50 p-8 transform transition-transform duration-500 ease-in-out lg:hidden shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="font-serif text-xl tracking-wider text-burgundy">NIKA NAILS</span>
            <span className="block text-[8px] tracking-[0.2em] text-bronze">MIAMI</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 text-ink hover:text-burgundy"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          <button
            onClick={() => scrollToSection('the-book')}
            className="text-left font-sans text-sm uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors py-2 font-semibold"
          >
            The Book
          </button>
          <button
            onClick={() => scrollToSection('technique')}
            className="text-left font-sans text-sm uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors py-2 font-semibold"
          >
            Technique
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-left font-sans text-sm uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors py-2 font-semibold"
          >
            Services & Pricing
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-left font-sans text-sm uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors py-2 font-semibold"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-left font-sans text-sm uppercase tracking-[0.2em] text-ink/80 hover:text-burgundy transition-colors py-2 font-semibold"
          >
            Gallery
          </button>
          <div className="pt-6 border-t border-bronze/20">
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full py-4 bg-burgundy text-cream font-sans font-semibold text-xs uppercase tracking-[0.2em] rounded-none hover:bg-wine transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
