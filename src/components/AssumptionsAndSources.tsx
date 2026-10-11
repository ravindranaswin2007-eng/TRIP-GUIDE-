import React from 'react';
import {
  FileSearch,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { RESEARCH_VERIFICATIONS, LOCATIONS } from '../data/travelData';

export const AssumptionsAndSources: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
          <span>Integrity &amp; Research Audit</span>
          <span aria-hidden="true">·</span>
          <span>Verified vs Assumptions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Source Verification &amp; Planning Assumptions
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Because your trip takes place in <strong>October 2026</strong>, we rigorously distinguish verified ground realities from future assumptions.
          No policies or schedules have been fabricated.
        </p>
      </div>

      {/* Verified vs Assumptions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">
            Logistics Verification Matrix
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Cross-referenced against Mumbai Metropolitan Region transport baselines and official Indian Railways regulations.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {RESEARCH_VERIFICATIONS.map((item, index) => (
            <div key={index} className="p-6 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.topic}
                </h4>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  item.status === 'Verified'
                    ? 'text-emerald-800 bg-emerald-100'
                    : 'text-amber-800 bg-amber-100'
                }`}>
                  {item.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.verifiedFact}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-slate-500 font-mono">
                <div>Metric / Distance: <strong className="text-slate-800">{item.distanceOrTiming}</strong></div>
                <div className="text-slate-600 font-sans">Source: {item.sourceType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explicit List of Assumptions & Unresolved Details */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-slate-700" />
            <span>Explicit Assumptions &amp; Unresolved Action Items</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Details that must be confirmed by Aswin and team upon arrival or closer to travel date.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
            <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Assumption 1: Hotel Reception in Commercial Complex</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Detail:</strong> Treebo Empire Suite is located on Room 802, 8th floor of Balaji Business Park. While commercial buildings have 24/7 security, confirm in advance if the 8th floor front desk accepts early luggage drops if you ever check in early.
            </p>
            <div className="text-[11px] text-slate-600 font-semibold">
              Action: Call Treebo customer support (+91 93228 00100) 2 days before arrival to re-confirm 4-person room booking.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
            <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Assumption 2: Return Train RAC to Confirmed Status</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Detail:</strong> Train 22157 (CSMT MAS Mail) ticket status was RAC when booked. In 3A class, RAC tickets allow boarding the train and provide a shared seat/berth, but may confirm to full sleeper berths when chart is prepared 4 hours before departure (~6:30 PM on Oct 15).
            </p>
            <div className="text-[11px] text-slate-600 font-semibold">
              Action: Keep PNR handy and verify via official IRCTC / NTES chart checking at 6:30 PM.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
            <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Assumption 3: Event Finishing Hour</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Detail:</strong> The Sahamati Financial Services Innovation Challenge begins at 9:00 AM on 15 Oct. The exact ceremony end is unspecified.
            </p>
            <div className="text-[11px] text-slate-600 font-semibold">
              Action: Check the day schedule during morning registration at Grand Hyatt and activate the corresponding departure scenario in the app.
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
            <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Assumption 4: Suitcase Padlocks Prepared Ahead</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Detail:</strong> Indian Railways Cloakroom strictly rejects un-locked suitcases.
            </p>
            <div className="text-[11px] text-slate-600 font-semibold">
              Action: Buy 4 small brass padlocks with duplicate keys in Chennai before boarding Train 22160 on 13 October.
            </div>
          </div>
        </div>
      </div>

      {/* Official Government & Transport Source Links */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Official Direct Verification Portals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs">
          <a
            href="https://www.indianrail.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-slate-900">Indian Railways Passenger Portal</div>
              <div className="text-slate-500 text-[11px]">Official PNR &amp; Train Schedules</div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 shrink-0" />
          </a>

          <a
            href="https://enquiry.indianrail.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-slate-900">National Train Enquiry System (NTES)</div>
              <div className="text-slate-500 text-[11px]">Live Train Running Status</div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 shrink-0" />
          </a>

          <a
            href="https://www.mmrcl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between group"
          >
            <div>
              <div className="font-bold text-slate-900">Mumbai Metro Rail (MMRCL)</div>
              <div className="text-slate-500 text-[11px]">Marol Naka Line 1 &amp; Line 3</div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
