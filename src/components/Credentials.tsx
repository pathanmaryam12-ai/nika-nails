import { motion } from 'motion/react';
import { CREDENTIALS } from '../types';
import { Award, BookOpen, Scale, GraduationCap } from 'lucide-react';

const icons = [
  <Award className="w-6 h-6 text-burgundy" />,
  <BookOpen className="w-6 h-6 text-burgundy" />,
  <Scale className="w-6 h-6 text-burgundy" />,
  <GraduationCap className="w-6 h-6 text-burgundy" />,
];

export default function Credentials() {
  return (
    <section className="relative bg-champagne border-y border-bronze/20 py-16 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {CREDENTIALS.map((cred, index) => (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left p-6 hover:bg-cream/40 transition-colors duration-300"
            >
              <div className="mb-4 p-3 bg-cream border border-bronze/30 rounded-none group-hover:border-burgundy/40 transition-all duration-300 group-hover:scale-105">
                {icons[index]}
              </div>
              <h3 className="font-serif text-2xl font-medium text-ink mb-1 group-hover:text-burgundy transition-colors duration-300">
                {cred.title}
              </h3>
              <p className="font-sans text-xs uppercase tracking-widest text-antique font-semibold mb-3">
                {cred.subtitle}
              </p>
              <p className="font-sans text-xs text-ink/75 leading-relaxed max-w-[240px] lg:max-w-none">
                {cred.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
