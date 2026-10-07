import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Calendar, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const VisitSection: React.FC = () => {
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2026-10-08');
  const [time, setTime] = useState('10:00');
  const [experience, setExperience] = useState('Table for Coffee & Brunch');

  const address = import.meta.env.VITE_CAFE_ADDRESS || "412 Roaster's Way, Portland, OR 97201";
  const phone = import.meta.env.VITE_CAFE_PHONE || "(555) 742-9831";
  const email = import.meta.env.VITE_CAFE_EMAIL || "hello@thedailygrindcafe.com";

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
      setReserveModalOpen(false);
      setName('');
    }, 2500);
  };

  return (
    <section id="visit" className="py-20 lg:py-28 bg-[#201712] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hours & Info */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B2A20] border border-[#523B2D] text-[#DE9B52] text-xs font-semibold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" />
                Find Us in Portland
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
                Visit Our Roastery & Espresso Bar
              </h2>
              <p className="text-[#C4B5A5] text-sm sm:text-base font-light mt-3 leading-relaxed">
                Located in the historic Eastside Industrial District, just across the Hawthorne Bridge. Free customer bike parking and on-street EV charging nearby.
              </p>
            </div>

            {/* Hours Table */}
            <div className="p-6 rounded-2xl bg-[#2B1F17] border border-[#523B2D] space-y-4">
              <div className="flex items-center justify-between border-b border-[#3B2A20] pb-3">
                <div className="flex items-center gap-2 text-[#DE9B52]">
                  <Clock className="w-4 h-4" />
                  <span className="font-serif font-bold text-sm">Weekly Roastery Hours</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-[11px] font-bold">
                  ● Currently Open
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-[#EAD8C7]">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-white">6:30 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-[#EAD8C7]">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-[#EAD8C7]">
                  <span>Sunday</span>
                  <span className="font-semibold text-white">7:30 AM – 5:00 PM</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#3B2A20] text-[11px] text-[#A6978A]">
                ★ Public Roasting Demonstrations every Tuesday & Thursday at 10:30 AM.
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#2B1F17] border border-[#523B2D] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#3B2A20] flex items-center justify-center text-[#DE9B52] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#9E8E81] uppercase font-semibold">Address</p>
                  <p className="text-xs font-medium text-white">{address}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#2B1F17] border border-[#523B2D] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#3B2A20] flex items-center justify-center text-[#DE9B52] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#9E8E81] uppercase font-semibold">Phone</p>
                  <p className="text-xs font-medium text-white">{phone}</p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setReserveModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-[#C87941] hover:bg-[#b56b37] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Reserve Table or Tasting Flight
              </button>
            </div>
          </div>

          {/* Right Visual Image & Map Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border-2 border-[#3B2A20] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85"
                alt="Front cafe entrance of The Daily Grind with warm morning light"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201712] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#201712]/90 backdrop-blur-md border border-[#523B2D]">
                <p className="font-serif font-bold text-base text-white">Eastside Roastery & Cafe</p>
                <p className="text-xs text-[#C4B5A5] mt-1">
                  Walking distance from the Eastbank Esplanade and Portland Streetcar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {reserveModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-[#FAF7F2] text-[#201712] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#E8DEC8]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C87941]">
                  Hospitality Bookings
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#201712]">Reserve an Experience</h3>
              </div>
              <button
                onClick={() => setReserveModalOpen(false)}
                className="p-1 rounded-full hover:bg-[#EFE7DC] text-[#7E7267] cursor-pointer"
              >
                ✕
              </button>
            </div>

            {reserved ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#201712]">Reservation Confirmed!</h4>
                <p className="text-xs text-[#6B5C50]">
                  Thank you, {name || 'guest'}. We’ve reserved your experience for {date} at {time}. A confirmation was sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReserve} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-[#3B2A20] mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Smith"
                    className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712] focus:outline-none focus:ring-2 focus:ring-[#C87941]/30"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2A20] mb-1">Experience Type</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712] focus:outline-none"
                  >
                    <option>Table for Coffee & Brunch (Walk-in Hold)</option>
                    <option>Head Roaster 3-Origin Cupping Flight ($15/person)</option>
                    <option>Quiet Co-Working Communal Table</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#3B2A20] mb-1">Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712]"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#3B2A20] mb-1">Time</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#3B2A20] mb-1">Number of Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#E8DEC8] bg-white text-[#201712]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="4">3 - 4 People</option>
                    <option value="6">5 - 8 People (Group Table)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#C87941] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#b56b37] transition-colors mt-2 cursor-pointer shadow-md"
                >
                  Confirm Table Booking
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
