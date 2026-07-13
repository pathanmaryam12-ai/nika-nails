import { motion } from 'motion/react';
import { IMAGES } from '../types';
import { ShoppingCart, CheckCircle, FileText } from 'lucide-react';

export default function TheBook() {
  const chapters = [
    { num: "01", title: "Anatomy of the Nail Plate", desc: "Understand structure, nail plate growth vectors, and deep dermis analysis." },
    { num: "02", title: "The Hardware Set (E-File)", desc: "Surgical safety protocols, rotational torque control, and absolute speed metrics." },
    { num: "03", title: "Flawless Pocket Cleansing", desc: "The exact 3-step lifting technique for flawless, dry e-file skin preparation." },
    { num: "04", title: "Apex Construction with Hard Gel", desc: "Constructing robust stress zones with optimal structural self-alignment." },
  ];

  return (
    <section id="the-book" className="relative py-24 md:py-32 bg-cream">
      <div className="absolute inset-0 z-0 bg-radial-at-t from-blush/20 via-transparent to-transparent opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Premium Book Showcase */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-sm"
            >
              {/* Luxury Frame Backing - subtle burgundy touch */}
              <div className="absolute inset-4 -right-2 -bottom-2 bg-burgundy/5 border border-burgundy/15 z-0"></div>
              
              <div className="relative z-10 aspect-[3/4] bg-champagne border border-bronze/30 p-4 shadow-xl group">
                <img
                  src={IMAGES.oksanaBusinessBook}
                  alt="Oksana Nykolyak with her Book - Exclusive Ukrainian Manicure Professional Training Guide"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Quality Seal Indicator - solid burgundy with cream text */}
              <div className="absolute -top-6 -right-6 bg-burgundy text-cream w-24 h-24 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-xl z-20">
                <span className="font-serif text-lg font-bold">#1</span>
                <span className="font-sans text-[8px] uppercase tracking-widest font-extrabold">Bestseller</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Book Narrative & Pitch */}
          <div className="col-span-1 lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-burgundy/60"></span>
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy font-bold">
                  THE AUTHORITATIVE MANUAL
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-none mb-6">
                “Exclusive Ukrainian <br />
                <span className="italic text-antique">Manicure</span>”
              </h2>

              <p className="font-sans text-base text-ink/80 leading-relaxed mb-6">
                Now available on Amazon worldwide, this is the definitive technical encyclopedia on advanced hardware cuticle care, nail plate alignment, and professional e-file micro-mechanics.
              </p>

              <div className="space-y-4 mb-10 max-w-xl">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-ink/75 leading-relaxed">
                    <strong className="text-ink font-bold">Surgical Dry cuticle care</strong>: Step-by-step master blueprints on maximizing pocket space without a single cut or irritation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                  <p className="font-sans text-xs text-ink/75 leading-relaxed">
                    <strong className="text-ink font-bold">Long-wear engineering</strong>: Structuring the Apex with hard gel and alignment bases for unmatched 4-6 week durability.
                  </p>
                </div>
              </div>

              {/* Miniature Chapter Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-bronze/20 pt-8 mb-10">
                {chapters.map((ch) => (
                  <div key={ch.num} className="flex gap-3 group">
                    <span className="font-mono text-burgundy text-xs font-semibold">{ch.num}</span>
                    <div>
                      <h4 className="font-serif text-base text-ink group-hover:text-burgundy transition-colors">{ch.title}</h4>
                      <p className="font-sans text-[11px] text-ink/70 mt-1">{ch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {/* Amazon purchase: Solid burgundy button with cream text */}
                <a
                  href="https://a.co/d/0fXGvBR1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-burgundy border border-burgundy hover:bg-wine text-cream font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 shadow-md group"
                >
                  <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Purchase on Amazon
                </a>
                <div className="flex items-center gap-2 text-xs text-ink/60 sm:pt-4">
                  <FileText className="w-4 h-4 text-burgundy/60" />
                  <span>Includes full high-res photo blueprints</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
