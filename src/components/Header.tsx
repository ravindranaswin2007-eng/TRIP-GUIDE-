import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartJourney: () => void;
  onOpenSOS: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onStartJourney,
  onOpenSOS
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2 text-left group shrink-0"
          >
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm tracking-tighter">
              MT
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap">
              Aswin's Mumbai Companion
            </span>
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'dashboard' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'timeline' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveTab('luggage')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'luggage' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Luggage Strategy
            </button>
            <button
              onClick={() => setActiveTab('event')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'event' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Event Day (Oct 15)
            </button>
            <button
              onClick={() => setActiveTab('transport')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'transport' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Transport Guide
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'budget' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Budget
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'checklist' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Checklist
            </button>
            <button
              onClick={() => setActiveTab('sources')}
              className={`whitespace-nowrap transition-colors hover:text-slate-900 ${
                activeTab === 'sources' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              Verifications
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenSOS}
              aria-label="Emergency and station helpline"
              className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span className="hidden sm:inline">Helpline &amp; SOS</span>
              <span className="sm:hidden">SOS</span>
            </button>
            <button
              onClick={onStartJourney}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Step-by-Step Mode</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
