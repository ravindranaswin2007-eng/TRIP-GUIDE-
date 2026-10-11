import React, { useState, useEffect } from 'react';
import {
  IndianRupee,
  Plus,
  Trash2,
  PieChart,
  ShieldCheck,
  TrendingUp,
  RotateCcw,
  Users,
  CheckCircle2
} from 'lucide-react';
import { INITIAL_EXPENSES } from '../data/travelData';
import { ExpenseItem } from '../types/travel';

export const BudgetTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>(INITIAL_EXPENSES);
  const [budgetTier, setBudgetTier] = useState<'low' | 'comfortable'>('comfortable');

  // Form state for adding an actual expense
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ExpenseItem['category']>('food');
  const [newActualCost, setNewActualCost] = useState('');
  const [newPaidBy, setNewPaidBy] = useState('Aswin R');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aswin_mumbai_expenses');
      if (saved) {
        setExpenses(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveExpenses = (items: ExpenseItem[]) => {
    setExpenses(items);
    try {
      localStorage.setItem('aswin_mumbai_expenses', JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newActualCost) return;

    const cost = parseFloat(newActualCost) || 0;
    const newItem: ExpenseItem = {
      id: `custom_${Date.now()}`,
      category: newCategory,
      title: newTitle.trim(),
      estimatedCost: cost,
      actualCost: cost,
      paidBy: newPaidBy,
      notes: 'Recorded on the road'
    };

    const updated = [newItem, ...expenses];
    saveExpenses(updated);
    setNewTitle('');
    setNewActualCost('');
  };

  const handleDeleteExpense = (id: string) => {
    const updated = expenses.filter((e) => e.id !== id);
    saveExpenses(updated);
  };

  const handleResetExpenses = () => {
    if (confirm('Reset all expense items to initial verified trip estimates?')) {
      saveExpenses(INITIAL_EXPENSES);
    }
  };

  // Calculations
  const totalEstimated = expenses.reduce((acc, curr) => acc + curr.estimatedCost, 0);
  const totalActual = expenses.reduce((acc, curr) => acc + curr.actualCost, 0);
  const estimatedPerPerson = Math.round(totalEstimated / 4);
  const actualPerPerson = Math.round(totalActual / 4);

  // Category breakdown
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.actualCost;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wide">
          <span>Finance &amp; Expense Engine</span>
          <span aria-hidden="true">·</span>
          <span>INR Budget for 4 Students</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
          Trip Budget &amp; Live Expense Tracker
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Pre-calculated estimates for local cabs, station cloakroom, dining, water, and emergency buffer.
          Train tickets (Chennai-CSMT &amp; CSMT-Chennai) are already booked and not counted as new expenses.
        </p>
      </div>

      {/* Low-Cost vs Comfortable Preset Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Low-Cost Plan */}
        <div
          onClick={() => setBudgetTier('low')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            budgetTier === 'low'
              ? 'bg-white border-slate-900 ring-2 ring-slate-900/10 shadow-sm'
              : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase">
              Low-Cost Student Option
            </span>
            <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
              ~₹850 / person
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-2">
            ₹3,400 <span className="text-xs font-normal text-slate-500 font-sans">total for 4</span>
          </div>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Uses CSMT Cloakroom (₹120), shared Kaali-Peeli taxis for South Mumbai, Fast Local + Metro to Marol, budget puri thalis (Pancham Puriwala) and student dining.
          </p>
        </div>

        {/* Comfortable Plan */}
        <div
          onClick={() => setBudgetTier('comfortable')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            budgetTier === 'comfortable'
              ? 'bg-white border-slate-900 ring-2 ring-slate-900/10 shadow-sm'
              : 'bg-white border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900 uppercase">
              Comfortable Option (Recommended)
            </span>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              ~₹1,400 / person + buffer
            </span>
          </div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-2">
            ₹5,600 <span className="text-xs font-normal text-slate-500 font-sans">+ ₹1,500 emergency reserve</span>
          </div>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Includes CSMT Cloakroom, door-to-door AC Uber XL cabs with 4 suitcases for the long 28 km transfers, comfortable cafe meals, evening snacks, and ₹1,500 safety cushion.
          </p>
        </div>
      </div>

      {/* Metric Cards Summary Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500">Group Estimated</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-1">
            ₹{totalEstimated.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
            ₹{estimatedPerPerson.toLocaleString('en-IN')} / person
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500">Group Actual Logged</div>
          <div className="text-xl font-bold text-slate-900 font-mono mt-1">
            ₹{totalActual.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
            ₹{actualPerPerson.toLocaleString('en-IN')} / person
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <div className="text-xs text-slate-500">Per-Student Share</div>
          <div className="text-xl font-bold text-emerald-800 font-mono mt-1">
            ₹{actualPerPerson.toLocaleString('en-IN')}
          </div>
          <div className="text-[11px] text-slate-500 mt-0.5">
            Equal split (÷ 4)
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Contingency Buffer</span>
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-slate-900 font-mono">
            ₹1,500
          </div>
          <div className="text-[11px] text-emerald-700">
            Intact &amp; available
          </div>
        </div>
      </div>

      {/* Add New Expense Form */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <Plus className="w-4 h-4 text-slate-700" />
          <span>Log Real-Time Expense (On the Road)</span>
        </h3>

        <form onSubmit={handleAddExpense} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Expense Item / Description
            </label>
            <input
              type="text"
              placeholder="e.g. Taxi to Gateway, Tea & Biscuits"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Category
            </label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value as ExpenseItem['category'])}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
            >
              <option value="transport">Transport</option>
              <option value="food">Food &amp; Water</option>
              <option value="luggage">Luggage</option>
              <option value="miscellaneous">Misc</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 80"
              value={newActualCost}
              onChange={(e) => setNewActualCost(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Paid By
            </label>
            <select
              value={newPaidBy}
              onChange={(e) => setNewPaidBy(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
            >
              <option value="Aswin R">Aswin R</option>
              <option value="Dinesh Karthik R">Dinesh Karthik</option>
              <option value="Bhavananthan M">Bhavananthan</option>
              <option value="Priyadharshini P">Priyadharshini</option>
              <option value="Group Pool">Group Pool</option>
            </select>
          </div>

          <div className="sm:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Expense</span>
            </button>
          </div>
        </form>
      </div>

      {/* Expense Items Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Expense Log &amp; Estimates</h3>
            <p className="text-xs text-slate-500">
              Verified fares are based on RTO meter rates and official cloakroom tariffs.
            </p>
          </div>
          <button
            onClick={handleResetExpenses}
            className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Initial</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-200">
              <tr>
                <th className="px-5 py-3.5">Expense Description</th>
                <th className="px-4 py-3.5">Category</th>
                <th className="px-4 py-3.5 text-right">Estimate (₹)</th>
                <th className="px-4 py-3.5 text-right">Actual (₹)</th>
                <th className="px-4 py-3.5">Paid By / Notes</th>
                <th className="px-3 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {expenses.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-900">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-slate-500 capitalize">
                    {item.category}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-slate-600">
                    ₹{item.estimatedCost}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">
                    ₹{item.actualCost}
                  </td>
                  <td className="px-4 py-3 text-slate-500">
                    <span>{item.paidBy || 'Shared'}</span>
                    {item.notes && <span className="block text-[11px] text-slate-400">{item.notes}</span>}
                  </td>
                  <td className="px-3 py-3 text-right">
                    <button
                      onClick={() => handleDeleteExpense(item.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                      aria-label="Delete expense"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Totals Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-600">
            Total for all 4 students: <strong className="text-slate-900 font-mono text-sm">₹{totalActual.toLocaleString('en-IN')}</strong>
          </div>
          <div className="text-slate-600">
            Individual share for Aswin, Dinesh, Bhavananthan, Priyadharshini: <strong className="text-emerald-800 font-mono text-sm">₹{actualPerPerson.toLocaleString('en-IN')}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
