import type { ViewProps } from '../types';
import { getQuarterStats } from '../data/dans-quarter';
import { ArrowRight, Clock, DollarSign, FolderOpen } from 'lucide-react';

export function Hero({ onNext }: ViewProps) {
  const stats = getQuarterStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 flex items-center justify-center p-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-white mb-4">
            DanData
          </h1>
          <div className="text-4xl font-bold text-cyan-400 mb-6">
            Built for Momentum
          </div>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            The construction business system that handles paperwork in seconds,
            not hours — so you can focus on building.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <FolderOpen className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stats.activeProjects}
            </div>
            <div className="text-slate-400">Active Projects</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <DollarSign className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stats.totalExpenses}
            </div>
            <div className="text-slate-400">Expenses This Quarter</div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-center mb-3">
              <Clock className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stats.avgProcessingTime} sec
            </div>
            <div className="text-slate-400">Avg Processing Time</div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold text-xl transition-all transform hover:scale-105"
        >
          See How It Works
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Tagline */}
        <div className="mt-12 text-slate-400 text-lg">
          Real system. Real results. No BS.
        </div>
      </div>
    </div>
  );
}
