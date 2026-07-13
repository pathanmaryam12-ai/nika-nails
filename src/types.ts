export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  duration: string;
  master: 'top' | 'junior' | 'all';
  category: 'manicure' | 'pedicure' | 'extensions' | 'combos' | 'men' | 'addons';
}

export interface Credential {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export const IMAGES = {
  heroOksana: "/src/assets/images/hero_oksana_1783948105466.jpg",
  bookCover: "/src/assets/images/book_cover_1783948120977.jpg",
  nailWork1: "/src/assets/images/nail_work_1_1783948136646.jpg",
  nailWork2: "/src/assets/images/nail_work_2_1783948151123.jpg",
  heroBomondCover: "/src/assets/images/hero_bomond_cover_1783949696510.jpg",
  oksanaAboutMe: "/src/assets/images/oksana_about_me_1783949714460.jpg",
  oksanaBusinessBook: "/src/assets/images/oksana_business_book_1783949733428.jpg",
  nailWorkPearlChrome: "/src/assets/images/nail_work_pearl_chrome_1783949750854.jpg",
  nailWorkVintageRings: "/src/assets/images/nail_work_vintage_rings_1783949766379.jpg",
  nailWorkPedicure: "/src/assets/images/regenerated_image_1783950130933.jpg",
  nailWorkMale: "/src/assets/images/regenerated_image_1783950129306.jpg",
};

export const CREDENTIALS: Credential[] = [
  {
    id: "ceo",
    title: "Founder & CEO",
    subtitle: "Nika Nails Miami",
    description: "Pioneering the flawless European & Ukrainian e-file technique across the United States."
  },
  {
    id: "author",
    title: "Published Author",
    subtitle: "Exclusive Ukrainian Manicure",
    description: "Written the definitive manual on high-end cuticle preparation and safe structural techniques."
  },
  {
    id: "judge",
    title: "Industry Judge",
    subtitle: "Global Competitions",
    description: "Evaluating precision, safety, and artistry at the most prestigious nail championships."
  },
  {
    id: "educator",
    title: "Elite Educator",
    subtitle: "Masterclasses & 1:1 Coaching",
    description: "Trained hundreds of professionals in advanced hardware techniques and business growth."
  }
];

export const SERVICES: Service[] = [
  // --- TOP MASTER - Manicures ---
  {
    id: "top-gel-mani-long",
    name: "Russian E-File Gel Manicure (Long)",
    description: "Russian e-file Gel manicure for long nails. High precision detailing and tailored prep.",
    price: 90,
    duration: "1 hr 30 min",
    master: "top",
    category: "manicure"
  },
  {
    id: "top-gel-mani-short",
    name: "Russian Gel Manicure (Base+Color)",
    description: "Russian gel manicure for short to medium nails. Includes structured alignment and high-shine color overlay.",
    price: 100,
    duration: "1 hr 45 min",
    master: "top",
    category: "manicure"
  },
  {
    id: "top-hard-gel-strengthening",
    name: "Strengthening with Hard Gel",
    description: "Russian e-file manicure with premium hard gel overlay to reinforce weak and fragile nails.",
    price: 100,
    duration: "1 hr 45 min",
    master: "top",
    category: "manicure"
  },
  {
    id: "top-classic-mani",
    name: "Classic Manicure",
    description: "Traditional meticulously detailed liquid manicure for pristine hands.",
    price: 50,
    duration: "30 min",
    master: "top",
    category: "manicure"
  },
  {
    id: "top-efile-mani-no-polish",
    name: "Russian E-File Manicure (No Polish)",
    description: "Russian e-file dry hardware manicure focused on pristine skin, cuticle refinement, and nail health.",
    price: 55,
    duration: "30 min",
    master: "top",
    category: "manicure"
  },

  // --- TOP MASTER - Pedicures ---
  {
    id: "top-gel-pedi",
    name: "E-File Smart Gel Pedicure (Waterless)",
    description: "Russian e-file gel pedicure using waterless high-precision disk techniques.",
    price: 90,
    duration: "1 hr 30 min",
    master: "top",
    category: "pedicure"
  },
  {
    id: "top-pedi-no-polish",
    name: "Smart Pedicure (No Polish)",
    description: "Waterless hardware pedicure focused on sole restoration, cuticle cleaning, and premium hydration.",
    price: 70,
    duration: "45 min",
    master: "top",
    category: "pedicure"
  },

  // --- TOP MASTER - Extensions & Combos ---
  {
    id: "top-extensions-gel",
    name: "Extension Nails Gel",
    description: "Full gel extensions with signature Russian techniques for flawless, customized structural length.",
    price: 150,
    duration: "2 hr 30 min",
    master: "top",
    category: "extensions"
  },
  {
    id: "top-combo-gel",
    name: "Russian Manicure & Pedicure Gel Combo",
    description: "Combined high-precision Russian gel manicure and e-file pedicure with premium gel finish.",
    price: 180,
    duration: "3 hr 00 min",
    master: "top",
    category: "combos"
  },
  {
    id: "top-combo-no-polish",
    name: "Russian E-File Manicure + Smart Pedicure (No Polish)",
    description: "Spa treatment combo for hands and feet. Deep skin refinement without coating.",
    price: 160,
    duration: "2 hr 00 min",
    master: "top",
    category: "combos"
  },

  // --- TOP MASTER - Men's ---
  {
    id: "top-male-mani",
    name: "Male Russian Manicure",
    description: "Matte finish cuticle detailing and nail architecture shaping designed specifically for men.",
    price: 60,
    duration: "30 min",
    master: "top",
    category: "men"
  },
  {
    id: "top-male-pedi",
    name: "Male Smart Pedicure",
    description: "Advanced waterless sole smoothing and neat toe detailing with specialized athletic foot-care products.",
    price: 75,
    duration: "45 min",
    master: "top",
    category: "men"
  },

  // --- JUNIOR MASTER - Manicures ---
  {
    id: "jr-gel-mani-long",
    name: "Russian E-File Gel Manicure",
    description: "High-precision hardware manicure executed by a professional Junior Master under Oksana's standard.",
    price: 70,
    duration: "2 hr 30 min",
    master: "junior",
    category: "manicure"
  },
  {
    id: "jr-gel-mani-short",
    name: "Russian Gel Manicure (Base+Color)",
    description: "Short/medium length. Immaculate hardware preparation and premium gel application.",
    price: 90,
    duration: "2 hr 30 min",
    master: "junior",
    category: "manicure"
  },
  {
    id: "jr-hard-gel-strengthening",
    name: "Strengthening with Hard Gel",
    description: "Junior master application of structured hard gel overlay for added protection and length.",
    price: 90,
    duration: "3 hr 00 min",
    master: "junior",
    category: "manicure"
  },
  {
    id: "jr-classic-mani",
    name: "Classic Manicure",
    description: "Impeccable manual detailing, cuticle cleaning, and classic nail polish or natural finish.",
    price: 50,
    duration: "50 min",
    master: "junior",
    category: "manicure"
  },
  {
    id: "jr-efile-mani-no-polish",
    name: "Russian E-File Manicure (No Polish)",
    description: "Hardware dry cuticle care and natural nail buffering to perfection.",
    price: 60,
    duration: "45 min",
    master: "junior",
    category: "manicure"
  },

  // --- JUNIOR MASTER - Pedicures ---
  {
    id: "jr-gel-pedi",
    name: "E-File Smart Gel Pedicure (Waterless)",
    description: "Dry smart disk cuticle and sole treatment with high-durability gel color.",
    price: 80,
    duration: "2 hr 00 min",
    master: "junior",
    category: "pedicure"
  },
  {
    id: "jr-pedi-no-polish",
    name: "Smart Pedicure (No Polish)",
    description: "Dry disc foot rejuvenation and cuticle tidying, finished with massage oil.",
    price: 70,
    duration: "1 hr 00 min",
    master: "junior",
    category: "pedicure"
  },

  // --- JUNIOR MASTER - Combos ---
  {
    id: "jr-combo-gel",
    name: "Russian Manicure & Pedicure Gel Combo",
    description: "Our signature high-end hand and foot treatment combination by a Junior Master.",
    price: 160,
    duration: "4 hr 30 min",
    master: "junior",
    category: "combos"
  },

  // --- JUNIOR MASTER - Men's ---
  {
    id: "jr-male-mani",
    name: "Male Russian Manicure",
    description: "Tailored skin care, hardware filing, and clean matte finish for men.",
    price: 55,
    duration: "50 min",
    master: "junior",
    category: "men"
  },
  {
    id: "jr-male-pedi",
    name: "Male Smart Pedicure",
    description: "Full Smart disc sole treatment, foot massage, and neat shaping for men.",
    price: 70,
    duration: "1 hr 00 min",
    master: "junior",
    category: "men"
  },

  // --- ADD-ONS & OTHERS ---
  {
    id: "spa-treatment",
    name: "Spa Treatment Luxury Upgrade",
    description: "Pristine therapeutic parafinn, hot towel wrap, and deep aromatherapy hand or foot massage.",
    price: 50,
    duration: "30 min",
    master: "all",
    category: "addons"
  },
  {
    id: "french-chrome-cateye",
    name: "Art: French, Chrome or Cat-Eye Effect",
    description: "Aesthetic premium upgrades including micro-french line art, high-grade chrome powders, or dimensional cat-eye pigments.",
    price: 25,
    duration: "30 min",
    master: "all",
    category: "addons"
  },
  {
    id: "nail-polish",
    name: "Nail Polish Coating",
    description: "Traditional lacquer coating application with high-gloss top coat.",
    price: 10,
    duration: "15 min",
    master: "all",
    category: "addons"
  },
  {
    id: "gel-removal-only",
    name: "Gel Removal (Without Manicure)",
    description: "Safe hardware reduction of gel layers, clean-up, and light buffing. Safe for nail plate.",
    price: 25,
    duration: "30 min",
    master: "all",
    category: "addons"
  },
  {
    id: "nail-fix",
    name: "Nail Repair & Structural Fix (Per Nail)",
    description: "Correction of cracks, chips, or rebuilding corner fractures using fiberglass or hard gel.",
    price: 15,
    duration: "30 min",
    master: "all",
    category: "addons"
  }
];
