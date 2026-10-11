import React from 'react';
import { X, ShieldAlert, Phone, MapPin, Copy, Check } from 'lucide-react';
import { LOCATIONS } from '../data/travelData';

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SOSModal: React.FC<SOSModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const copyAddress = () => {
    navigator.clipboard.writeText(LOCATIONS.treeboHotel.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Emergency Helplines &amp; Key Contacts</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto text-xs sm:text-sm">
          {/* Urgent Numbers */}
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Official 24/7 Helplines
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:139"
                className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center gap-2.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 font-mono text-sm">139</div>
                  <div className="text-[10px] text-slate-500">Railway RPF &amp; Security</div>
                </div>
              </a>

              <a
                href="tel:112"
                className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center gap-2.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-rose-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 font-mono text-sm">112</div>
                  <div className="text-[10px] text-slate-500">Police / SOS Emergency</div>
                </div>
              </a>

              <a
                href="tel:103"
                className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center gap-2.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 font-mono text-sm">103</div>
                  <div className="text-[10px] text-slate-500">Mumbai Women Safety</div>
                </div>
              </a>

              <a
                href="tel:02224937747"
                className="p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center gap-2.5 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 font-mono text-xs">022-24937747</div>
                  <div className="text-[10px] text-slate-500">Mumbai Traffic Police</div>
                </div>
              </a>
            </div>
          </div>

          {/* Hotel Emergency Address */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-xs">Hotel Address (Show to Taxi Driver):</span>
              <button
                onClick={copyAddress}
                className="text-[11px] font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-mono">
              Treebo Empire Suite, Room 802, 8th Floor, Balaji Business Park, near Times Square, Andheri-Kurla Road, Marol, Mumbai 400059.
            </p>
            <div className="text-[11px] text-slate-500">
              Landmark: Right next to Marol Naka Metro Station.
            </div>
          </div>

          {/* Group Safety Protocol */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1">
            <div className="font-bold">4-Student Group Rule in Crowds:</div>
            <p className="text-slate-700 leading-relaxed">
              In heavy transit areas (CSMT concourse, Marine Drive promenade, Dadar station), always maintain line of sight with Bhavananthan, Dinesh, and Priyadharshini. If separated, reconvene at the main station ticket hall / clock tower.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors"
          >
            Close Emergency Panel
          </button>
        </div>
      </div>
    </div>
  );
};
