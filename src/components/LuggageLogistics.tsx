import React, { useState } from 'react';
import {
  Luggage,
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lock,
  FileText,
  BadgeAlert
} from 'lucide-react';
import { LUGGAGE_PLANS, TRAVELERS, LOCATIONS } from '../data/travelData';

export const LuggageLogistics: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan_b');
  const [suitcasesLocked, setSuitcasesLocked] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
    '3': true,
    '4': true
  });

  const toggleSuitcaseLock = (id: string) => {
    setSuitcasesLocked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const allLocked = Object.values(suitcasesLocked).every(Boolean);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
          <span>Logistics Priority #1</span>
          <span aria-hidden="true">·</span>
          <span>4 Suitcases Problem Solved</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Luggage Storage Strategy &amp; Route Comparison
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Four college students with four large suitcases cannot sightsee at Gateway of India or Marine Drive.
          Here is the mathematical and logistical comparison between traveling to your Marol hotel first vs using the verified CSMT Railway Cloakroom.
        </p>
      </div>

      {/* Mandatory Lock Warning */}
      <div className={`p-5 rounded-2xl border transition-colors ${
        allLocked
          ? 'bg-emerald-50 border-emerald-200'
          : 'bg-rose-50 border-rose-300'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`p-2.5 rounded-xl shrink-0 ${
            allLocked ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
          }`}>
            <Lock className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Indian Railways Mandatory Cloakroom Rule: Physical Padlocks</span>
                {allLocked && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Verified Ready
                  </span>
                )}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              By Indian Railways regulation, <strong>no un-locked luggage is accepted</strong> at any railway cloakroom.
              Suitcases must have either a working built-in mechanical combination lock or a physical keyed padlock looped through the zipper pullers.
            </p>

            {/* Suitcase Check Toggles */}
            <div className="mt-4 pt-3 border-t border-slate-200/80">
              <div className="text-xs font-semibold text-slate-800 mb-2">
                Verify Lock Status for Each Student's Suitcase:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {TRAVELERS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => toggleSuitcaseLock(t.id)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                      suitcasesLocked[t.id]
                        ? 'bg-white border-emerald-300 text-emerald-950 shadow-xs'
                        : 'bg-white border-rose-300 text-rose-950 shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{t.name}</div>
                      <div className="text-[11px] text-slate-500">Suitcase #{t.id}</div>
                    </div>
                    {suitcasesLocked[t.id] ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <BadgeAlert className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Comparison Tabs & Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Detailed Plan Comparison (Plan A vs Plan B vs Plan C)
            </h3>
            <p className="text-xs text-slate-500">
              Calculated for 4 passengers landing at CSMT at 12:30 PM on 14 October
            </p>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {LUGGAGE_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-slate-900 ring-2 ring-slate-900/10 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-700">
                      {plan.id === 'plan_b' ? 'ENGINEERED CHOICE' : 'ALTERNATIVE'}
                    </span>
                    {plan.recommended && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {plan.subtitle}
                  </p>

                  {/* Quantitative Metrics */}
                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50">
                      <div className="text-slate-500 text-[11px]">Travel Time Wasted</div>
                      <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                        {plan.totalTravelTimeMinutes} mins
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50">
                      <div className="text-slate-500 text-[11px]">Road Distance</div>
                      <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                        {plan.totalRoadDistanceKm} km
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50">
                      <div className="text-slate-500 text-[11px]">Cost for 4 People</div>
                      <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                        ₹{plan.costGroup}
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50">
                      <div className="text-slate-500 text-[11px]">Hotel Arrival</div>
                      <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                        {plan.hotelArrivalTime}
                      </div>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="mt-4 space-y-2">
                    <div className="text-xs font-semibold text-slate-900">Why this matters:</div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {plan.pros.slice(0, 2).map((pro, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                      {plan.cons.slice(0, 1).map((con, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    {isSelected ? 'Currently Selected' : 'Click to View'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive into Plan B (CSMT Cloakroom) */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Verified Station Facility</span>
            <span aria-hidden="true">·</span>
            <span>Platform 1 Concourse</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Official CSMT Railway Cloak Room Operational Guide
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            The cloakroom is operated directly by Central Railway. It is the most secure, economical, and logistically sound storage facility in South Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <Clock className="w-4 h-4 text-slate-700" />
              <span>Timings &amp; Availability</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Open <strong>24 hours daily</strong>. Closed briefly only for shift staff handovers (typically 08:00–08:30 AM, 04:00–04:30 PM, and 08:00–08:30 PM). Plan drop-off at 1:00 PM and pickup at 7:15 PM without conflict.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <FileText className="w-4 h-4 text-slate-700" />
              <span>Documents Required</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Must present train tickets: Arrival ticket (Train 22160 MAS-CSMT) or onward ticket (Train 22157 CSMT-MAS) along with a valid Govt ID (Aadhaar / Voter ID / College ID) of at least one student.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span>Official Tariff</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Approximately <strong>₹30 per bag</strong> for the first 24 hours. For 4 suitcases, total cost is <strong>₹120</strong>. Payment is made in cash or UPI at the parcel/cloak counter. Keep paper token safe!
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-slate-800 space-y-1.5">
          <div className="font-bold text-amber-950 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-800" />
            <span>Luggage Retrieval Safeguard</span>
          </div>
          <p>
            When collecting the suitcases at 7:15 PM, designate <strong>Bhavananthan M</strong> (Luggage Lead) and <strong>Aswin R</strong> to present tokens, while Dinesh and Priyadharshini wait in the concourse. Photograph each metal token on your phones immediately upon drop-off in case a physical paper slip is misplaced.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
          <a
            href={LOCATIONS.csmt.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1.5"
          >
            <span>View CSMT Cloakroom Location on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Day 2 (15 Oct Event Day) Luggage Logistics */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Event Day Logistics</span>
            <span aria-hidden="true">·</span>
            <span>15 October 2026</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Day 2 Suitcase Handling: Grand Hyatt Bell Desk vs Hotel Storage
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            On Thursday morning, you must check out of Treebo Empire Suite before the 11:00 AM deadline. Two options exist:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option C: Grand Hyatt Bell Desk */}
          <div className="p-5 rounded-xl border border-emerald-300 bg-emerald-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800">RECOMMENDED (OPTION C)</span>
              <span className="text-[11px] font-semibold text-emerald-700">Saves 45 mins</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Bring 4 Suitcases Directly to Grand Hyatt Bell Desk
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Check out at 7:45 AM, load all 4 suitcases into the morning taxi to Grand Hyatt (6.5 km, 25 mins). Grand Hyatt's 24/7 Concierge / Bell Desk stores luggage for registered delegates free of charge.
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-emerald-200 text-xs text-slate-700">
              <strong>Massive Benefit:</strong> When the Sahamati Challenge concludes, your suitcases are already with you at Santacruz/BKC. You can proceed directly to CSMT without driving back north to Marol!
            </div>
          </div>

          {/* Option B: Leave at Treebo */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600">ALTERNATIVE (OPTION B)</span>
              <span className="text-[11px] font-semibold text-amber-700">Requires Detour</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Leave Suitcases at Treebo Hotel Reception Desk
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Check out at 7:45 AM, deposit suitcases with Room 802 reception on the 8th floor of Balaji Business Park. Travel light to Grand Hyatt.
            </p>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700">
              <strong>Major Drawback:</strong> After the event ends, you must take a 30-min taxi from Grand Hyatt back north to Marol, pick up your bags, and then take an 80-min cab back south to CSMT, losing 45–60 minutes in evening traffic.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
