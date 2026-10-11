import React, { useState, useEffect } from 'react';
import {
  Clock,
  MapPin,
  CheckCircle2,
  Circle,
  ExternalLink,
  AlertTriangle,
  Train,
  Car,
  Utensils,
  Camera,
  Hotel,
  Luggage,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  TIMELINE_RECOMMENDED,
  TIMELINE_DELAYED,
  TIMELINE_MIN_RISK,
  EVENT_DAY_SCHEDULE
} from '../data/travelData';
import { ItineraryVersion, TimelineItem } from '../types/travel';

interface InteractiveTimelineProps {
  currentVersion: ItineraryVersion;
  setCurrentVersion: (v: ItineraryVersion) => void;
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
  currentVersion,
  setCurrentVersion
}) => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // LocalStorage persistence for completed milestone checks
  useEffect(() => {
    try {
      const saved = localStorage.getItem('aswin_mumbai_completed_items');
      if (saved) {
        setCompletedItems(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleItemComplete = (id: string) => {
    setCompletedItems((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('aswin_mumbai_completed_items', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Select timeline dataset based on active scenario
  const getDay1Items = (): TimelineItem[] => {
    switch (currentVersion) {
      case 'delayed':
        return TIMELINE_DELAYED;
      case 'min_risk':
        return TIMELINE_MIN_RISK;
      case 'recommended':
      default:
        return TIMELINE_RECOMMENDED;
    }
  };

  const day1Items = getDay1Items();

  const getItemIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'train':
        return <Train className="w-4 h-4 text-slate-700" />;
      case 'transit':
        return <Car className="w-4 h-4 text-slate-700" />;
      case 'luggage':
        return <Luggage className="w-4 h-4 text-amber-700" />;
      case 'food':
        return <Utensils className="w-4 h-4 text-emerald-700" />;
      case 'sightseeing':
        return <Camera className="w-4 h-4 text-blue-700" />;
      case 'hotel':
        return <Hotel className="w-4 h-4 text-purple-700" />;
      case 'event':
        return <Award className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Scenario & Day Control Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Interactive Timeline</h2>
            <p className="text-xs text-slate-500">
              {activeDay === 'day1'
                ? 'Wednesday, 14 October 2026 · Arrival & South Mumbai'
                : 'Thursday, 15 October 2026 · Innovation Challenge & Return Mail'}
            </p>
          </div>

          {/* Day 1 / Day 2 Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeDay === 'day1'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              14 Oct (Arrival &amp; Sights)
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeDay === 'day2'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              15 Oct (Event &amp; Return)
            </button>
          </div>
        </div>

        {/* Day 1 Version Picker */}
        {activeDay === 'day1' && (
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs font-medium text-slate-600">
              Active Schedule Version:
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setCurrentVersion('recommended')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  currentVersion === 'recommended'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Version 1: Recommended Plan
              </button>
              <button
                onClick={() => setCurrentVersion('delayed')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  currentVersion === 'delayed'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Version 2: Train Delayed (60–90m)
              </button>
              <button
                onClick={() => setCurrentVersion('min_risk')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  currentVersion === 'min_risk'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                Version 3: Minimum Risk
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Version Explanatory Callout */}
      {activeDay === 'day1' && (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-start gap-3">
          <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div>
            {currentVersion === 'recommended' && (
              <p>
                <strong>Recommended Plan:</strong> Deposits 4 suitcases at CSMT Cloakroom at 1:00 PM, tours CSMT facade, Gateway of India, and Marine Drive during sunset (6:05 PM), collects bags at 7:15 PM, and takes a single cab to Treebo Hotel Marol arriving 8:45 PM.
              </p>
            )}
            {currentVersion === 'delayed' && (
              <p>
                <strong>Train Delayed Plan:</strong> In case Train 22160 arrives between 1:30 PM and 2:00 PM, drops leisurely Fort exploration. Fast lunch at station, direct cab to Gateway of India, catches Marine Drive sunset, retrieves bags, and checks into Marol hotel.
              </p>
            )}
            {currentVersion === 'min_risk' && (
              <p>
                <strong>Minimum Risk Plan:</strong> Prioritizes rest and pitch rehearsal. Takes suitcases directly from CSMT to Treebo Hotel Marol at 1:30 PM, checks in at 3:15 PM, relaxes, and spends a gentle evening around Powai Lake / Juhu near the hotel.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Day 1 Timeline Items */}
      {activeDay === 'day1' && (
        <div className="space-y-4">
          {day1Items.map((item, index) => {
            const isCompleted = !!completedItems[item.id];
            const isExpanded = expandedItems[item.id] !== false; // expanded by default

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20 opacity-80'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div className="p-5 sm:p-6">
                  {/* Top Row: Time, Type, Complete Toggle */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleItemComplete(item.id)}
                        className="mt-1 text-slate-400 hover:text-emerald-600 transition-colors"
                        aria-label={isCompleted ? 'Mark incomplete' : 'Mark complete'}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-300" />
                        )}
                      </button>

                      <div>
                        {/* Time & Sequence */}
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 font-mono">
                          <span className="text-slate-900 font-bold">{item.time}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.duration}</span>
                          {item.skippable && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded text-[11px] font-sans font-medium">
                                Skip if running late
                              </span>
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className={`text-base font-bold mt-1 ${
                          isCompleted ? 'line-through text-slate-500' : 'text-slate-900'
                        }`}>
                          {item.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-slate-100 shrink-0">
                        {getItemIcon(item.type)}
                      </div>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Instructions */}
                      <div className="space-y-1.5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          Key Step Instructions:
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {item.keyInstructions.map((inst, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-slate-400">›</span>
                              <span>{inst}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Important Warning */}
                      {item.importantWarning && (
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{item.importantWarning}</span>
                        </div>
                      )}

                      {/* Bottom Action Strip: Cost & Maps Link */}
                      <div className="flex items-center justify-between pt-2 flex-wrap gap-2 text-xs">
                        <div className="text-slate-600 font-mono">
                          {item.approxCostGroup ? (
                            <span>
                              Approx Cost: <strong>₹{item.approxCostGroup}</strong> (for 4 students)
                            </span>
                          ) : (
                            <span className="text-slate-400">No extra fare</span>
                          )}
                        </div>

                        {item.mapsDirectionsUrl && (
                          <a
                            href={item.mapsDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-slate-950 underline"
                          >
                            <span>Open Directions in Google Maps</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Day 2 (15 Oct Event Day) Timeline */}
      {activeDay === 'day2' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
            <strong>Event Day Protocol:</strong> Sahamati Innovation Challenge begins at 9:00 AM at Grand Hyatt Mumbai. Check out of Treebo Hotel early at 7:45 AM and deposit 4 suitcases at Grand Hyatt Bell Desk to save evening detour time.
          </div>

          {EVENT_DAY_SCHEDULE.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-bold font-mono text-slate-500">
                    {item.time}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-100 shrink-0">
                  <Award className="w-4 h-4 text-slate-700" />
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}

          {/* Prompt to view Event Closing Scenarios */}
          <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-3">
            <h4 className="text-base font-bold">
              Unknown Event End Time? Check All Departure Scenarios
            </h4>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Simulate 5:00 PM, 6:00 PM, 7:00 PM, and 8:00 PM finish times with traffic buffers to reach CSMT for the 10:52 PM train.
            </p>
            <a
              href="#event-scenarios"
              onClick={(e) => {
                e.preventDefault();
                const eventTab = document.querySelector('button[aria-label="Event Day (Oct 15)"]') as HTMLElement;
                if (eventTab) eventTab.click();
              }}
              className="inline-block px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
            >
              Open Event Day Scenarios
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
