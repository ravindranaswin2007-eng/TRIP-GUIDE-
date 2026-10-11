import React, { useState } from 'react';
import {
  Car,
  Train,
  Navigation,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Zap,
  Info
} from 'lucide-react';
import { LOCATIONS } from '../data/travelData';

export const TransportGuide: React.FC = () => {
  const [selectedTransitTopic, setSelectedTransitTopic] = useState<string>('cabs_vs_metro');

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
          <span>First-Time Visitor Handbook</span>
          <span aria-hidden="true">·</span>
          <span>Simple English Guide</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Mastering Mumbai Transport in 5 Minutes
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Mumbai has world-famous transit, but unique rules that catch newcomers off-guard.
          Here is exactly how taxis, autos, metro, and local trains work for a group of 4 students.
        </p>
      </div>

      {/* The #1 Rule: No Autos in South Mumbai */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-amber-200 text-amber-950 shrink-0 mt-0.5">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
            Golden Rule for South Mumbai
          </div>
          <h3 className="text-base font-bold text-slate-900 mt-0.5">
            Auto-Rickshaws Are Banned in South Mumbai!
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
            You will NOT see a single auto-rickshaw at CSMT, Gateway of India, Fort, or Marine Drive.
            By Mumbai law, auto-rickshaws are strictly prohibited south of Bandra and Sion.
            In South Mumbai, your transport is strictly <strong>Kaali-Peeli (Black-and-Yellow) Taxis</strong> or app-based cabs.
            Auto-rickshaws are permitted only in the suburbs (around your hotel in Marol, Andheri, Juhu, and Powai).
          </p>
        </div>
      </div>

      {/* The 4-Person Cost Secret: Cabs vs Metro */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Logistical Insight
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Why Taxis Beat the Metro for 4 Students in South Mumbai
            </h3>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Cheaper &amp; Faster Door-to-Door
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Solo travelers usually take trains to save money. But when you are a <strong>group of 4 students</strong>, math works in your favor:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Card 1: Taking Public Transit */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700">Option 1: 4 Bus / Metro Tickets</span>
              <span className="font-mono text-slate-500">Public Transit</span>
            </div>
            <div className="text-sm font-bold text-slate-900">
              ₹20 – ₹30 per person × 4 = ₹80 – ₹120 total
            </div>
            <p className="text-xs text-slate-600">
              Requires walking 400m to station, queueing at ticket counter, waiting for train/bus, and walking another 500m to destination.
            </p>
          </div>

          {/* Card 2: Taking One Taxi */}
          <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/50 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-900">Option 2: 1 Kaali-Peeli Taxi for All 4</span>
              <span className="font-mono font-bold text-emerald-800">RECOMMENDED</span>
            </div>
            <div className="text-sm font-bold text-emerald-950 font-mono">
              ₹60 – ₹85 total (₹15 – ₹21 per student!)
            </div>
            <p className="text-xs text-slate-700">
              Hail instantly from the curb. Drops all 4 students right at Gateway of India or Marine Drive without walking in heat.
            </p>
          </div>
        </div>
      </div>

      {/* Transit Mode Encyclopedic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Kaali-Peeli Taxis */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Car className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-slate-900 text-base">Kaali-Peeli (Black &amp; Yellow) Taxis</h4>
            </div>
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              Base: ₹28
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            The classic non-AC Premier Padmini or Santro/WagonR taxis. They operate everywhere across South Mumbai.
          </p>
          <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>How to flag:</strong> Raise your hand from the footpath. Say destination: "Gateway", "Marine Drive", or "CSMT".</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Meter rule:</strong> Ask "Meter se chaloge?" (Will you go by meter?). The driver must reset the electronic meter to ₹28.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Capacity:</strong> Officially seats 4 passengers + driver. Perfect for your group!</span>
            </div>
          </div>
        </div>

        {/* Mumbai Metro Line 1 & Line 3 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <h4 className="font-bold text-slate-900 text-base">Mumbai Metro (Marol Naka Hub)</h4>
            </div>
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              ₹10 – ₹40
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Modern, air-conditioned rapid transit. Your hotel (Treebo Empire Suite) is located right beside <strong>Marol Naka Metro Station</strong> (180m walk).
          </p>
          <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Line 1 (Blue Line):</strong> Connects Ghatkopar (Central line interchange) to Andheri (Western line interchange).</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Line 3 (Aqua Line):</strong> Underground line running through Marol Naka towards BKC.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Ticketing:</strong> Buy QR paper tickets or tap WhatsApp ticketing QR codes at station gates.</span>
            </div>
          </div>
        </div>

        {/* Mumbai Suburban Local Trains */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Train className="w-5 h-5 text-purple-600" />
              <h4 className="font-bold text-slate-900 text-base">Suburban Local Trains ("Locals")</h4>
            </div>
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              ₹5 – ₹15
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            The legendary lifeline of Mumbai. Fastest way through north-south traffic, but requires precautions when travelling with luggage.
          </p>
          <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Fast vs Slow:</strong> "Fast locals" skip minor stations. From CSMT, take Fast Local to Ghatkopar (only 32 mins!).</span>
            </div>
            <div className="flex items-start gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Rush Hour Warning:</strong> Between 5:00 PM and 8:30 PM, northbound trains are extremely crowded. Never attempt boarding with 4 suitcases! Use cabs instead.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>UTS App:</strong> You can book unreserved local train tickets on UTS mobile app to skip queues.</span>
            </div>
          </div>
        </div>

        {/* App Cabs (Uber / Ola) */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-slate-700" />
              <h4 className="font-bold text-slate-900 text-base">Uber XL / Ola Prime SUV</h4>
            </div>
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              ₹500 – ₹700
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Essential for the long cross-city journeys with <strong>4 large suitcases</strong>.
          </p>
          <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>When to use:</strong> CSMT to Hotel Marol on Oct 14 evening (with 4 bags), and Grand Hyatt to CSMT on Oct 15 night.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Vehicle choice:</strong> Select <strong>Uber XL</strong> (Ertiga / Innova / XL6) so that all 4 suitcases fit safely into the trunk.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Routes:</strong> Ask driver to take the <strong>Eastern Freeway</strong> or <strong>Bandra-Worli Sea Link</strong> for fastest flow.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Transit Route Cheatsheet */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Door-to-Door Route Cheatsheet
        </h3>
        <div className="divide-y divide-slate-100 text-xs">
          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900">CSMT Station ➔ Gateway of India</span>
              <div className="text-slate-500">2.3 km · ~12 mins</div>
            </div>
            <div className="font-mono text-slate-700">Kaali-Peeli Taxi (₹60–₹80 total for 4)</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=CSMT+Mumbai&destination=Gateway+of+India+Mumbai&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline font-semibold flex items-center gap-1"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900">Gateway of India ➔ Marine Drive</span>
              <div className="text-slate-500">2.5 km · ~10 mins via Veer Nariman Rd</div>
            </div>
            <div className="font-mono text-slate-700">Kaali-Peeli Taxi (₹70–₹90 total for 4)</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Gateway+of+India+Mumbai&destination=Marine+Drive+Mumbai&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline font-semibold flex items-center gap-1"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900">Marine Drive ➔ CSMT Cloakroom</span>
              <div className="text-slate-500">2.2 km · ~10 mins</div>
            </div>
            <div className="font-mono text-slate-700">Kaali-Peeli Taxi (₹60–₹80 total for 4)</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Marine+Drive+Mumbai&destination=CSMT+Mumbai&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline font-semibold flex items-center gap-1"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900">Treebo Hotel Marol ➔ Grand Hyatt Mumbai</span>
              <div className="text-slate-500">6.5 km · ~25–30 mins (Morning rush)</div>
            </div>
            <div className="font-mono text-slate-700">Uber / Auto / Taxi (₹150–₹250 total for 4)</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Treebo+Empire+Suite+Balaji+Business+Park+Mumbai&destination=Grand+Hyatt+Mumbai+Santacruz+East&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline font-semibold flex items-center gap-1"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-bold text-slate-900">Grand Hyatt Mumbai ➔ CSMT Station</span>
              <div className="text-slate-500">18 km · ~55–70 mins via Sea Link / Freeway</div>
            </div>
            <div className="font-mono text-slate-700">Uber XL / Cab (₹450–₹600 total for 4)</div>
            <a
              href="https://www.google.com/maps/dir/?api=1&origin=Grand+Hyatt+Mumbai+Santacruz+East&destination=Chhatrapati+Shivaji+Maharaj+Terminus+Mumbai&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 underline font-semibold flex items-center gap-1"
            >
              <span>Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
