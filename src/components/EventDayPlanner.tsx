import React, { useState } from 'react';
import {
  Award,
  Clock,
  MapPin,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Train,
  Car,
  Luggage,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { EVENT_SCENARIOS, LOCATIONS } from '../data/travelData';

export const EventDayPlanner: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(1); // 6:00 PM by default
  const [customFinishHour, setCustomFinishHour] = useState<number>(18); // 18:00 (6 PM)
  const [useCustomSlider, setUseCustomSlider] = useState<boolean>(false);

  const activeScenario = EVENT_SCENARIOS[selectedScenarioIndex];

  // Dynamic calculations for custom slider
  const calculateCustomScenario = (finishHour: number) => {
    // finishHour e.g. 17.5 = 5:30 PM
    const totalMinutesFromMidnight = Math.round(finishHour * 60);
    const luggageCollect = 15;
    // Evening traffic from Santacruz East to CSMT peaks around 6:30-8:30 PM
    let travelToCsmt = 65;
    if (finishHour >= 18 && finishHour <= 20) travelToCsmt = 75; // Peak evening rush
    if (finishHour > 20.5) travelToCsmt = 50; // Late night easing

    const csmtArrivalMinutes = totalMinutesFromMidnight + luggageCollect + travelToCsmt;
    const trainDepartureMinutes = 22 * 60 + 52; // 10:52 PM = 1372 mins
    const buffer = trainDepartureMinutes - csmtArrivalMinutes;

    const arrivalHour = Math.floor(csmtArrivalMinutes / 60);
    const arrivalMin = csmtArrivalMinutes % 60;
    const arrivalAmPm = arrivalHour >= 12 ? 'PM' : 'AM';
    const displayHour = arrivalHour > 12 ? arrivalHour - 12 : arrivalHour;
    const formattedArrival = `${displayHour}:${arrivalMin < 10 ? '0' : ''}${arrivalMin} ${arrivalAmPm}`;

    let risk: 'safe' | 'moderate' | 'high' | 'critical' = 'safe';
    if (buffer < 60) risk = 'critical';
    else if (buffer < 95) risk = 'high';
    else if (buffer < 150) risk = 'moderate';

    return {
      formattedArrival,
      buffer,
      risk,
      travelToCsmt
    };
  };

  const customCalc = calculateCustomScenario(customFinishHour);

  return (
    <div className="space-y-8" id="event-scenarios">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
          <span>Thursday, 15 October 2026</span>
          <span aria-hidden="true">·</span>
          <span>Competition Day Logistics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Sahamati Financial Innovation Challenge &amp; Return Train Navigator
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          The event start is confirmed for <strong>09:00 AM sharp</strong> at Grand Hyatt Mumbai.
          Because the finishing time is unknown, use the interactive scenarios below to evaluate departure times against the strict <strong>10:52 PM return train</strong> departure.
        </p>
      </div>

      {/* Strict Return Train Rule Callout */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-100 text-amber-900 shrink-0 mt-0.5">
            <Train className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
              Priority #2: Catching Return Train 22157
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              CSMT Arrival Target: 09:15 PM – 09:30 PM (Buffer: 82–97 mins)
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              Train <strong className="font-semibold text-slate-900">22157 CSMT MAS Mail</strong> departs at <span className="font-semibold font-mono">10:52 PM</span>.
              The train takes precedence over extra networking. Leaving Grand Hyatt past <strong>8:15 PM</strong> severely compromises your safety margin.
            </p>
          </div>
        </div>
        <a
          href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shrink-0 transition-colors shadow-xs"
        >
          <span>Check RAC PNR Status</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Morning Event-Day Timeline */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-700" />
            <span>Morning Schedule: Reaching Grand Hyatt by 8:30 AM</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Synchronized for Room 802 checkout, 4 suitcases, and 30-minute buffer before 9:00 AM opening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs font-mono font-bold text-slate-900">06:30 AM – 07:15 AM</div>
            <div className="text-sm font-bold text-slate-900 mt-1">Wake Up &amp; Formal Attire</div>
            <p className="text-xs text-slate-600 mt-1">
              Dress in presentation formals. Pack laptops, presentation clicker, and college IDs into personal backpacks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs font-mono font-bold text-slate-900">07:15 AM – 07:45 AM</div>
            <div className="text-sm font-bold text-slate-900 mt-1">Breakfast &amp; Final Packing</div>
            <p className="text-xs text-slate-600 mt-1">
              Have quick hotel breakfast. Pack all 4 suitcases completely and verify physical padlocks are attached.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="text-xs font-mono font-bold text-slate-900">07:45 AM – 08:00 AM</div>
            <div className="text-sm font-bold text-slate-900 mt-1">Checkout with 4 Suitcases</div>
            <p className="text-xs text-slate-600 mt-1">
              Checkout of Room 802. Board Uber XL / taxi with all 4 suitcases directly to Grand Hyatt Mumbai (Option C).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="text-xs font-mono font-bold text-emerald-950">08:30 AM – 09:00 AM</div>
            <div className="text-sm font-bold text-slate-900 mt-1">Grand Hyatt Bell Desk &amp; Registration</div>
            <p className="text-xs text-slate-700 mt-1">
              Deposit 4 suitcases at Grand Hyatt 24/7 Bell Desk. Complete registration. Settle in ballroom by 8:50 AM.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-3">
          <div className="text-xs text-slate-600">
            <strong>Venue:</strong> Grand Hyatt Mumbai Hotel &amp; Residences, Santacruz East (6.5 km from hotel, ~25-30 mins cab).
          </div>
          <a
            href={LOCATIONS.grandHyatt.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1.5"
          >
            <span>Open Grand Hyatt in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Unknown Event End Time: Scenario Simulator */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <span>Risk &amp; Buffer Engine</span>
              <span aria-hidden="true">·</span>
              <span>Event Finish Calculator</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              What If the Event Finishes at Different Times?
            </h3>
            <p className="text-xs text-slate-500">
              Evaluates travel time, luggage retrieval, evening traffic, and train buffer.
            </p>
          </div>

          {/* Toggle between fixed scenarios and custom slider */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setUseCustomSlider(false)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                !useCustomSlider ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Fixed Scenarios
            </button>
            <button
              onClick={() => setUseCustomSlider(true)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                useCustomSlider ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Custom Time Slider
            </button>
          </div>
        </div>

        {/* Mode 1: Fixed Scenarios Tabs */}
        {!useCustomSlider ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {EVENT_SCENARIOS.map((sc, idx) => {
                const isSelected = idx === selectedScenarioIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedScenarioIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-medium text-slate-400">Finish Scenario</div>
                    <div className="text-base font-extrabold mt-0.5 font-mono">
                      {sc.finishTime}
                    </div>
                    <div className="mt-2 text-[11px] uppercase font-bold flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${
                        sc.riskLevel === 'safe'
                          ? 'bg-emerald-400'
                          : sc.riskLevel === 'moderate'
                          ? 'bg-amber-400'
                          : 'bg-rose-400'
                      }`} />
                      <span className={isSelected ? 'text-white' : 'text-slate-700'}>
                        {sc.riskLevel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Scenario Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Calculated Departure Outcome:
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                    Event Finishes at {activeScenario.finishTime}
                  </h4>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-slate-500 text-[10px]">CSMT Arrival</div>
                    <div className="text-base font-bold text-slate-900 mt-0.5">
                      {activeScenario.estimatedCsmtArrival}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-slate-500 text-[10px]">Station Buffer</div>
                    <div className="text-base font-bold text-emerald-800 mt-0.5">
                      {activeScenario.bufferMinutesBeforeTrain} mins
                    </div>
                  </div>
                </div>
              </div>

              {/* Assessment Text */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 space-y-1">
                <div className="font-bold text-slate-900">Expert Recommendation:</div>
                <p className="leading-relaxed text-slate-700">{activeScenario.recommendation}</p>
              </div>

              {/* Action Plan Steps */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Action Steps for this Scenario:
                </div>
                <div className="space-y-2">
                  {activeScenario.actionPlan.map((act, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-800 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mode 2: Custom Slider */
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Drag Event Finishing Time:
                </label>
                <span className="text-lg font-extrabold text-slate-900 font-mono">
                  {Math.floor(customFinishHour)}:
                  {customFinishHour % 1 === 0 ? '00' : '30'} PM
                </span>
              </div>
              <input
                type="range"
                min="16"
                max="21.5"
                step="0.5"
                value={customFinishHour}
                onChange={(e) => setCustomFinishHour(parseFloat(e.target.value))}
                className="w-full accent-slate-900 h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>4:00 PM</span>
                <span>6:00 PM</span>
                <span>8:00 PM</span>
                <span>9:30 PM (Dangerous)</span>
              </div>
            </div>

            {/* Slider Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-slate-500">Estimated CSMT Arrival:</div>
                <div className="text-lg font-bold text-slate-900 font-mono mt-1">
                  {customCalc.formattedArrival}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Includes 15m bag collection + {customCalc.travelToCsmt}m cab
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-slate-500">Buffer Before 10:52 PM Train:</div>
                <div className={`text-lg font-bold font-mono mt-1 ${
                  customCalc.buffer >= 90
                    ? 'text-emerald-700'
                    : customCalc.buffer >= 60
                    ? 'text-amber-700'
                    : 'text-rose-700'
                }`}>
                  {customCalc.buffer} minutes
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Target buffer: at least 82–97 mins
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="text-slate-500">Logistics Risk Verdict:</div>
                  <div className={`text-sm font-bold uppercase mt-1 ${
                    customCalc.risk === 'safe'
                      ? 'text-emerald-700'
                      : customCalc.risk === 'moderate'
                      ? 'text-amber-700'
                      : 'text-rose-700'
                  }`}>
                    {customCalc.risk}
                  </div>
                </div>
                <div className="text-[11px] text-slate-600 mt-1">
                  {customCalc.risk === 'critical'
                    ? 'EXTREME RISK of missing 10:52 PM train! Depart venue immediately.'
                    : customCalc.risk === 'high'
                    ? 'Tight margin. Pre-book taxi and head directly to platform.'
                    : 'Comfortable timeline for dinner and boarding.'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Departure Risk Deadline Summary */}
        <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-900 uppercase tracking-wide">
            <ShieldAlert className="w-4 h-4 text-rose-700" />
            <span>Strict Operational Cut-off: 08:15 PM</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            Even if the challenge closing ceremony or awards are still underway, <strong>you must exit Grand Hyatt by 8:15 PM at the absolute latest</strong>.
            A 65-minute cab ride puts you at CSMT at 9:25 PM, exactly hitting your target buffer window.
            Do not wait until 8:45 PM—Mumbai traffic bottlenecks near Sion/Dadar can add 30 unexpected minutes!
          </p>
        </div>
      </div>
    </div>
  );
};
