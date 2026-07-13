import { motion } from 'motion/react';
import { IMAGES } from '../types';
import { ArrowDown, Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Editorial Grid Backing */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none opacity-20">
        <div className="col-span-4 border-r border-bronze/20 h-full"></div>
        <div className="col-span-4 border-r border-bronze/20 h-full"></div>
        <div className="col-span-4 h-full"></div>
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-blush/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero Layout Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Visual Column (Portrait) - Left-aligned for balanced asymmetry */}
          <div className="col-span-1 lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[3/4] overflow-hidden bg-champagne border border-bronze/30 p-3 shadow-xl"
            >
              {/* Thin burgundy border instead of gold on key image for elegant contrast */}
              <div className="absolute inset-0 border border-burgundy/30 m-6 pointer-events-none z-10"></div>
              <img
                src={IMAGES.heroBomondCover}
                alt="Oksana Nykolyak - Miami's Russian Manicure Authority - Bomond VIP Digital Cover"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-1000 ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm p-4 border-t border-burgundy/30 z-20 shadow-sm">
                <p className="font-serif text-lg text-burgundy tracking-wide font-semibold">Oksana Nykolyak</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-antique font-semibold">Founder & Elite Tech</p>
              </div>
            </motion.div>
          </div>

          {/* Text Typography Column - Right-aligned */}
          <div className="col-span-1 lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center text-left lg:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-burgundy/60"></span>
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy font-bold">
                  ESTABLISHED AUTHORITY
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-ink leading-[1.05] tracking-tight mb-6">
                Miami's Signature <br />
                <span className="italic text-antique font-normal">Russian Manicure</span> <br />
                Authority
              </h1>

              <p className="font-sans text-sm md:text-base text-ink/80 tracking-wide max-w-xl leading-relaxed mb-4">
                Oksana Nykolyak delivers high-precision Ukrainian & Russian hardware techniques that transform nail architecture. Unparalleled durability, immaculate cuticle restoration, and surgical perfection.
              </p>

              <div className="font-serif text-lg text-antique italic tracking-widest mb-10 flex flex-wrap gap-x-4 gap-y-1 font-light border-l-2 border-bronze/30 pl-4">
                <span>Founder & CEO</span>
                <span className="text-bronze/40">·</span>
                <span>Published Author</span>
                <span className="text-bronze/40">·</span>
                <span>Industry Judge</span>
                <span className="text-bronze/40">·</span>
                <span>Educator</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Book Seat CTA: Solid burgundy fill, cream text */}
                <button
                  onClick={scrollToBooking}
                  className="px-8 py-4 bg-burgundy text-cream font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-wine transition-all duration-300 shadow-lg shadow-burgundy/10 flex items-center justify-center gap-3 group"
                >
                  <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  Book Your Seat Now
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('technique');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 border border-bronze/40 hover:border-burgundy text-ink/80 hover:text-burgundy font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Explore Technique
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-bronze font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4 text-burgundy" />
        </motion.div>
      </div>
    </section>
  );
}
