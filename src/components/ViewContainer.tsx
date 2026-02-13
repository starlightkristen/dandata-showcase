import React from 'react';

interface ViewContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ViewContainer: React.FC<ViewContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full overflow-y-auto ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        {children}
      </div>
    </div>
  );
};
