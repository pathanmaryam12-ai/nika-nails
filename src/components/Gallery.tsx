import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES } from '../types';
import { X, ZoomIn, Heart, ExternalLink } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  tech: string;
  material: string;
  duration: string;
  imgUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Minimalist Champagne Gold Chrome",
    tech: "Russian E-File Gel Manicure",
    material: "Rubber Base + Chrome Powder",
    duration: "1 hr 45 min",
    imgUrl: IMAGES.nailWork2
  },
  {
    id: "gal-2",
    title: "Flawless High-Gloss Nude Alignment",
    tech: "Russian Gel Manicure",
    material: "Hard Gel Structured Overlay",
    duration: "1 hr 30 min",
    imgUrl: IMAGES.nailWork1
  },
  {
    id: "gal-3",
    title: "Luminous Pink Pearl Chrome Alignment",
    tech: "Russian E-File Gel Manicure",
    material: "Rubber Base + Fine Chrome Pigment",
    duration: "1 hr 45 min",
    imgUrl: IMAGES.nailWorkPearlChrome
  },
  {
    id: "gal-4",
    title: "Natural Nude Alignment & Vintage Accents",
    tech: "Russian Gel Manicure",
    material: "Premium Nude Gel + Fine Gold Accents",
    duration: "1 hr 30 min",
    imgUrl: IMAGES.nailWorkVintageRings
  },
  {
    id: "gal-5",
    title: "Waterless Smart Gel Pedicure",
    tech: "E-File Smart Gel Pedicure",
    material: "Specialized Dry Disc Buffer + Elastic Coat",
    duration: "1 hr 30 min",
    imgUrl: IMAGES.nailWorkPedicure
  },
  {
    id: "gal-6",
    title: "Sleek Male Matte Hardware Treatment",
    tech: "Male Russian Manicure",
    material: "Mattifying Treatment Oil + Structural File",
    duration: "30 min",
    imgUrl: IMAGES.nailWorkMale
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-cream">
      <div className="absolute right-1/4 top-1/3 w-80 h-80 bg-blush/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
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
              THE PORTFOLIO
            </span>
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-tight">
            Curated <span className="italic text-antique">Gallery</span>
          </h2>
          <p className="font-sans text-sm text-ink/80 mt-4 max-w-lg mx-auto leading-relaxed">
            Close-up architecture, deep pocket cuticle cleansing, and surgical glass alignments. Tap on any portrait to analyze technical details.
          </p>
        </motion.div>

        {/* Gallery Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square overflow-hidden bg-champagne border border-bronze/30 p-2.5 cursor-pointer shadow-lg hover:border-burgundy/40 transition-all duration-500"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-1000 ease-out"
                />
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left z-20">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-burgundy font-bold mb-1">
                    {item.tech}
                  </span>
                  <h3 className="font-serif text-lg text-cream font-medium leading-tight mb-2">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center text-[10px] text-cream/80">
                    <span>{item.material}</span>
                    <span className="font-mono">{item.duration}</span>
                  </div>
                </div>

                {/* Micro Actions */}
                <div className="absolute top-4 right-4 z-30 flex gap-2">
                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className="w-8 h-8 rounded-full bg-cream/95 backdrop-blur-sm border border-bronze/30 flex items-center justify-center text-ink hover:text-burgundy transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${likedItems[item.id] ? 'fill-burgundy text-burgundy' : ''}`} />
                  </button>
                  <div className="w-8 h-8 rounded-full bg-cream/95 backdrop-blur-sm border border-bronze/30 flex items-center justify-center text-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Gallery Anchor */}
        <div className="mt-16 text-center">
          <p className="font-sans text-xs text-ink/75 uppercase tracking-widest mb-4 font-medium">
            Want to see new daily transformations?
          </p>
          <a
            href="https://instagram.com/nika.nails_miami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-burgundy hover:text-wine transition-colors duration-300"
          >
            Follow @nika.nails_miami <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Curated Lightbox Dialog */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 text-cream/70 hover:text-cream transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-champagne border border-bronze/30 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left Side: Full-size detail */}
                <div className="aspect-square relative p-4 bg-cream/50">
                  <img
                     src={selectedItem.imgUrl}
                     alt={selectedItem.title}
                     referrerPolicy="no-referrer"
                     className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side: Technical Specs */}
                <div className="p-8 md:p-12 text-left flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-[0.25em] text-burgundy font-bold block mb-4">
                      Technical Spec Case Study
                    </span>
                    <h3 className="font-serif text-3xl text-ink leading-tight mb-6">
                      {selectedItem.title}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <span className="block font-sans text-[10px] uppercase tracking-widest text-ink/60 font-semibold mb-1">Methodology Applied</span>
                        <span className="font-serif text-lg text-ink font-medium">{selectedItem.tech}</span>
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] uppercase tracking-widest text-ink/60 font-semibold mb-1">Structural Materials used</span>
                        <span className="font-serif text-lg text-ink font-medium">{selectedItem.material}</span>
                      </div>
                      <div>
                        <span className="block font-sans text-[10px] uppercase tracking-widest text-ink/60 font-semibold mb-1">Standard Duration</span>
                        <span className="font-mono text-base text-burgundy font-bold">{selectedItem.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-bronze/20 flex justify-between items-center">
                    <button
                      onClick={(e) => toggleLike(selectedItem.id, e)}
                      className="inline-flex items-center gap-2 text-xs text-ink/80 hover:text-burgundy transition-colors font-medium"
                    >
                      <Heart className={`w-4 h-4 ${likedItems[selectedItem.id] ? 'fill-burgundy text-burgundy' : ''}`} />
                      <span>{likedItems[selectedItem.id] ? 'Liked' : 'Like Work'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedItem(null);
                        const el = document.getElementById('booking');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-2.5 bg-burgundy text-cream font-sans font-bold text-xs uppercase tracking-[0.15em] hover:bg-wine transition-all duration-300 shadow-md"
                    >
                      Book Similar Style
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
