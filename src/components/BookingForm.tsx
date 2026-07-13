import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service, SERVICES } from '../types';
import { Calendar, Clock, Sparkles, User, Phone, Mail, Check, AlertCircle, CalendarRange, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BookingFormProps {
  selectedServices: Service[];
  onRemoveService: (service: Service) => void;
  onClearServices: () => void;
}

export default function BookingForm({ selectedServices, onRemoveService, onClearServices }: BookingFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [selectedMaster, setSelectedMaster] = useState<'top' | 'junior'>('top');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [supabaseErrorMsg, setSupabaseErrorMsg] = useState('');

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDurationMin = selectedServices.reduce((sum, s) => {
    const min = parseInt(s.duration);
    return sum + (isNaN(min) ? 30 : min);
  }, 0);

  const formatDuration = (mins: number) => {
    const hrs = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    if (hrs > 0) {
      return `${hrs} hr ${remainingMins > 0 ? `${remainingMins} min` : ''}`;
    }
    return `${remainingMins} min`;
  };

  const timeSlots = [
    "09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM"
  ];

  const handleNextStep = () => {
    if (selectedServices.length === 0) {
      setFormError('Please select at least one service above before proceeding.');
      return;
    }
    setFormError('');
    setStep(2);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !preferredDate || !preferredTime) {
      setFormError('Please fill in your name, phone number, preferred date, and time slot.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);
    setSupabaseErrorMsg('');

    try {
      const { error } = await supabase.from('bookings').insert([
        {
          client_name: clientName,
          client_phone: clientPhone,
          client_email: clientEmail || null,
          preferred_date: preferredDate,
          preferred_time: preferredTime,
          master_preference: selectedMaster,
          special_notes: specialNotes || null,
          services: selectedServices.map(s => ({
            id: s.id,
            name: s.name,
            price: s.price,
            duration: s.duration,
            master: s.master
          })),
          total_price: totalPrice,
          total_duration: totalDurationMin
        }
      ]);

      if (error) {
        console.error('Supabase submission error:', error);
        setSupabaseErrorMsg(error.message);
      }
      setStep(3);
    } catch (err: any) {
      console.error('Failed to submit booking to Supabase:', err);
      setSupabaseErrorMsg(err.message || String(err));
      setStep(3);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    onClearServices();
    setClientName('');
    setClientPhone('');
    setClientEmail('');
    setPreferredDate('');
    setPreferredTime('');
    setSpecialNotes('');
    setSupabaseErrorMsg('');
    setIsSubmitting(false);
    setStep(1);
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-cream border-t border-bronze/25">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blush/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-burgundy font-bold">
              SECURE APPOINTMENT
            </span>
            <span className="h-[1px] w-8 bg-burgundy/60"></span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-tight leading-none">
            Reserve Your <span className="italic text-antique">Session</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ink/80 mt-4 leading-relaxed">
            Our booking flow is synchronized to secure your premium spot instantly. Select master therapist level and enter details below.
          </p>
        </motion.div>

        {/* Outer Square Emulator Container - Luxury Nude style */}
        <div className="bg-champagne border border-bronze/30 shadow-2xl relative">
          
          {/* Header Indicators */}
          <div className="grid grid-cols-3 border-b border-bronze/25 text-center font-sans text-[10px] uppercase tracking-widest font-bold text-ink/75">
            <div className={`py-4 border-r border-bronze/25 transition-colors ${step === 1 ? 'text-burgundy bg-cream font-bold' : ''}`}>
              1. Services Selection
            </div>
            <div className={`py-4 border-r border-bronze/25 transition-colors ${step === 2 ? 'text-burgundy bg-cream font-bold' : ''}`}>
              2. Secure Details
            </div>
            <div className={`py-4 transition-colors ${step === 3 ? 'text-burgundy bg-cream font-bold' : ''}`}>
              3. Scheduled
            </div>
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: APPOINTMENT SUMMARY AND SERVICES LIST */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-8"
                >
                  <h3 className="font-serif text-2xl text-ink text-left font-medium">Appointment Summary</h3>

                  {selectedServices.length === 0 ? (
                    <div className="py-12 border border-dashed border-bronze/30 text-center flex flex-col items-center justify-center bg-cream/50">
                      <CalendarRange className="w-10 h-10 text-burgundy/60 mb-3" />
                      <p className="font-sans text-sm text-ink/80 uppercase tracking-wider font-semibold">No services added yet</p>
                      <button
                        onClick={() => {
                          const menuEl = document.getElementById('services');
                          if (menuEl) menuEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-5 py-2.5 bg-burgundy text-cream font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-wine transition-all shadow-md"
                      >
                        Browse Services Menu
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4 text-left">
                      <div className="max-h-60 overflow-y-auto space-y-2 pr-2 scrollbar-thin">
                        {selectedServices.map(service => (
                          <div key={service.id} className="flex justify-between items-center p-4 bg-cream border border-bronze/20 shadow-sm">
                            <div>
                              <p className="font-serif text-base text-ink font-medium">{service.name}</p>
                              <div className="flex gap-4 mt-1 font-sans text-[10px] uppercase tracking-widest text-ink/65">
                                <span className="font-semibold">{service.master === 'top' ? 'Top Master' : service.master === 'junior' ? 'Junior Master' : 'General'}</span>
                                <span className="text-bronze/30">|</span>
                                <span>{service.duration}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-mono text-sm text-burgundy font-bold">${service.price.toFixed(2)}</span>
                              <button
                                onClick={() => onRemoveService(service)}
                                className="font-sans text-[10px] uppercase text-burgundy/80 hover:text-burgundy font-bold tracking-wider transition-colors"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Cumulative Total Blocks */}
                      <div className="border-t border-bronze/20 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink/65 font-bold">ESTIMATED SUMMARY</p>
                          <div className="flex gap-4 items-center mt-1">
                            <span className="font-serif text-2xl text-ink font-medium">{formatDuration(totalDurationMin)}</span>
                            <span className="text-bronze/30 text-2xl">·</span>
                            <span className="font-mono text-2xl text-burgundy font-bold">${totalPrice.toFixed(2)}</span>
                          </div>
                        </div>
                        <button
                          onClick={handleNextStep}
                          className="w-full sm:w-auto px-8 py-4 bg-burgundy text-cream font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-wine transition-all flex items-center justify-center gap-2 shadow-md"
                        >
                          Continue to Details
                        </button>
                      </div>
                    </div>
                  )}

                  {formError && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-sans">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{formError}</span>
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 2: DETAILS ENTRY FORM */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <form onSubmit={handleSubmitBooking} className="space-y-8 text-left">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-serif text-2xl text-ink font-medium">Secure Booking Details</h3>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="font-sans text-[10px] uppercase tracking-widest text-burgundy hover:text-wine font-bold"
                      >
                        ← Back to Services
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name Field */}
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                          Client Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 w-4 h-4 text-burgundy" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Maryam Pathan"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full bg-cream border border-bronze/30 p-3.5 pl-11 font-sans text-sm text-ink focus:outline-none focus:border-burgundy transition-colors placeholder:text-ink/40"
                          />
                        </div>
                      </div>

                      {/* Phone Field (CRITICAL) */}
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                          Instagram / SMS Phone *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-3.5 w-4 h-4 text-burgundy" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +1 (305) 555-0199"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            className="w-full bg-cream border border-bronze/30 p-3.5 pl-11 font-sans text-sm text-ink focus:outline-none focus:border-burgundy transition-colors placeholder:text-ink/40"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 w-4 h-4 text-burgundy" />
                          <input
                            type="email"
                            placeholder="e.g. client@domain.com"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            className="w-full bg-cream border border-bronze/30 p-3.5 pl-11 font-sans text-sm text-ink focus:outline-none focus:border-burgundy transition-colors placeholder:text-ink/40"
                          />
                        </div>
                      </div>

                      {/* Master Preference Field */}
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                          Master Therapist Preference
                        </label>
                        <select
                          value={selectedMaster}
                          onChange={(e) => setSelectedMaster(e.target.value as 'top' | 'junior')}
                          className="w-full bg-cream border border-bronze/30 p-3.5 font-sans text-sm text-ink focus:outline-none focus:border-burgundy transition-colors"
                        >
                          <option value="top">Top Master Oksana Nykolyak (Miami)</option>
                          <option value="junior">Junior Master Artist</option>
                        </select>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                          Preferred Appointment Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={preferredDate}
                            onChange={(e) => setPreferredDate(e.target.value)}
                            className="w-full bg-cream border border-bronze/30 p-3.5 font-sans text-sm text-ink focus:outline-none focus:border-burgundy transition-colors"
                          />
                        </div>
                      </div>

                      {/* Preferred Time slots */}
                      <div>
                        <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                          Select Time Slot *
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map(time => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setPreferredTime(time)}
                              className={`py-2 text-[11px] font-sans border transition-all duration-300 ${
                                preferredTime === time
                                  ? 'bg-burgundy border-burgundy text-cream font-bold shadow-sm'
                                  : 'bg-cream border-bronze/25 text-ink/75 hover:border-burgundy/40 hover:text-burgundy'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Special Notes */}
                    <div>
                      <label className="block font-sans text-[10px] uppercase tracking-widest text-ink/75 mb-2 font-bold">
                        Special requests / Current nail condition (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. I need soft gel removal, or I have a broken nail to fix..."
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        className="w-full bg-cream border border-bronze/30 p-3.5 font-sans text-sm text-ink focus:outline-none focus:border-burgundy transition-colors placeholder:text-ink/40"
                      />
                    </div>

                    {formError && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 text-red-800 text-xs font-sans">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Submit Button block */}
                    <div className="border-t border-bronze/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="text-left">
                        <p className="font-sans text-[9px] uppercase tracking-wider text-ink/65 font-bold">RESERVATION VALUE</p>
                        <p className="font-mono text-xl text-burgundy font-bold">${totalPrice.toFixed(2)}</p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-auto px-8 py-4 bg-burgundy text-cream font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-wine transition-all flex items-center justify-center gap-2 shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Synchronizing Reservation...
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4" />
                            Book Appointment Now
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </motion.div>
              )}

              {/* STEP 3: CONFIRMATION SUCCESS */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-8 text-center py-6"
                >
                  <div className="w-16 h-16 bg-burgundy/10 border border-burgundy text-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl text-burgundy font-bold">Reservation Request Received</h3>
                  
                  <div className="max-w-md mx-auto bg-cream border border-bronze/20 p-6 text-left space-y-4 font-sans text-xs shadow-sm">
                    <div className="flex justify-between border-b border-bronze/20 pb-2">
                      <span className="text-ink/65 uppercase">Client Name</span>
                      <span className="text-ink font-medium">{clientName}</span>
                    </div>
                    <div className="flex justify-between border-b border-bronze/20 pb-2">
                      <span className="text-ink/65 uppercase">Phone/Contact</span>
                      <span className="text-ink font-medium">{clientPhone}</span>
                    </div>
                    <div className="flex justify-between border-b border-bronze/20 pb-2">
                      <span className="text-ink/65 uppercase">Date & Time</span>
                      <span className="text-ink font-medium">{preferredDate} at {preferredTime}</span>
                    </div>
                    <div className="flex justify-between border-b border-bronze/20 pb-2">
                      <span className="text-ink/65 uppercase">Master Assigned</span>
                      <span className="text-ink font-medium">{selectedMaster === 'top' ? 'Oksana (Top Master)' : 'Junior Master'}</span>
                    </div>
                    <div className="flex justify-between border-b border-bronze/20 pb-2">
                      <span className="text-ink/65 uppercase">Est. Duration</span>
                      <span className="text-ink font-medium">{formatDuration(totalDurationMin)}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-ink/65 uppercase font-bold">Total (At Counter)</span>
                      <span className="text-burgundy font-mono font-bold text-sm">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Supabase connection feedback */}
                  {supabaseErrorMsg ? (
                    <div className="max-w-md mx-auto p-4 bg-amber-50/70 border border-amber-200/50 text-amber-950 text-[11px] text-left font-sans">
                      <div className="flex gap-2.5 items-start">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-800">Supabase Table Sync Notice</p>
                          <p className="mt-1 text-amber-800/90 leading-relaxed">
                            Form validated! However, we couldn't insert into your Supabase database. Error: <code className="bg-amber-100/80 px-1 py-0.5 rounded text-amber-900 font-mono text-[10px]">{supabaseErrorMsg}</code>.
                          </p>
                          <p className="mt-2 text-amber-800 font-bold">To resolve this:</p>
                          <ul className="list-disc list-inside mt-1 text-amber-700/90 space-y-1">
                            <li>Ensure you've created a table named <code className="font-mono bg-amber-100/80 px-1 rounded">bookings</code> in your Supabase project.</li>
                            <li>Ensure RLS (Row Level Security) allows inserts for <code className="font-mono bg-amber-100/80 px-1 rounded">anon</code> (public) roles.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-md mx-auto p-3.5 bg-emerald-50/50 border border-emerald-200/40 text-emerald-950 text-[11px] text-left font-sans">
                      <div className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                        <span className="text-emerald-700 font-medium">Successfully synchronized and stored in your Supabase database</span>
                      </div>
                    </div>
                  )}

                  <p className="font-sans text-xs text-ink/75 max-w-md mx-auto leading-relaxed">
                    We have dispatched a text authorization check to <strong className="text-ink">{clientPhone}</strong>. To accelerate approval, you can also text us directly to confirm this slot.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                    <a
                      href={`sms:+13055550199?body=Hi Oksana, I would like to confirm my Russian Manicure appointment for ${preferredDate} at ${preferredTime}. Value: $${totalPrice.toFixed(2)}`}
                      className="w-full sm:w-auto px-6 py-3.5 bg-burgundy text-cream font-sans font-bold text-xs uppercase tracking-[0.15em] hover:bg-wine transition-all text-center block shadow-md"
                    >
                      Text to Confirm Now
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 border border-bronze/40 text-ink/85 hover:text-burgundy font-sans font-semibold text-xs uppercase tracking-[0.15em] hover:border-burgundy/40 transition-all bg-transparent"
                    >
                      Book Another treatment
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Booking terms / Powered by Square label matching exact instructions */}
          <div className="bg-cream border-t border-bronze/25 px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-[10px] text-ink/60 gap-2 font-medium">
            <span>Powered by <strong className="text-burgundy font-bold">Square</strong> Booking Engine</span>
            <div className="flex gap-4">
              <span className="hover:text-burgundy cursor-pointer">Cancellation Policy</span>
              <span>·</span>
              <span className="hover:text-burgundy cursor-pointer">Cookie Preferences</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
