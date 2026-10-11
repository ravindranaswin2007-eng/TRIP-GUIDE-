import React, { useState, useEffect } from 'react';
import {
  Compass,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  RotateCcw,
  Navigation,
  MapPin,
  Clock,
  IndianRupee,
  ShieldAlert
} from 'lucide-react';
import { NAVIGATION_STEPS } from '../data/travelData';

interface StepByStepTravelModeProps {
  onClose: () => void;
}

export const StepByStepTravelMode: React.FC<StepByStepTravelModeProps> = ({ onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aswin_mumbai_step_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.index === 'number') setCurrentStepIndex(parsed.index);
        if (parsed.completed) setCompletedSteps(parsed.completed);
      }
    } catch {
      // ignore
    }
  }, []);

  const saveProgress = (idx: number, comp: Record<number, boolean>) => {
    try {
      localStorage.setItem(
        'aswin_mumbai_step_progress',
        JSON.stringify({ index: idx, completed: comp })
      );
    } catch {
      // ignore
    }
  };

  const handleNext = () => {
    if (currentStepIndex < NAVIGATION_STEPS.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      saveProgress(nextIdx, completedSteps);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      saveProgress(prevIdx, completedSteps);
    }
  };

  const toggleStepCompleted = (idx: number) => {
    setCompletedSteps((prev) => {
      const updated = { ...prev, [idx]: !prev[idx] };
      saveProgress(currentStepIndex, updated);
      return updated;
    });
  };

  const resetAllSteps = () => {
    if (confirm('Reset step-by-step navigation progress back to Step 1?')) {
      setCurrentStepIndex(0);
      setCompletedSteps({});
      saveProgress(0, {});
    }
  };

  const currentStep = NAVIGATION_STEPS[currentStepIndex];
  const totalSteps = NAVIGATION_STEPS.length;
  const isCompleted = !!completedSteps[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <div className="space-y-6">
      {/* Top Controller Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Exit step-by-step mode"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <span>Step-by-Step On-The-Ground Guide</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-900 font-bold">
                Step {currentStepIndex + 1} of {totalSteps}
              </span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">
              Live Transit Assistant
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetAllSteps}
            className="p-2 text-xs text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            title="Reset progress to step 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <div className="w-28 sm:w-36 bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-amber-400 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-700">
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Primary Action Card for Current Step */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Phase Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Phase: {currentStep.phase}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {currentStep.estimatedTime}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {currentStep.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1.5 flex-wrap">
              <span className="flex items-center gap-1 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {currentStep.locationName}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5 text-slate-400" />
                {currentStep.transportDetail}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono font-semibold text-slate-900">
                <IndianRupee className="w-3 h-3 text-slate-400" />
                {currentStep.cost}
              </span>
            </div>
          </div>

          {/* Actionable Instruction Box */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Exact Actionable Directions:
            </div>
            <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
              {currentStep.instruction}
            </p>
          </div>

          {/* Warning notice if present */}
          {currentStep.warningNotice && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-950 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">CRITICAL WARNING:</strong> {currentStep.warningNotice}
              </div>
            </div>
          )}

          {/* Backup route box */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-slate-800 space-y-1">
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <span>Backup Contingency Route:</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentStep.backupPlan}
            </p>
          </div>

          {/* Google Maps External Launch Button */}
          <div>
            <a
              href={currentStep.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-colors border border-slate-300"
            >
              <span>Open This Route in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mark Complete Checkbox Button */}
          <div className="pt-2">
            <button
              onClick={() => toggleStepCompleted(currentStepIndex)}
              className={`w-full py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
              }`}
            >
              <CheckCircle2 className={`w-5 h-5 ${isCompleted ? 'text-emerald-600' : 'text-slate-300'}`} />
              <span>{isCompleted ? 'Step Completed ✓' : 'Mark Step as Completed'}</span>
            </button>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
              currentStepIndex === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-700 bg-white border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          <span className="text-xs font-mono text-slate-500">
            {currentStepIndex + 1} / {totalSteps}
          </span>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === totalSteps - 1}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              currentStepIndex === totalSteps - 1
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
            }`}
          >
            <span>Next Step</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Step Overview Tray */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h4 className="text-sm font-bold text-slate-900">
          Jump to Any Step:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {NAVIGATION_STEPS.map((s, idx) => {
            const isCurr = idx === currentStepIndex;
            const isDone = !!completedSteps[idx];
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  saveProgress(idx, completedSteps);
                }}
                className={`p-2.5 rounded-xl text-left border text-xs transition-colors flex items-center justify-between ${
                  isCurr
                    ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                    : isDone
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-950 font-medium'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                }`}
              >
                <span className="truncate">
                  {idx + 1}. {s.title}
                </span>
                {isDone && !isCurr && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
