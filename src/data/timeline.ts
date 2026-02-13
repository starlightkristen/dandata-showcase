export interface TimelinePhase {
  phase: string;
  period: string;
  status: 'completed' | 'in_progress' | 'planned';
  features: string[];
}

export const developmentTimeline: TimelinePhase[] = [
  {
    phase: 'Phase 0: Foundation',
    period: 'Aug - Sep 2025',
    status: 'completed',
    features: [
      'Email receipt processing',
      'Basic expense extraction',
      'Project setup & tracking',
      'Manual categorization'
    ]
  },
  {
    phase: 'Phase 1: Intelligence',
    period: 'Oct - Nov 2025',
    status: 'completed',
    features: [
      'AI-powered expense categorization',
      'Project matching with confidence scores',
      'Tax category assignment',
      'Smart vendor recognition'
    ]
  },
  {
    phase: 'Phase 2: Workflows',
    period: 'Dec 2025 - Jan 2026',
    status: 'completed',
    features: [
      'Invoice generation & tracking',
      'Change order management',
      'Daily log creation',
      'Document storage'
    ]
  },
  {
    phase: 'Phase 2.5: Speed & Polish',
    period: 'Feb 2026',
    status: 'completed',
    features: [
      'Sub-8 second processing',
      'Mobile-first design',
      'Real-time notifications',
      'Dashboard analytics'
    ]
  },
  {
    phase: 'Phase 3: Scale',
    period: 'Mar - Apr 2026',
    status: 'planned',
    features: [
      'Multi-user teams',
      'Subcontractor management',
      'Advanced reporting',
      'API integrations'
    ]
  }
];
