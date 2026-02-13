import type { ViewProps } from '../types';
import { Brain, User, Zap } from 'lucide-react';

interface TaskCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  color: 'emerald' | 'cyan';
}

function TaskCard({ title, items, icon, color }: TaskCardProps) {
  const colors = {
    emerald: {
      bg: 'bg-emerald-600',
      border: 'border-emerald-500',
      text: 'text-emerald-400'
    },
    cyan: {
      bg: 'bg-cyan-600',
      border: 'border-cyan-500',
      text: 'text-cyan-400'
    }
  };

  const theme = colors[color];

  return (
    <div className={`bg-slate-800 rounded-xl p-6 border-2 ${theme.border}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-full ${theme.bg} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full ${theme.bg} mt-2 flex-shrink-0`} />
            <span className="text-slate-300 text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Intelligence({ onNext, onPrevious }: ViewProps) {
  const aiTasks = [
    'Read receipts and extract data',
    'Categorize expenses for Schedule C',
    'Match vendors to tax categories',
    'Parse line items and quantities',
    'Calculate totals and verify amounts',
    'Flag unusual transactions'
  ];

  const yourTasks = [
    'Choose which project (you know best)',
    'Approve or edit AI suggestions',
    'Decide when to invoice',
    'Set your payment terms',
    'Manage client relationships',
    'Make business decisions'
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-yellow-400" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            What AI Does vs. What You Control
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            AI handles the boring, repetitive work. You stay in control of the business decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <TaskCard
            title="AI Automates"
            items={aiTasks}
            icon={<Brain className="w-6 h-6" />}
            color="emerald"
          />
          <TaskCard
            title="You Control"
            items={yourTasks}
            icon={<User className="w-6 h-6" />}
            color="cyan"
          />
        </div>

        {/* Key insight */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-2xl p-8 border-2 border-slate-700 text-center">
          <div className="text-3xl font-bold text-white mb-4">
            The Result
          </div>
          <p className="text-2xl text-slate-300 mb-6">
            AI does 3 seconds of data entry. You do 2 seconds of decision-making.
          </p>
          <div className="text-xl text-emerald-400 font-semibold">
            That's the honest truth about "AI-powered."
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
