export interface Expense {
  id: string;
  project_id: string;
  vendor: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  receipt_email?: boolean;
}

export const mockExpenses: Expense[] = [
  {
    id: 'exp_001',
    project_id: 'proj_001',
    vendor: 'Home Depot',
    amount: 1247.83,
    date: '2026-02-10',
    category: 'Materials - Schedule C Line 27a',
    description: 'Cabinet hardware, paint supplies',
    receipt_email: true
  },
  {
    id: 'exp_002',
    project_id: 'proj_001',
    vendor: 'Lowes',
    amount: 892.45,
    date: '2026-02-09',
    category: 'Materials - Schedule C Line 27a',
    description: 'Plumbing fixtures, countertop materials',
    receipt_email: true
  },
  {
    id: 'exp_003',
    project_id: 'proj_002',
    vendor: 'Ferguson Supply',
    amount: 2145.00,
    date: '2026-02-08',
    category: 'Materials - Schedule C Line 27a',
    description: 'Bathroom vanity, toilet, shower kit',
    receipt_email: false
  },
  {
    id: 'exp_004',
    project_id: 'proj_001',
    vendor: 'Shell Gas Station',
    amount: 67.23,
    date: '2026-02-07',
    category: 'Vehicle Fuel - Schedule C Line 9',
    description: 'Fuel for work truck',
    receipt_email: true
  },
  {
    id: 'exp_005',
    project_id: 'proj_002',
    vendor: 'Home Depot',
    amount: 456.78,
    date: '2026-02-07',
    category: 'Materials - Schedule C Line 27a',
    description: 'Framing lumber, drywall',
    receipt_email: true
  },
  {
    id: 'exp_006',
    project_id: 'proj_001',
    vendor: 'Electrical Wholesale',
    amount: 324.50,
    date: '2026-02-06',
    category: 'Materials - Schedule C Line 27a',
    description: 'Wiring, outlets, light fixtures',
    receipt_email: false
  },
  {
    id: 'exp_007',
    project_id: 'proj_003',
    vendor: '84 Lumber',
    amount: 3450.00,
    date: '2026-01-25',
    category: 'Materials - Schedule C Line 27a',
    description: 'Pressure treated decking, posts',
    receipt_email: false
  },
  {
    id: 'exp_008',
    project_id: 'proj_002',
    vendor: 'Costco',
    amount: 89.99,
    date: '2026-02-05',
    category: 'Supplies - Schedule C Line 22',
    description: 'Safety equipment, work gloves',
    receipt_email: true
  },
  {
    id: 'exp_009',
    project_id: 'proj_001',
    vendor: 'Chevron',
    amount: 72.15,
    date: '2026-02-04',
    category: 'Vehicle Fuel - Schedule C Line 9',
    description: 'Fuel for work truck',
    receipt_email: true
  },
  {
    id: 'exp_010',
    project_id: 'proj_002',
    vendor: 'Ace Hardware',
    amount: 134.67,
    date: '2026-02-03',
    category: 'Tools - Schedule C Line 22',
    description: 'Drill bits, saw blades, fasteners',
    receipt_email: true
  },
  {
    id: 'exp_011',
    project_id: 'proj_001',
    vendor: 'Granite & Marble Warehouse',
    amount: 4200.00,
    date: '2026-02-02',
    category: 'Materials - Schedule C Line 27a',
    description: 'Kitchen countertop - Quartz',
    receipt_email: false
  },
  {
    id: 'exp_012',
    project_id: 'proj_003',
    vendor: 'Home Depot',
    amount: 567.89,
    date: '2026-01-20',
    category: 'Materials - Schedule C Line 27a',
    description: 'Deck screws, stain, sealer',
    receipt_email: true
  }
];
