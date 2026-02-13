import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { ProgressIndicator } from './components/ProgressIndicator';

// Import all views
import { Hero } from './views/01-Hero';
import { TheGap } from './views/02-TheGap';
import { ExpenseFlow } from './views/03-ExpenseFlow';
import { InvoiceFlow } from './views/04-InvoiceFlow';
import { ChangeOrderFlow } from './views/05-ChangeOrderFlow';
import { ProjectDashboard } from './views/06-ProjectDashboard';
import { DailyLogFlow } from './views/07-DailyLogFlow';
import { Intelligence } from './views/08-Intelligence';
import { MobileFirst } from './views/09-MobileFirst';
import { WhatsRunning } from './views/10-WhatsRunning';
import { Evolution } from './views/11-Evolution';
import { WhatsNext } from './views/12-WhatsNext';
import { TryItLive } from './views/13-TryItLive';

interface View {
  component: React.FC;
  title: string;
}

const views: View[] = [
  { component: Hero, title: 'Welcome' },
  { component: TheGap, title: 'The Gap' },
  { component: ExpenseFlow, title: 'Expense Flow' },
  { component: InvoiceFlow, title: 'Invoice Flow' },
  { component: ChangeOrderFlow, title: 'Change Orders' },
  { component: ProjectDashboard, title: 'Project Dashboard' },
  { component: DailyLogFlow, title: 'Daily Logs' },
  { component: Intelligence, title: 'Intelligence' },
  { component: MobileFirst, title: 'Mobile First' },
  { component: WhatsRunning, title: "What's Running" },
  { component: Evolution, title: 'Evolution' },
  { component: WhatsNext, title: "What's Next" },
  { component: TryItLive, title: 'Try It Live' },
];

function App() {
  const [currentView, setCurrentView] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToView = (index: number) => {
    setDirection(index > currentView ? 1 : -1);
    setCurrentView(index);
  };

  const nextView = () => {
    if (currentView < views.length - 1) {
      goToView(currentView + 1);
    }
  };

  const prevView = () => {
    if (currentView > 0) {
      goToView(currentView - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextView();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevView();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView]);

  const CurrentViewComponent = views[currentView].component;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation
        currentView={currentView}
        totalViews={views.length}
        viewTitle={views[currentView].title}
      />
      
      <ProgressIndicator
        currentView={currentView}
        totalViews={views.length}
        onViewChange={goToView}
      />

      <div className="w-full h-full pt-20">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentView}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full h-full"
          >
            <CurrentViewComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
