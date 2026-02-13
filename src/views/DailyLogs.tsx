import { useState } from 'react';
import type { ViewProps } from '../types';
import { Camera, Cloud, CheckCircle, Shield, Clock } from 'lucide-react';
import { wilsonKitchen } from '../data/dans-quarter';

export function DailyLogs({ onNext, onPrevious }: ViewProps) {
  const [showCapture, setShowCapture] = useState(false);
  const log = wilsonKitchen.dailyLogs[0];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            60-Second Protection
          </h2>
          <p className="text-xl text-slate-400">
            Daily logs that actually get done. Every single day.
          </p>
        </div>

        {!showCapture ? (
          <>
            {/* Why it matters */}
            <div className="bg-slate-800 rounded-xl p-8 mb-8 border-2 border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-12 h-12 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Why This Matters</h3>
                  <p className="text-slate-300 text-lg">
                    When a client disputes work, your daily logs are your only defense. 
                    But who has time to write detailed reports every night?
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-6">
                <div className="text-slate-400 mb-4 font-semibold">The Old Way:</div>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Remember to write logs at end of day (you're exhausted)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Try to recall what actually happened (details fuzzy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Skip days when you're busy (then scramble to catch up)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Vague entries like "worked on kitchen" (useless in disputes)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The DanData way */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 rounded-xl p-8 mb-8 border-2 border-cyan-500/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">The DanData Way</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-2">Quick Photos</div>
                  <div className="text-slate-300 text-sm">
                    Snap pics throughout the day. They tell the story.
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-600 flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-2">Auto-Populated</div>
                  <div className="text-slate-300 text-sm">
                    Weather, workers, hours pulled automatically.
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-600 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white font-semibold mb-2">Done in 60 Sec</div>
                  <div className="text-slate-300 text-sm">
                    Quick summary. Submit. Protected.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <button
                onClick={() => setShowCapture(true)}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold text-xl transition-all"
              >
                See It In Action
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Demo of filling out daily log */}
            <div className="bg-slate-800 rounded-xl p-8 mb-8 border-2 border-cyan-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Daily Log</h3>
                  <div className="text-slate-400">{log.log_date} • {wilsonKitchen.name}</div>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">60 seconds</span>
                </div>
              </div>

              {/* Auto-populated fields */}
              <div className="bg-slate-900 rounded-lg p-6 mb-6">
                <div className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Auto-populated from system
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Workers on Site</div>
                    {log.workers_on_site.map((worker, idx) => (
                      <div key={idx} className="text-white">
                        {worker.name} ({worker.role}) - {worker.hours}h
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Weather</div>
                    <div className="text-white">
                      {log.weather_conditions.temperature}°F, {log.weather_conditions.condition}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm mb-1">Hours Worked</div>
                    <div className="text-white">{log.hours_worked} hours</div>
                  </div>

                  <div>
                    <div className="text-slate-400 text-sm mb-1">Photos Taken</div>
                    <div className="text-white">12 photos attached</div>
                  </div>
                </div>
              </div>

              {/* What you add */}
              <div className="bg-slate-900 rounded-lg p-6 mb-6">
                <div className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  What you add (the important part)
                </div>
                
                <div>
                  <div className="text-slate-400 text-sm mb-2">Work Summary</div>
                  <div className="bg-slate-800 rounded border-2 border-cyan-500 p-4">
                    <div className="text-white">{log.summary}</div>
                  </div>
                  <div className="text-slate-500 text-sm mt-2">
                    Quick description of what got done. That's it.
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-lg transition-all flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Submit Log (Protected for disputes)
                </button>
              </div>
            </div>

            {/* The result */}
            <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-8 mb-8 border-2 border-emerald-500/50 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">The Result</h3>
              <div className="text-xl text-slate-300 mb-2">
                Complete, detailed daily logs. Every single day.
              </div>
              <div className="text-lg text-emerald-400 font-semibold">
                Because it only takes 60 seconds.
              </div>
            </div>
          </>
        )}

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">60 sec</div>
            <div className="text-slate-400">Per daily log</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-slate-400">Completion rate</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">$0</div>
            <div className="text-slate-400">Lost to disputes</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
