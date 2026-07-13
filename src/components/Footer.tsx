import { Instagram, MapPin, PhoneCall, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cream border-t border-bronze/25 pt-20 pb-12 z-20">
      
      {/* Editorial Border Framing */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-burgundy/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-bronze/20">
          
          {/* Logo & Narrative */}
          <div className="md:col-span-4 text-left">
            <span className="font-serif text-3xl font-bold tracking-widest text-burgundy block">
              NIKA NAILS
            </span>
            <span className="block font-sans text-xs tracking-[0.25em] text-ink/75 uppercase mt-1 font-bold">
              Oksana Nykolyak · Miami
            </span>
            <p className="font-sans text-xs text-ink/80 mt-6 leading-relaxed max-w-sm">
              Miami’s elite Russian & Ukrainian manicure authority. Delivering surgical cuticle precision, robust structural alignment, and long-lasting glass-like results.
            </p>
          </div>

          {/* Location details */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-serif text-xl text-ink mb-4 font-semibold">The Miami Atelier</h4>
            <ul className="space-y-4 font-sans text-xs text-ink/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Suite 204, 801 Brickell Ave, <br />
                  Miami, FL 33131
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <PhoneCall className="w-4 h-4 text-burgundy shrink-0" />
                <a href="tel:+13055550199" className="hover:text-burgundy transition-colors font-semibold">
                  +1 (305) 555-0199
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-burgundy shrink-0" />
                <a href="mailto:booking@nikanailsmiami.com" className="hover:text-burgundy transition-colors font-semibold">
                  booking@nikanailsmiami.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social connections & handles */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-serif text-xl text-ink mb-4 font-semibold">Connect Digitally</h4>
            <ul className="space-y-4 font-sans text-xs text-ink/70">
              <li>
                <a
                  href="https://instagram.com/nika.nails_miami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center hover:text-burgundy transition-colors group font-semibold"
                >
                  <Instagram className="w-4 h-4 text-burgundy group-hover:scale-105 transition-transform" />
                  <span>Main: @nika.nails_miami</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nika.nails_miami" // Using same handle or related authority
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center hover:text-burgundy transition-colors group font-semibold"
                >
                  <Instagram className="w-4 h-4 text-burgundy group-hover:scale-105 transition-transform" />
                  <span>Education: @nika.nails_academy</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="sms:+13055550199?body=Hi Oksana, I would like to inquire about booking a custom Russian manicure."
                  className="inline-flex px-4 py-2 bg-cream border border-bronze/30 text-burgundy text-[10px] uppercase tracking-widest font-bold hover:border-burgundy transition-colors"
                >
                  Text To Book Link
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Subfooter */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] text-ink/50 text-center sm:text-left">
            © 2026 Nika Nails Miami. All rights reserved. Specialized under Oksana Nykolyak Techniques.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 bg-cream border border-bronze/30 hover:border-burgundy text-ink/70 hover:text-burgundy transition-all group cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
