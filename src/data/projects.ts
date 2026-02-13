export interface Project {
  id: string;
  name: string;
  client_name: string;
  status: 'in_progress' | 'completed' | 'quoted';
  quoted_price: number;
  start_date?: string;
  estimated_completion?: string;
  completed_at?: string;
  project_type: string;
}

export const mockProjects: Project[] = [
  {
    id: 'proj_001',
    name: 'Wilson Kitchen Remodel',
    client_name: 'Sarah Wilson',
    status: 'in_progress',
    quoted_price: 42500.00,
    start_date: '2026-01-15',
    estimated_completion: '2026-03-30',
    project_type: 'Kitchen Renovation'
  },
  {
    id: 'proj_002',
    name: 'Martinez Bathroom Addition',
    client_name: 'Carlos Martinez',
    status: 'in_progress',
    quoted_price: 28000.00,
    start_date: '2026-02-01',
    estimated_completion: '2026-04-15',
    project_type: 'Bathroom Addition'
  },
  {
    id: 'proj_003',
    name: 'Thompson Deck Build',
    client_name: 'Mike Thompson',
    status: 'completed',
    quoted_price: 15800.00,
    start_date: '2025-12-01',
    completed_at: '2026-01-28',
    project_type: 'Deck Construction'
  }
];
