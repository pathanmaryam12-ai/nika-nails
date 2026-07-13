import { motion } from 'motion/react';
import { IMAGES } from '../types';
import { ShieldCheck, HelpCircle, Sparkles, Check, Flame } from 'lucide-react';

export default function SignatureTechnique() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-burgundy" />,
      title: "100% Waterless & Hygienic",
      desc: "Waterless pedicure and manicures eliminate bacterial growth vectors. Dry skin allows micro-precise, irritation-free diamond burr filing."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-burgundy" />,
      title: "Clean Pocket Technique",
      desc: "The cuticle is meticulously lifted and refined using specific rotational burrs. This creates a clean sub-cuticular pocket for deep polish placement."
    },
    {
      icon: <Flame className="w-6 h-6 text-burgundy" />,
      title: "Anatomical Apex Alignment",
      desc: "We construct a flawless physical apex using premium self-leveling hard gel. This reinforces stress points for up to 6 weeks of resilient wear."
    }
  ];

  const comparison = {
    traditional: [
      "Soaking in water softens nail plates, causing polish peeling.",
      "Manual clippers and nippers risk tearing delicate skin.",
      "Polish applied far from the cuticle line, showing growth within days.",
      "Standard base coats bend easily, causing micro-cracks and lifting."
    ],
    efile: [
      "Surgical waterless treatment preserves natural nail plate density.",
      "Hardware burrs micro-exfoliate dead tissue with absolute precision.",
      "Deep sub-cuticular polish alignment delays visible outgrowth by weeks.",
      "Structural hard gel alignment forms a glass-like resilient shield."
    ]
  };

  return (
    <section id="technique" className="relative py-24 md:py-32 bg-cream border-t border-bronze/25">
      {/* Background Texture Lines */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blush/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy font-bold">
              THE METHODOLOGY
            </span>
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-tight">
            The Signature <br className="sm:hidden" />
            <span className="italic text-antique">E-File Technique</span>
          </h2>
          <p className="font-sans text-sm text-ink/80 mt-4 max-w-xl mx-auto leading-relaxed">
            The difference between a generic manicure and the Ukrainian E-File standard lies in architectural precision. We do not just polish — we re-engineer.
          </p>
        </motion.div>

        {/* Double-Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Detail Image with Premium Frame - Left Column */}
          <div className="col-span-1 lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm aspect-square bg-champagne border border-bronze/30 p-3 shadow-xl group"
            >
              {/* Thin burgundy border accent around key image for contrast */}
              <div className="absolute inset-0 border border-burgundy/25 m-4 pointer-events-none z-10"></div>
              <img
                src={IMAGES.nailWork1}
                alt="Flawless Russian E-file manicure details"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 ease-out brightness-95 group-hover:brightness-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-cream border border-bronze/25 p-4 max-w-[180px] hidden sm:block shadow-md">
                <span className="font-serif text-3xl text-burgundy font-semibold block leading-none">6+</span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-ink/80 block mt-1">Weeks of Guaranteed Flawless Wear</span>
              </div>
            </motion.div>
          </div>

          {/* Pillars List - Right Column */}
          <div className="col-span-1 lg:col-span-7 order-1 lg:order-2 space-y-10 text-left">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-5"
              >
                <div className="shrink-0">
                  <div className="p-3 bg-champagne border border-bronze/25">
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-ink mb-2">{pillar.title}</h3>
                  <p className="font-sans text-xs text-ink/75 leading-relaxed max-w-xl">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Comparison Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bronze/20 border border-bronze/20"
        >
          {/* Traditional Way */}
          <div className="bg-cream/90 p-8 md:p-12 text-left">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-champagne border border-bronze/20 rounded-none">
                <HelpCircle className="w-5 h-5 text-ink/50" />
              </div>
              <h4 className="font-serif text-2xl text-ink/70 tracking-wide">The Traditional Way</h4>
            </div>
            <ul className="space-y-4">
              {comparison.traditional.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-ink/70 items-start">
                  <span className="text-bronze font-bold mt-0.5 shrink-0">✕</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Oksana's E-File Technique */}
          <div className="bg-champagne p-8 md:p-12 text-left relative overflow-hidden">
            {/* Signature Standard badge in deep burgundy */}
            <div className="absolute right-0 top-0 bg-burgundy text-cream font-sans text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 border-l border-b border-burgundy/10">
              Signature Standard
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-cream border border-burgundy/30 rounded-none">
                <Check className="w-5 h-5 text-burgundy" />
              </div>
              <h4 className="font-serif text-2xl text-burgundy tracking-wide font-semibold">Our E-File Standard</h4>
            </div>
            <ul className="space-y-4">
              {comparison.efile.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-xs text-ink/90 items-start">
                  <span className="text-burgundy font-bold mt-0.5 shrink-0">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
