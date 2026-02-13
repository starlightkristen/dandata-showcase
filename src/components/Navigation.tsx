import React from 'react';

interface NavigationProps {
  currentView: number;
  totalViews: number;
  viewTitle: string;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, totalViews, viewTitle }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            DanData
          </div>
          
          <div className="text-center flex-1">
            <h2 className="text-lg font-medium text-slate-300">
              {viewTitle}
            </h2>
          </div>
          
          <div className="text-sm text-slate-400">
            {currentView + 1} / {totalViews}
          </div>
        </div>
      </div>
    </nav>
  );
};
