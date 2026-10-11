import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Square,
  CheckCircle2,
  FileCheck,
  WifiOff,
  Wifi,
  PhoneCall,
  Shield,
  RotateCcw,
  Plus
} from 'lucide-react';
import { INITIAL_CHECKLIST } from '../data/travelData';
import { ChecklistItem } from '../types/travel';

export const TravelChecklist: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [newCategory, setNewCategory] = useState<ChecklistItem['category']>('documents');
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aswin_mumbai_checklist');
      if (saved) {
        setChecklist(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveChecklist = (items: ChecklistItem[]) => {
    setChecklist(items);
    try {
      localStorage.setItem('aswin_mumbai_checklist', JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const toggleTask = (id: string) => {
    const updated = checklist.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    saveChecklist(updated);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newItem: ChecklistItem = {
      id: `task_${Date.now()}`,
      category: newCategory,
      task: newTask.trim(),
      completed: false
    };

    saveChecklist([...checklist, newItem]);
    setNewTask('');
  };

  const handleResetChecklist = () => {
    if (confirm('Reset checklist items to defaults?')) {
      saveChecklist(INITIAL_CHECKLIST);
    }
  };

  const completedCount = checklist.filter((c) => c.completed).length;
  const totalCount = checklist.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
          <span>Preparedness &amp; Continuity</span>
          <span aria-hidden="true">·</span>
          <span>Offline Persistent Checklist</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Travel Checklist &amp; Offline Continuity
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Your checklist state is automatically preserved in your device's local storage.
          All navigation directions, itineraries, and emergency protocols remain accessible even inside underground metro tunnels or during low-signal areas.
        </p>
      </div>

      {/* Offline vs Online Transparency Guide */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <WifiOff className="w-5 h-5 text-slate-700" />
            <span>Offline Accessibility Architecture</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Transparently documented so you know what works without mobile cellular data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Offline Capable */}
          <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Works 100% Offline (No Internet Needed)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li>• Complete timed itineraries for 14 &amp; 15 October (all 3 versions)</li>
              <li>• 12 step-by-step navigation directions &amp; backup routes</li>
              <li>• Official CSMT Cloakroom rules, fees, and location guidance</li>
              <li>• Treebo Hotel &amp; Grand Hyatt verified addresses and room instructions</li>
              <li>• Personal expense logger and group calculations (stored in browser)</li>
              <li>• Emergency helpline phone numbers and station desk contacts</li>
            </ul>
          </div>

          {/* Requires Connection */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Wifi className="w-4 h-4 text-slate-500" />
              <span>Requires Cellular Connection (Internet Needed)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• Live Google Maps turn-by-turn vehicle GPS navigation</li>
              <li>• Checking live RAC / PNR chart confirmation on Indian Railways portal</li>
              <li>• Dispatching online app-based cabs via Uber / Ola</li>
              <li>• Real-time digital UPI payments at street stalls</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Checklist Cards */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Readiness Tracker
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              Essential Travel Checklist
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-slate-900">
                {completedCount} of {totalCount} Completed
              </div>
              <div className="w-32 bg-slate-100 rounded-full h-2 mt-1 overflow-hidden">
                <div
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <button
              onClick={handleResetChecklist}
              className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
              title="Reset checklist items"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* List of Tasks */}
        <div className="space-y-2.5">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleTask(item.id)}
              className={`p-3.5 rounded-xl border text-left cursor-pointer transition-colors flex items-start gap-3 ${
                item.completed
                  ? 'border-emerald-200 bg-emerald-50/40 text-slate-500'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-900'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-slate-400 shrink-0"
                aria-label="Toggle task"
              >
                {item.completed ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Square className="w-4 h-4 text-slate-300" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <div className={`text-xs font-semibold ${item.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                  {item.task}
                </div>
                {item.notes && (
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {item.notes}
                  </div>
                )}
              </div>

              <span className="text-[10px] uppercase font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* Add Custom Task Form */}
        <form onSubmit={handleAddTask} className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Add personal packing or team item..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value as ChecklistItem['category'])}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white"
          >
            <option value="documents">Documents</option>
            <option value="luggage">Luggage</option>
            <option value="train">Train</option>
            <option value="event">Event</option>
            <option value="college">College</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Item</span>
          </button>
        </form>
      </div>

      {/* Emergency & Official Helplines */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-5 h-5 text-slate-700" />
          <span>Mumbai Emergency &amp; Transit Directory</span>
        </h3>
        <p className="text-xs text-slate-500">
          Official 24/7 helplines accessible from any Indian mobile network.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-700">Railway RPF &amp; Inquiries</div>
            <div className="text-lg font-extrabold text-slate-900 font-mono mt-1">139</div>
            <div className="text-[11px] text-slate-500 mt-1">All-India Rail Security &amp; PNR</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-700">National Emergency Services</div>
            <div className="text-lg font-extrabold text-slate-900 font-mono mt-1">112</div>
            <div className="text-[11px] text-slate-500 mt-1">Police, Fire &amp; Medical SOS</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-700">Mumbai Women Safety</div>
            <div className="text-lg font-extrabold text-slate-900 font-mono mt-1">103</div>
            <div className="text-[11px] text-slate-500 mt-1">Mumbai Police 24/7 Helpline</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-700">Mumbai Traffic Control</div>
            <div className="text-lg font-extrabold text-slate-900 font-mono mt-1">022-24937747</div>
            <div className="text-[11px] text-slate-500 mt-1">Live Road Blockages &amp; Cabs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
