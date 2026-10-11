import React, { useState } from 'react';
import {
  LayoutDashboard,
  Calendar,
  Luggage,
  Award,
  Wallet,
  Car,
  CheckSquare,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { Header } from './components/Header';
import { TripDashboard } from './components/TripDashboard';
import { LuggageLogistics } from './components/LuggageLogistics';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { StepByStepTravelMode } from './components/StepByStepTravelMode';
import { EventDayPlanner } from './components/EventDayPlanner';
import { TransportGuide } from './components/TransportGuide';
import { BudgetTracker } from './components/BudgetTracker';
import { TravelChecklist } from './components/TravelChecklist';
import { AssumptionsAndSources } from './components/AssumptionsAndSources';
import { SOSModal } from './components/SOSModal';
import { ItineraryVersion } from './types/travel';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [currentVersion, setCurrentVersion] = useState<ItineraryVersion>('recommended');
  const [isStepModeOpen, setIsStepModeOpen] = useState<boolean>(false);
  const [isSOSOpen, setIsSOSOpen] = useState<boolean>(false);

  const handleStartJourney = () => {
    setIsStepModeOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar with 3-Zone Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsStepModeOpen(false);
        }}
        onStartJourney={handleStartJourney}
        onOpenSOS={() => setIsSOSOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-24 md:pb-12">
        {isStepModeOpen ? (
          <StepByStepTravelMode onClose={() => setIsStepModeOpen(false)} />
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <TripDashboard
                currentVersion={currentVersion}
                setCurrentVersion={setCurrentVersion}
                onNavigateTab={(tab) => setActiveTab(tab)}
                onStartJourney={handleStartJourney}
              />
            )}

            {activeTab === 'timeline' && (
              <InteractiveTimeline
                currentVersion={currentVersion}
                setCurrentVersion={setCurrentVersion}
              />
            )}

            {activeTab === 'luggage' && <LuggageLogistics />}

            {activeTab === 'event' && <EventDayPlanner />}

            {activeTab === 'transport' && <TransportGuide />}

            {activeTab === 'budget' && <BudgetTracker />}

            {activeTab === 'checklist' && <TravelChecklist />}

            {activeTab === 'sources' && <AssumptionsAndSources />}
          </>
        )}
      </main>

      {/* Mobile Bottom Tab Bar (Thumbs Ergonomics) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200">
        <div className="grid grid-cols-5 items-center h-16 px-1">
          <button
            onClick={() => {
              setActiveTab('dashboard');
              setIsStepModeOpen(false);
            }}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors ${
              activeTab === 'dashboard' && !isStepModeOpen
                ? 'text-slate-900 font-bold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Overview</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('timeline');
              setIsStepModeOpen(false);
            }}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors ${
              activeTab === 'timeline' && !isStepModeOpen
                ? 'text-slate-900 font-bold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Timeline</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('luggage');
              setIsStepModeOpen(false);
            }}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors ${
              activeTab === 'luggage' && !isStepModeOpen
                ? 'text-slate-900 font-bold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Luggage className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Luggage</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('event');
              setIsStepModeOpen(false);
            }}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors ${
              activeTab === 'event' && !isStepModeOpen
                ? 'text-slate-900 font-bold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Award className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Event</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('budget');
              setIsStepModeOpen(false);
            }}
            className={`flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors ${
              activeTab === 'budget' && !isStepModeOpen
                ? 'text-slate-900 font-bold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-[10px] mt-1 tracking-tight">Budget</span>
          </button>
        </div>
      </nav>

      {/* Emergency & SOS Modal */}
      <SOSModal isOpen={isSOSOpen} onClose={() => setIsSOSOpen(false)} />

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            Aswin's Mumbai Travel Companion · 13–16 October 2026
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span>MAS CSMT 22160</span>
            <span aria-hidden="true">·</span>
            <span>CSMT MAS 22157</span>
            <span aria-hidden="true">·</span>
            <span>Grand Hyatt Mumbai</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
