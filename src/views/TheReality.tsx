import type { ViewProps } from '../types';
import { CheckCircle, Clock } from 'lucide-react';

interface TimelineItemProps {
  time: string;
  activity: string;
  paperwork: string;
  highlight?: boolean;
  emphasis?: boolean;
}

function TimelineItem({ time, activity, paperwork, highlight, emphasis }: TimelineItemProps) {
  return (
    <div className={`flex gap-6 items-start ${highlight ? 'bg-cyan-900/20 -mx-4 px-4 py-3 rounded-lg' : ''} ${emphasis ? 'bg-emerald-900/20 -mx-4 px-4 py-3 rounded-lg' : ''}`}>
      <div className="flex-shrink-0 w-24">
        <div className="text-cyan-400 font-bold text-lg">{time}</div>
      </div>
      <div className="flex-grow">
        <div className="text-white text-xl mb-1">{activity}</div>
        <div className={`text-slate-400 flex items-center gap-2 ${highlight ? 'text-cyan-300' : ''} ${emphasis ? 'text-emerald-300 font-semibold text-lg' : ''}`}>
          {(highlight || emphasis) && <CheckCircle className="w-4 h-4" />}
          {paperwork}
        </div>
      </div>
    </div>
  );
}

export function TheReality({ onNext, onPrevious }: ViewProps) {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          A Day in Dan's Life
        </h2>
        <p className="text-center text-slate-400 text-xl mb-12">
          See where the paperwork fits (spoiler: it doesn't get in the way)
        </p>
        
        <div className="space-y-6 mb-16">
          <TimelineItem
            time="6:00 AM"
            activity="On site before sunrise"
            paperwork="None"
          />
          <TimelineItem
            time="8:30 AM"
            activity="Supplier calls about materials"
            paperwork="None"
          />
          <TimelineItem
            time="10:00 AM"
            activity="Client wants to add pendant lights"
            paperwork="30-second voice note → Change order generated"
            highlight
          />
          <TimelineItem
            time="12:00 PM"
            activity="Grab lunch, receipt in email"
            paperwork="Auto-processed while eating"
            highlight
          />
          <TimelineItem
            time="2:00 PM"
            activity="Materials delivered"
            paperwork="Quick photo → Daily log updated"
            highlight
          />
          <TimelineItem
            time="6:00 PM"
            activity="Heading home"
            paperwork="None — it's all done"
          />
          <TimelineItem
            time="8:00 PM"
            activity="Family time"
            paperwork="Not thinking about work"
            emphasis
          />
        </div>
        
        <div className="bg-slate-800 rounded-2xl p-8 text-center border-2 border-cyan-500/50">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-cyan-400" />
            <div className="text-2xl text-slate-300">
              Total paperwork time today:
            </div>
          </div>
          <div className="text-7xl font-bold text-cyan-400 mb-3">
            90 seconds
          </div>
          <div className="text-2xl text-slate-400 mb-4">
            vs. 2+ hours the old way
          </div>
          <div className="text-lg text-emerald-400 font-semibold">
            This is the point.
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
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
