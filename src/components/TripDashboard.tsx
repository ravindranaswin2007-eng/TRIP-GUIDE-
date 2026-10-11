import React from 'react';
import {
  Train,
  Hotel,
  Award,
  Luggage,
  Clock,
  MapPin,
  ExternalLink,
  Users,
  Compass,
  AlertTriangle,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { TRAVELERS, LOCATIONS, IMAGES } from '../data/travelData';
import { ItineraryVersion } from '../types/travel';

interface TripDashboardProps {
  currentVersion: ItineraryVersion;
  setCurrentVersion: (v: ItineraryVersion) => void;
  onNavigateTab: (tab: string) => void;
  onStartJourney: () => void;
}

export const TripDashboard: React.FC<TripDashboardProps> = ({
  currentVersion,
  setCurrentVersion,
  onNavigateTab,
  onStartJourney
}) => {
  return (
    <div className="space-y-8">
      {/* Hero Section with Visual Landmarks */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-900 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
          {/* Left Text Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wide uppercase">
                <span>Personal Travel Itinerary</span>
                <span aria-hidden="true">·</span>
                <span>13 – 16 October 2026</span>
                <span aria-hidden="true">·</span>
                <span>Chennai to Mumbai</span>
              </div>

              <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white max-w-xl text-balance">
                Mumbai Logistics &amp; Innovation Challenge Planner
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Tailored for <strong className="text-white">Aswin</strong> and the 4-student delegation.
                Engineered for smooth suitcase handling, South Mumbai heritage sights, and reaching Grand Hyatt Mumbai on time for the Sahamati Challenge.
              </p>

              {/* Version Selector */}
              <div className="mt-6">
                <div className="text-xs font-medium text-slate-400 mb-2">
                  Select Active Timeline Scenario:
                </div>
                <div className="inline-flex p-1 bg-slate-800/90 rounded-xl border border-slate-700/60 max-w-full overflow-x-auto">
                  <button
                    onClick={() => setCurrentVersion('recommended')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      currentVersion === 'recommended'
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Recommended (Plan B)
                  </button>
                  <button
                    onClick={() => setCurrentVersion('delayed')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      currentVersion === 'delayed'
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Train Delayed (60–90m)
                  </button>
                  <button
                    onClick={() => setCurrentVersion('min_risk')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      currentVersion === 'min_risk'
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Minimum Risk (Extra Rest)
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <button
                onClick={onStartJourney}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <Compass className="w-4 h-4" />
                <span>Start Step-by-Step Journey</span>
              </button>
              <button
                onClick={() => onNavigateTab('luggage')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 transition-colors border border-slate-700"
              >
                <Luggage className="w-4 h-4 text-amber-400" />
                <span>Luggage Solution</span>
              </button>
              <button
                onClick={() => onNavigateTab('event')}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 transition-colors border border-slate-700"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Event Day Navigator</span>
              </button>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent z-10" />
            <img
              src={IMAGES.gateway}
              alt="Gateway of India during golden hour"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 text-right">
              <div className="text-xs font-semibold text-white">Gateway of India &amp; Taj</div>
              <div className="text-[11px] text-slate-400">South Mumbai Heritage Cluster</div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Station & RAC Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Return Train Window Alert */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900 shrink-0 mt-0.5">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wide">
              <span>Return Train Buffer Window</span>
              <span aria-hidden="true">·</span>
              <span>15 October 2026</span>
            </div>
            <h2 className="text-base font-bold text-slate-900 mt-0.5">
              Target CSMT Arrival: 09:15 PM – 09:30 PM
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              Train <strong className="font-semibold text-slate-900">22157 CSMT MAS Mail</strong> departs at <span className="font-semibold">10:52 PM</span>.
              Reaching CSMT by 9:30 PM gives an 82–97 minute safety margin against Mumbai night traffic, baggage collection delays, and platform navigation.
            </p>
          </div>
        </div>

        {/* RAC Status Warning */}
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-rose-100 text-rose-900 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-900 uppercase tracking-wide">
              <span>Ticket Verification Warning</span>
              <span aria-hidden="true">·</span>
              <span>3A Class RAC Ticket</span>
            </div>
            <h2 className="text-base font-bold text-slate-900 mt-0.5">
              Check PNR Status on 15 Oct (RAC Booked)
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              Ticket was booked under RAC (Reservation Against Cancellation). Do not assume full berth confirmation. Chart preparation occurs ~4 hours before departure (around 6:30 PM). Check official NTES / IRCTC status before heading to the platform.
            </p>
            <a
              href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-rose-800 hover:text-rose-950 underline"
            >
              <span>Check Official Indian Railways PNR</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 4 Travelers delegation */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-700" />
              <span>Student Delegation (4 Travelers)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              First-time Mumbai visitors · 4 suitcases (1 per student)
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('checklist')}
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
          >
            <span>View Member Checklist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {TRAVELERS.map((t) => (
            <div
              key={t.id}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm shrink-0">
                {t.initials}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-slate-900 truncate">{t.name}</div>
                <div className="text-xs text-slate-500 truncate">{t.role}</div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">1 Suitcase + Backpack</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Pillars of the Trip (Train, Hotel, Event, Luggage) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Outbound Train Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Outbound Train</span>
              <Train className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-base font-bold text-slate-900">MAS CSMT SF Express</div>
            <div className="text-xs text-slate-600 mt-1">Train #22160 · 3E Economy AC</div>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Depart MAS (Chennai):</span>
                <span className="font-semibold text-slate-900 font-mono">1:15 PM (13 Oct)</span>
              </div>
              <div className="flex justify-between">
                <span>Scheduled CSMT:</span>
                <span className="font-semibold text-slate-900 font-mono">12:30 PM (14 Oct)</span>
              </div>
              <div className="flex justify-between text-amber-700">
                <span>Delay Contingency:</span>
                <span className="font-medium font-mono">60–90 min buffer</span>
              </div>
            </div>
          </div>
          <a
            href={LOCATIONS.csmt.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between"
          >
            <span>CSMT Station Map</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hotel Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Hotel Accommodation</span>
              <Hotel className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-base font-bold text-slate-900">Treebo Empire Suite</div>
            <div className="text-xs text-slate-600 mt-1">Room 802, Balaji Business Park</div>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Area:</span>
                <span className="font-semibold text-slate-900">Marol / Andheri East</span>
              </div>
              <div className="flex justify-between">
                <span>Nearest Metro:</span>
                <span className="font-semibold text-slate-900">Marol Naka (180m walk)</span>
              </div>
              <div className="flex justify-between">
                <span>Check-in / Check-out:</span>
                <span className="font-mono">12 PM / 11 AM</span>
              </div>
            </div>
          </div>
          <a
            href={LOCATIONS.treeboHotel.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between"
          >
            <span>Hotel Location Map</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Event Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Event Challenge</span>
              <Award className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-base font-bold text-slate-900">Sahamati Challenge 2026</div>
            <div className="text-xs text-slate-600 mt-1">SamvAAd 2026 Innovation Event</div>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-semibold text-slate-900 font-mono">15 Oct 2026</span>
              </div>
              <div className="flex justify-between">
                <span>Venue:</span>
                <span className="font-semibold text-slate-900">Grand Hyatt Mumbai</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Start Time:</span>
                <span className="font-bold font-mono">09:00 AM (Arrive 8:30)</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('event')}
            className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between w-full text-left"
          >
            <span>Scenarios &amp; Directions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Luggage Strategy Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-700">Luggage Strategy</span>
              <Luggage className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-base font-bold text-slate-900">Plan B: Station Cloakroom</div>
            <div className="text-xs text-slate-600 mt-1">Saves 3 hours of city backtracking</div>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Oct 14:</span>
                <span className="font-semibold text-slate-900">CSMT Cloakroom (₹120)</span>
              </div>
              <div className="flex justify-between">
                <span>Oct 15:</span>
                <span className="font-semibold text-slate-900">Grand Hyatt Bell Desk</span>
              </div>
              <div className="flex justify-between text-amber-700">
                <span>Requirement:</span>
                <span className="font-semibold">Padlocks on all 4 bags</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigateTab('luggage')}
            className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between w-full text-left"
          >
            <span>Compare Logistics Plans</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Recommended Itinerary Summary Strip */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Optimal Flow
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              How Your Mumbai Trip Unfolds
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Carefully scheduled to eliminate dead travel and maximize rest before competition day.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('timeline')}
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors flex items-center gap-2"
          >
            <span>Open Detailed Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Milestone 1 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="font-mono">14 OCT · 12:30 PM</span>
              <span aria-hidden="true">·</span>
              <span>CSMT Arrival</span>
            </div>
            <h4 className="text-base font-bold text-white">
              De-board &amp; Store Bags at CSMT
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Drop 4 suitcases at CSMT Official Cloakroom (~₹120 total). Eat famous puri thalis at Pancham Puriwala across the street. Photo at CSMT Gothic facade.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="font-mono">14 OCT · 02:45 PM – 07:15 PM</span>
              <span aria-hidden="true">·</span>
              <span>South Mumbai</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Gateway, Marine Drive &amp; Hotel Cab
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Metered taxi to Gateway of India &amp; Taj Palace. Taxi to Marine Drive for 6:05 PM sunset. Cab back to CSMT, collect 4 bags, take cab directly to Treebo Hotel in Marol.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="font-mono">15 OCT · 08:30 AM – 10:52 PM</span>
              <span aria-hidden="true">·</span>
              <span>Challenge &amp; Train</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Grand Hyatt Event &amp; Return Mail
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Check out at 7:45 AM with bags. Deposit bags at Grand Hyatt Bell Desk. Compete at Sahamati Innovation Challenge. Cab to CSMT by 9:15–9:30 PM. Board train 22157.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Landmarks Strip */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Key Places on Your Route</h3>
            <p className="text-xs text-slate-500">Verified locations with direct Google Maps directions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: CSMT */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="h-44 relative bg-slate-100 overflow-hidden">
              <img
                src={IMAGES.csmt}
                alt="CSMT Railway Station facade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white">
                Arrival &amp; Departure Hub
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Chhatrapati Shivaji Maharaj Terminus</h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {LOCATIONS.csmt.description}
                </p>
                <div className="text-xs text-slate-500 mt-2 font-mono">
                  Official Cloakroom · Platform 1 side · Open 24/7
                </div>
              </div>
              <a
                href={LOCATIONS.csmt.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Gateway of India */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="h-44 relative bg-slate-100 overflow-hidden">
              <img
                src={IMAGES.gateway}
                alt="Gateway of India and Taj Mahal Palace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white">
                South Mumbai Heritage
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Gateway of India &amp; Taj Hotel</h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {LOCATIONS.gatewayOfIndia.description}
                </p>
                <div className="text-xs text-slate-500 mt-2 font-mono">
                  2.3 km from CSMT · ₹60–₹80 taxi for 4 · Free entry
                </div>
              </div>
              <a
                href={LOCATIONS.gatewayOfIndia.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Marine Drive */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="h-44 relative bg-slate-100 overflow-hidden">
              <img
                src={IMAGES.marineDrive}
                alt="Marine Drive Queens Necklace at sunset"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-white">
                Sunset &amp; Promenade
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Marine Drive (Queen's Necklace)</h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {LOCATIONS.marineDrive.description}
                </p>
                <div className="text-xs text-slate-500 mt-2 font-mono">
                  Sunset ~6:05 PM · 2.2 km from CSMT · Sea breeze
                </div>
              </div>
              <a
                href={LOCATIONS.marineDrive.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center justify-between"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
