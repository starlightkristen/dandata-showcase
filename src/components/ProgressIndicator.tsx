import React from 'react';

interface ProgressIndicatorProps {
  currentView: number;
  totalViews: number;
  onViewChange: (index: number) => void;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentView,
  totalViews,
  onViewChange,
}) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalViews }).map((_, index) => (
        <button
          key={index}
          onClick={() => onViewChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentView
              ? 'bg-dandata-cyan scale-125'
              : 'bg-slate-600 hover:bg-slate-500'
          }`}
          aria-label={`Go to view ${index + 1}`}
        />
      ))}
    </div>
  );
};
