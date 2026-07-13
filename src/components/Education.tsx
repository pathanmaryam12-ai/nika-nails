import { motion } from 'motion/react';
import { GraduationCap, ArrowUpRight, Instagram, Users, Award } from 'lucide-react';
import { IMAGES } from '../types';

export default function Education() {
  const courses = [
    {
      badge: "ULTIMATE EXCLUSIVE",
      title: "1:1 VIP Private Mentorship",
      subtitle: "Hands-on, personalized with Oksana",
      desc: "An intensive 2-day live blueprint tailored strictly to your skill gaps. Covers complete dry e-file pocket preparation, hardware speed techniques, and real-time business scaling logic.",
      duration: "2 Full Days",
      includes: "Physical Certificate, Elite Goody Box, Lifetime Support"
    },
    {
      badge: "POPULAR GROUP",
      title: "Advanced E-File Masterclass",
      subtitle: "Intimate group environment (Max 6 students)",
      desc: "Perfect for nail techs looking to switch to high-precision hardware techniques. Master smart disk pedicures, apex alignment with hard gel, and safe structural repairs.",
      duration: "1 Intensive Day",
      includes: "Nika Nails Authorized Student Booklet, Live Model Practice"
    }
  ];

  return (
    <section id="education" className="relative py-24 md:py-32 bg-cream border-t border-bronze/25">
      {/* Editorial Watermark */}
      <div className="absolute left-6 top-12 font-serif text-[10vw] text-bronze/5 uppercase tracking-widest select-none pointer-events-none hidden lg:block font-extrabold">
        AUTHORITY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16"
        >
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-burgundy/60"></span>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy font-bold">
                ELITE TRAINING
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight leading-none">
              Nika Nails <span className="italic text-antique">Academy</span>
            </h2>
            <p className="font-sans text-sm text-ink/80 mt-4 max-w-xl leading-relaxed">
              Oksana Nykolyak has trained hundreds of professionals globally. Elevate your craft, commands higher ticket prices, and achieve cuticle perfection through her structured masterclasses.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href="https://instagram.com/nika.nails_miami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-bronze/40 hover:border-burgundy text-ink hover:text-burgundy font-sans font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 bg-transparent group"
            >
              <Instagram className="w-4 h-4 text-burgundy" />
              Inquire via Instagram
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Courses Cards - Luxury layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-champagne border border-bronze/30 p-8 md:p-12 relative flex flex-col justify-between group hover:border-burgundy/40 transition-colors duration-500 shadow-sm"
            >
              <div className="absolute top-0 right-0 bg-burgundy text-cream text-[9px] uppercase tracking-widest font-bold px-4 py-1.5 border-l border-b border-burgundy/10">
                {course.badge}
              </div>

              <div className="text-left">
                <div className="flex items-center gap-3 text-burgundy mb-6">
                  {index === 0 ? <Award className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-antique">{course.duration}</span>
                </div>

                <h3 className="font-serif text-3xl text-ink mb-1 group-hover:text-burgundy transition-colors">
                  {course.title}
                </h3>
                <p className="font-sans text-xs italic text-antique font-semibold mb-6">{course.subtitle}</p>
                <p className="font-sans text-xs text-ink/75 leading-relaxed mb-8">
                  {course.desc}
                </p>
              </div>

              <div className="border-t border-bronze/20 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
                <div>
                  <span className="block font-sans text-[9px] uppercase tracking-widest text-ink/60 font-semibold">Includes:</span>
                  <span className="font-serif text-sm text-ink mt-0.5 block font-medium">{course.includes}</span>
                </div>
                <a
                  href="https://instagram.com/nika.nails_miami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-cream border border-bronze/40 hover:border-burgundy text-ink/80 hover:text-burgundy font-sans font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 text-center shrink-0"
                >
                  Secure Spot
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Callout */}
        <div className="mt-20 max-w-4xl mx-auto bg-champagne border border-bronze/30 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Oksana image column */}
            <div className="col-span-1 md:col-span-4 aspect-[3/4] relative overflow-hidden bg-cream border-b md:border-b-0 md:border-r border-bronze/20">
              <img
                src={IMAGES.oksanaAboutMe}
                alt="Oksana Nykolyak - Nail Artist, Teacher, Judge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 ease-out"
              />
            </div>
            {/* Quote and credentials column */}
            <div className="col-span-1 md:col-span-8 p-8 md:p-12 text-left">
              <GraduationCap className="w-8 h-8 text-burgundy mb-4" />
              <p className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed mb-6">
                “The best technicians never stop learning. We teach surgical precision so you can elevate your artistry and charge what you are genuinely worth.”
              </p>
              <div>
                <p className="font-serif text-lg text-burgundy font-semibold">Oksana Nykolyak</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-antique font-bold mt-1">Nail Artist | Teacher | Judge</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
