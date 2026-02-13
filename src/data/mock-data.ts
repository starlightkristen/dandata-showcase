export const mockReceipt = {
  vendor: 'Home Depot',
  date: '2026-02-10',
  total: 1247.83,
  items: [
    { 
      description: '2x4x8 Lumber', 
      qty: 40, 
      amount: 187.60, 
      category: 'Materials', 
      taxLine: '27a' 
    },
    { 
      description: 'Deck screws', 
      qty: 3, 
      amount: 47.94, 
      category: 'Supplies', 
      taxLine: '22' 
    },
    { 
      description: 'Construction adhesive', 
      qty: 6, 
      amount: 89.76, 
      category: 'Supplies', 
      taxLine: '22' 
    },
  ],
};

export const mockProjects = [
  'Kitchen Remodel',
  'Bathroom Addition',
  'Deck Build',
];

export const mockDashboardProjects = [
  {
    id: 1,
    name: 'Kitchen Remodel',
    budget: 42500,
    spent: 18742,
    status: 'on-track',
    statusText: 'On track',
  },
  {
    id: 2,
    name: 'Bathroom Addition',
    budget: 28000,
    spent: 22400,
    status: 'watch',
    statusText: 'Watch costs',
  },
  {
    id: 3,
    name: 'Deck Build',
    budget: 15000,
    spent: 15000,
    status: 'complete',
    statusText: 'Complete',
  },
];
