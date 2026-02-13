export interface ChangeOrder {
  id: string;
  project_id: string;
  description: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  created_date: string;
  approved_date?: string;
}

export const mockChangeOrders: ChangeOrder[] = [
  {
    id: 'co_001',
    project_id: 'proj_001',
    description: 'Add tile backsplash to kitchen',
    amount: 1850.00,
    status: 'approved',
    created_date: '2026-02-01',
    approved_date: '2026-02-03'
  },
  {
    id: 'co_002',
    project_id: 'proj_002',
    description: 'Upgrade to heated floor tiles',
    amount: 2200.00,
    status: 'pending',
    created_date: '2026-02-08'
  }
];
