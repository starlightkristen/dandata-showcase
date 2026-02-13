import type { ViewProps } from '../types';
import { Clock, DollarSign, Heart, CheckCircle } from 'lucide-react';

export function WhatThisMeans({ onPrevious }: ViewProps) {
  const savings = {
    timePerExpense: { before: 15, after: 5, unit: 'minutes' },
    timePerInvoice: { before: 30, after: 1, unit: 'minutes' },
    timePerChangeOrder: { before: 45, after: 0.5, unit: 'minutes' },
    timePerDailyLog: { before: 20, after: 1, unit: 'minutes' },
    
    // Weekly calculations (assuming 10 expenses, 2 invoices, 1 CO, 5 daily logs per week)
    weeklyExpenses: 10,
    weeklyInvoices: 2,
    weeklyChangeOrders: 1,
    weeklyDailyLogs: 5
  };

  const weeklyTimeSaved = 
    (savings.timePerExpense.before - savings.timePerExpense.after) * savings.weeklyExpenses +
    (savings.timePerInvoice.before - savings.timePerInvoice.after) * savings.weeklyInvoices +
    (savings.timePerChangeOrder.before - savings.timePerChangeOrder.after) * savings.weeklyChangeOrders +
    (savings.timePerDailyLog.before - savings.timePerDailyLog.after) * savings.weeklyDailyLogs;

  const yearlyTimeSaved = weeklyTimeSaved * 52;
  const yearlyHoursSaved = Math.floor(yearlyTimeSaved / 60);
  const yearlyDaysSaved = Math.floor(yearlyHoursSaved / 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6">
            What This Actually Means
          </h2>
          <p className="text-2xl text-slate-300">
            Let's talk about what you get back
          </p>
        </div>

        {/* Time savings */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-10 mb-12 border-2 border-cyan-500/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-cyan-600 flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">Time Back</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {Math.floor(weeklyTimeSaved / 60)}h {Math.floor(weeklyTimeSaved % 60)}m
              </div>
              <div className="text-slate-400 text-lg">Saved per week</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {yearlyHoursSaved}h
              </div>
              <div className="text-slate-400 text-lg">Saved per year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {yearlyDaysSaved}
              </div>
              <div className="text-slate-400 text-lg">Full work days</div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6 text-center">
            <p className="text-xl text-slate-300 mb-2">
              That's <span className="text-cyan-400 font-bold">{yearlyDaysSaved} extra days</span> per year you're not stuck at your desk
            </p>
            <p className="text-slate-400">
              What would you do with that time?
            </p>
          </div>
        </div>

        {/* Money protection */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-10 mb-12 border-2 border-emerald-500/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">Money Protected</h3>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center py-4 border-b border-slate-700">
              <div>
                <div className="text-white font-semibold text-lg">Change orders captured</div>
                <div className="text-slate-400">Every conversation documented</div>
              </div>
              <div className="text-emerald-400 text-2xl font-bold">100%</div>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-slate-700">
              <div>
                <div className="text-white font-semibold text-lg">Expenses tracked for taxes</div>
                <div className="text-slate-400">Schedule C ready, properly categorized</div>
              </div>
              <div className="text-emerald-400 text-2xl font-bold">100%</div>
            </div>

            <div className="flex justify-between items-center py-4 border-b border-slate-700">
              <div>
                <div className="text-white font-semibold text-lg">Daily logs completed</div>
                <div className="text-slate-400">Your defense in any dispute</div>
              </div>
              <div className="text-emerald-400 text-2xl font-bold">100%</div>
            </div>

            <div className="flex justify-between items-center py-4">
              <div>
                <div className="text-white font-semibold text-lg">Average days to payment</div>
                <div className="text-slate-400">Professional invoicing, fast collection</div>
              </div>
              <div className="text-emerald-400 text-2xl font-bold">3 days</div>
            </div>
          </div>
        </div>

        {/* The real benefit */}
        <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-12 mb-12 border-2 border-pink-500/50">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white">What Actually Matters</h3>
          </div>

          <div className="space-y-6 text-center">
            <div className="text-2xl text-slate-200">
              Home for dinner.
            </div>
            <div className="text-2xl text-slate-200">
              At your kid's game.
            </div>
            <div className="text-2xl text-slate-200">
              Weekend is yours.
            </div>
            <div className="text-2xl text-slate-200 mb-8">
              Not thinking about paperwork.
            </div>

            <div className="text-3xl font-bold text-pink-400">
              That's what this system is actually for.
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center bg-slate-800/80 backdrop-blur-sm rounded-2xl p-10 border-2 border-slate-700">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CheckCircle className="w-12 h-12 text-cyan-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">The Bottom Line</h3>
          <p className="text-2xl text-slate-300 mb-6">
            DanData handles the paperwork in seconds, not hours.
          </p>
          <p className="text-xl text-slate-400 mb-8">
            So you can focus on building great projects and actually living your life.
          </p>
          <div className="text-2xl text-cyan-400 font-bold">
            No BS. Just results.
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onPrevious}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
          >
            ← Previous
          </button>
        </div>
      </div>
    </div>
  );
}
