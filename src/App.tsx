import { useState } from 'react';
import { Hero } from './views/Hero';
import { TheReality } from './views/TheReality';
import { ExpenseFlow } from './views/ExpenseFlow';
import { Intelligence } from './views/Intelligence';
import { InvoiceFlow } from './views/InvoiceFlow';
import { ChangeOrderFlow } from './views/ChangeOrderFlow';
import { DailyLogs } from './views/DailyLogs';
import { ProjectDashboard } from './views/ProjectDashboard';
import { WhatThisMeans } from './views/WhatThisMeans';

function App() {
  const [currentView, setCurrentView] = useState(0);

  const views = [
    { component: Hero, name: 'Hero' },
    { component: TheReality, name: 'The Reality' },
    { component: ExpenseFlow, name: 'Expense Flow' },
    { component: Intelligence, name: 'Intelligence' },
    { component: InvoiceFlow, name: 'Invoice Flow' },
    { component: ChangeOrderFlow, name: 'Change Order Flow' },
    { component: DailyLogs, name: 'Daily Logs' },
    { component: ProjectDashboard, name: 'Project Dashboard' },
    { component: WhatThisMeans, name: 'What This Means' }
  ];

  const handleNext = () => {
    if (currentView < views.length - 1) {
      setCurrentView(currentView + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentView > 0) {
      setCurrentView(currentView - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const CurrentViewComponent = views[currentView].component;

  return (
    <div className="min-h-screen">
      {/* View indicator */}
      <div className="fixed top-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
        <div className="text-slate-400 text-sm">
          {currentView + 1} / {views.length}
        </div>
        <div className="text-white text-xs font-semibold">
          {views[currentView].name}
        </div>
      </div>

      {/* View navigation dots */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {views.map((view, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentView(idx);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentView
                ? 'bg-cyan-500 scale-125'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}
            title={view.name}
          />
        ))}
      </div>

      {/* Current view */}
      <CurrentViewComponent onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
}

export default App;
