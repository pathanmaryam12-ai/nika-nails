import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES, Service } from '../types';
import { Check, Plus, Clock, Sparkles } from 'lucide-react';

interface ServicesPricingProps {
  selectedServices: Service[];
  onToggleService: (service: Service) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All Services' },
  { id: 'manicure', name: 'Manicures' },
  { id: 'pedicure', name: 'Pedicures' },
  { id: 'extensions', name: 'Extensions' },
  { id: 'combos', name: 'Combos & Spa' },
  { id: 'men', name: 'Men’s care' },
  { id: 'addons', name: 'Add-ons & Fixes' },
];

export default function ServicesPricing({ selectedServices, onToggleService }: ServicesPricingProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [masterLevel, setMasterLevel] = useState<'top' | 'junior'>('top');

  // Filter services by active level and category
  const filteredServices = SERVICES.filter(service => {
    // Master level filter (exclude others specifically if not applicable)
    if (service.master !== 'all' && service.master !== masterLevel) {
      return false;
    }
    // Category filter
    if (activeCategory !== 'all' && service.category !== activeCategory) {
      return false;
    }
    return true;
  });

  const isSelected = (service: Service) => {
    return selectedServices.some(s => s.id === service.id);
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-cream">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-champagne/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy font-bold">
              PREMIUM PRICING
            </span>
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-tight">
            Menu of <span className="italic text-antique">Services</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink/80 mt-4 leading-relaxed max-w-lg mx-auto">
            Select one or more services to add to your custom booking. Tap on any item to calculate your perfect treatment.
          </p>
        </motion.div>

        {/* Master Selector Tabs - Thin editorial design */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-champagne border border-bronze/30 rounded-none">
            <button
              onClick={() => setMasterLevel('top')}
              className={`px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                masterLevel === 'top'
                  ? 'bg-burgundy text-cream shadow-sm'
                  : 'text-ink/75 hover:text-burgundy'
              }`}
            >
              Top Master Oksana
            </button>

            <button
              onClick={() => setMasterLevel('junior')}
              className={`px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                masterLevel === 'junior'
                  ? 'bg-burgundy text-cream shadow-sm'
                  : 'text-ink/75 hover:text-burgundy'
              }`}
            >
              Junior Master
            </button>
          </div>
        </div>

        {/* Category Filters (Horizontal scroll on mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none justify-start lg:justify-center -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-cream border-burgundy text-burgundy font-bold shadow-sm'
                    : 'bg-transparent border-bronze/25 text-ink/75 hover:border-burgundy/40 hover:text-burgundy'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services List - Premium line-divided format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl mx-auto">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => {
              const selected = isSelected(service);
              // Check if service is signature (contains 'sig' or 'combo' in id) for premium Burgundy highlight
              const isSignature = service.id.includes('sig') || service.id.includes('combo') || service.id.includes('oksana');
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                  onClick={() => onToggleService(service)}
                  className={`group relative p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    selected
                      ? 'bg-champagne border-burgundy shadow-sm'
                      : 'bg-cream/90 border-bronze/25 hover:bg-champagne hover:border-burgundy/30'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="text-left">
                      <h3 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-burgundy transition-colors leading-snug font-medium">
                        {service.name}
                      </h3>
                      {service.description && (
                        <p className="font-sans text-xs text-ink/75 mt-1.5 leading-relaxed max-w-[280px] sm:max-w-[340px]">
                          {service.description}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      {/* Signature emphasis: Burgundy for signature services, Antique gold for others */}
                      <span className={`font-mono text-xl font-bold ${isSignature ? 'text-burgundy' : 'text-antique'}`}>
                        ${service.price.toFixed(2)}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-ink/65 mt-1.5">
                        <Clock className="w-3 h-3 text-burgundy" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-bronze/20">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-antique font-bold inline-flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-burgundy" />
                      {service.master === 'all'
                        ? 'General Service'
                        : service.master === 'top'
                        ? 'Top Master Oksana'
                        : 'Junior Master'}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="font-sans text-[10px] uppercase tracking-widest text-ink/75 group-hover:text-burgundy transition-colors font-medium">
                        {selected ? 'Added to Booking' : 'Add to Treatment'}
                      </span>
                      <div
                        className={`w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                          selected
                            ? 'bg-burgundy text-cream'
                            : 'bg-cream border border-bronze/25 text-ink/65 group-hover:border-burgundy group-hover:text-burgundy'
                        }`}
                      >
                        {selected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-16 border border-dashed border-bronze/30 bg-champagne/30">
              <p className="font-sans text-xs text-ink/60 uppercase tracking-widest">
                No services available in this category for the selected master level.
              </p>
            </div>
          )}
        </div>

        {/* Selected Services Counter Sticky Callout */}
        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-between p-6 bg-champagne border border-burgundy max-w-4xl mx-auto shadow-xl"
          >
            <div className="text-left mb-4 sm:mb-0">
              <p className="font-serif text-xl text-ink font-medium">
                You selected <span className="text-burgundy font-bold">{selectedServices.length}</span> treatment{selectedServices.length > 1 ? 's' : ''}
              </p>
              <p className="font-sans text-xs text-ink/75 mt-1">
                Total: <span className="font-mono text-burgundy font-bold">${selectedServices.reduce((acc, s) => acc + s.price, 0).toFixed(2)}</span> · Est. Time: {selectedServices.reduce((acc, s) => {
                  const num = parseInt(s.duration);
                  return acc + (isNaN(num) ? 30 : num);
                }, 0)} mins
              </p>
            </div>
            <button
              onClick={scrollToBooking}
              className="px-6 py-3 bg-burgundy text-cream font-sans font-bold text-xs uppercase tracking-[0.15em] hover:bg-wine transition-all duration-300 shadow-md"
            >
              Proceed to Booking
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
