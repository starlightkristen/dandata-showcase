import { useState } from 'react';
import type { ViewProps } from '../types';
import { Mail, Sparkles, Brain, User, CheckCircle, Play } from 'lucide-react';
import { getAllProjects } from '../data/dans-quarter';

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  badge: string;
  badgeColor: 'emerald' | 'cyan';
  children: React.ReactNode;
  highlight?: boolean;
  success?: boolean;
}

function ProcessCard({ icon, title, time, badge, badgeColor, children, highlight, success }: ProcessCardProps) {
  const badgeColors = {
    emerald: 'bg-emerald-600',
    cyan: 'bg-cyan-600'
  };

  return (
    <div className={`bg-slate-800 rounded-xl p-6 border-2 transition-all ${highlight ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : success ? 'border-emerald-500' : 'border-slate-700'}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-full ${success ? 'bg-emerald-600' : 'bg-slate-700'} flex items-center justify-center text-white`}>
            {icon}
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${badgeColors[badgeColor]}`}>
              {badge}
            </span>
          </div>
          <div className="text-slate-400">{time}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function EmailPreview() {
  return (
    <div className="bg-slate-900 rounded-lg p-4 text-sm">
      <div className="text-slate-400 mb-2">From: receipts@homedepot.com</div>
      <div className="text-white font-semibold mb-2">Your Home Depot Receipt</div>
      <div className="text-slate-400">Total: $1,247.83 | Store #4532</div>
    </div>
  );
}

function ExtractionResults() {
  return (
    <div className="bg-slate-900 rounded-lg p-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-slate-400 mb-1">Vendor</div>
          <div className="text-white font-semibold">Home Depot</div>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Amount</div>
          <div className="text-white font-semibold">$1,247.83</div>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Date</div>
          <div className="text-white font-semibold">Feb 10, 2026</div>
        </div>
        <div>
          <div className="text-slate-400 mb-1">Items</div>
          <div className="text-white font-semibold">40 items</div>
        </div>
      </div>
    </div>
  );
}

function CategoryResults() {
  return (
    <div className="bg-slate-900 rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">2x4x8 Lumber (40)</div>
          <div className="text-slate-400 text-sm">Schedule C Line 27a — Materials</div>
        </div>
        <div className="text-white font-semibold">$187.60</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Plywood 4x8 (12)</div>
          <div className="text-slate-400 text-sm">Schedule C Line 27a — Materials</div>
        </div>
        <div className="text-white font-semibold">$432.00</div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-white font-semibold">Deck screws (3)</div>
          <div className="text-slate-400 text-sm">Schedule C Line 22 — Supplies</div>
        </div>
        <div className="text-white font-semibold">$47.94</div>
      </div>
      <div className="text-emerald-400 text-sm mt-2 flex items-center gap-2">
        <CheckCircle className="w-4 h-4" />
        Tax categories assigned with 94% confidence
      </div>
    </div>
  );
}

interface ProjectSelectorProps {
  value: string | null;
  onChange: (value: string) => void;
  projects: Array<{ id: string; name: string; client_name: string }>;
}

function ProjectSelector({ value, onChange, projects }: ProjectSelectorProps) {
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <button
          key={project.id}
          onClick={() => onChange(project.id)}
          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
            value === project.id
              ? 'border-cyan-500 bg-cyan-900/20'
              : 'border-slate-700 bg-slate-900 hover:border-slate-600'
          }`}
        >
          <div className="text-white font-semibold">{project.name}</div>
          <div className="text-slate-400 text-sm">{project.client_name}</div>
        </button>
      ))}
    </div>
  );
}

interface CompletionSummaryProps {
  aiTime: string;
  yourTime: string;
  totalTime: string;
  vsManual: string;
}

function CompletionSummary({ aiTime, yourTime, totalTime, vsManual }: CompletionSummaryProps) {
  return (
    <div className="bg-slate-900 rounded-lg p-6">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="text-center">
          <div className="text-slate-400 mb-2">AI Time</div>
          <div className="text-3xl font-bold text-emerald-400">{aiTime}</div>
        </div>
        <div className="text-center">
          <div className="text-slate-400 mb-2">Your Time</div>
          <div className="text-3xl font-bold text-cyan-400">{yourTime}</div>
        </div>
      </div>
      <div className="text-center border-t border-slate-700 pt-6">
        <div className="text-slate-400 mb-2">Total Time</div>
        <div className="text-4xl font-bold text-white mb-2">{totalTime}</div>
        <div className="text-emerald-400 text-lg">vs. {vsManual} manually</div>
      </div>
    </div>
  );
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function ExpenseFlow({ onNext, onPrevious }: ViewProps) {
  const [step, setStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const mockProjects = getAllProjects().map(p => ({
    id: p.id,
    name: p.name,
    client_name: p.client_name
  }));

  const runDemo = async () => {
    setIsRunning(true);
    setStep(0);
    setSelectedProject(null);
    setTimer(0);
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimer((Date.now() - startTime) / 1000);
    }, 100);
    
    await delay(300);
    setStep(1); // Email
    await delay(1000);
    
    setStep(2); // AI extracting
    await delay(2000);
    
    setStep(3); // AI categorizing
    await delay(1000);
    
    clearInterval(interval);
    setTimer(3.0);
    setStep(4); // Manual selection
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          Receipt to Recorded
        </h2>
        <div className="text-center mb-8">
          <div className="text-7xl font-bold text-cyan-400 mb-2">
            {timer.toFixed(1)} sec
          </div>
          <div className="text-xl text-slate-400">
            {step < 4 ? 'AI working...' : selectedProject ? 'Complete!' : 'Waiting for your input'}
          </div>
        </div>

        <div className="space-y-6 mb-12">
          {/* Step 1: Email */}
          {step >= 1 && (
            <ProcessCard
              icon={<Mail className="w-6 h-6" />}
              title="Receipt Email Received"
              time="0 sec"
              badge="Automatic"
              badgeColor="emerald"
            >
              <EmailPreview />
            </ProcessCard>
          )}

          {/* Step 2: AI Extraction */}
          {step >= 2 && (
            <ProcessCard
              icon={<Sparkles className="w-6 h-6" />}
              title="AI Reading Receipt"
              time="~2 sec"
              badge="Automatic"
              badgeColor="emerald"
            >
              {step > 2 && <ExtractionResults />}
            </ProcessCard>
          )}

          {/* Step 3: AI Categorization */}
          {step >= 3 && (
            <ProcessCard
              icon={<Brain className="w-6 h-6" />}
              title="AI Categorizing for Taxes"
              time="~1 sec"
              badge="Automatic"
              badgeColor="emerald"
            >
              {step > 3 && <CategoryResults />}
            </ProcessCard>
          )}

          {/* Step 4: Manual Project Selection */}
          {step >= 4 && (
            <ProcessCard
              icon={<User className="w-6 h-6" />}
              title="Select Which Project"
              time="~2 sec"
              badge="Your Choice"
              badgeColor="cyan"
              highlight={!selectedProject}
            >
              <ProjectSelector
                value={selectedProject}
                onChange={setSelectedProject}
                projects={mockProjects}
              />
            </ProcessCard>
          )}

          {/* Step 5: Complete */}
          {selectedProject && (
            <ProcessCard
              icon={<CheckCircle className="w-6 h-6" />}
              title="Expense Saved & Tax-Ready"
              time="Done"
              badge="Complete"
              badgeColor="emerald"
              success
            >
              <CompletionSummary
                aiTime="3 sec"
                yourTime="2 sec"
                totalTime="5 sec"
                vsManual="15 min"
              />
            </ProcessCard>
          )}
        </div>

        {step === 0 && (
          <div className="text-center mb-12">
            <button
              onClick={runDemo}
              disabled={isRunning}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-bold text-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-6 h-6" />
              Run Demo
            </button>
          </div>
        )}

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
