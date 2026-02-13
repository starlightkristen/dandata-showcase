// Types
export interface Worker {
  name: string;
  role: string;
  hours: number;
}

export interface WeatherConditions {
  temperature: number;
  condition: string;
  wmo_code: number;
}

export interface DailyLog {
  id: string;
  log_date: string;
  summary: string;
  hours_worked: number;
  workers_on_site: Worker[];
  weather_conditions: WeatherConditions;
}

export interface ExpenseItem {
  description: string;
  qty: number;
  amount: number;
  category: string;
}

export interface Expense {
  id: string;
  date: string;
  vendor: string;
  amount: number;
  category: string;
  tax_category: string;
  tax_line: string;
  description: string;
  items: ExpenseItem[];
  confidence_score: number;
  method: 'ai' | 'manual';
}

export interface InvoiceLineItem {
  description: string;
  amount: number;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  total: number;
  amount_paid: number;
  due_date: string;
  paid_date?: string;
  line_items: InvoiceLineItem[];
}

export interface ChangeOrderLineItem {
  description: string;
  qty: number;
  unit_price: number;
}

export interface ChangeOrder {
  id: string;
  co_number: string;
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  total: number;
  line_items: ChangeOrderLineItem[];
  date_created: string;
  date_approved?: string;
}

export interface Project {
  id: string;
  name: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  status: 'in_progress' | 'completed' | 'on_hold';
  quoted_price: number;
  start_date: string;
  estimated_completion: string;
  expenses: Expense[];
  invoices: Invoice[];
  changeOrders: ChangeOrder[];
  dailyLogs: DailyLog[];
}

// Main project featured in demos
export const wilsonKitchen: Project = {
  id: 'proj_001',
  name: 'Wilson Kitchen Remodel',
  client_name: 'Sarah Wilson',
  client_email: 'sarah.wilson@email.com',
  client_phone: '(555) 234-5678',
  status: 'in_progress',
  quoted_price: 42500.00,
  start_date: '2026-01-15',
  estimated_completion: '2026-03-30',
  
  expenses: [
    {
      id: 'exp_001',
      date: '2026-02-10',
      vendor: 'Home Depot',
      amount: 1247.83,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Lumber and framing materials',
      items: [
        { description: '2x4x8 Lumber', qty: 40, amount: 187.60, category: 'Materials' },
        { description: 'Plywood 4x8', qty: 12, amount: 432.00, category: 'Materials' },
        { description: 'Deck screws variety', qty: 3, amount: 47.94, category: 'Supplies' },
        { description: 'Construction adhesive', qty: 6, amount: 89.76, category: 'Supplies' },
        { description: 'Misc hardware', qty: 1, amount: 490.53, category: 'Materials' }
      ],
      confidence_score: 0.94,
      method: 'ai'
    },
    {
      id: 'exp_002',
      date: '2026-02-08',
      vendor: 'Ferguson Plumbing',
      amount: 3421.50,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Kitchen faucet, sink, and fixtures',
      items: [
        { description: 'Kohler farmhouse sink', qty: 1, amount: 875.00, category: 'Materials' },
        { description: 'Delta kitchen faucet', qty: 1, amount: 425.50, category: 'Materials' },
        { description: 'Garbage disposal', qty: 1, amount: 289.00, category: 'Materials' },
        { description: 'Supply lines and fittings', qty: 1, amount: 1832.00, category: 'Supplies' }
      ],
      confidence_score: 0.97,
      method: 'ai'
    },
    {
      id: 'exp_003',
      date: '2026-02-05',
      vendor: 'Cabinet World',
      amount: 8950.00,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Custom kitchen cabinets',
      items: [
        { description: 'Upper cabinets', qty: 8, amount: 3200.00, category: 'Materials' },
        { description: 'Lower cabinets', qty: 10, amount: 4500.00, category: 'Materials' },
        { description: 'Soft-close hardware', qty: 1, amount: 650.00, category: 'Supplies' },
        { description: 'Crown molding', qty: 1, amount: 600.00, category: 'Materials' }
      ],
      confidence_score: 0.99,
      method: 'ai'
    },
    {
      id: 'exp_004',
      date: '2026-02-12',
      vendor: 'Granite & Marble Co',
      amount: 4875.00,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Quartz countertops',
      items: [
        { description: 'Quartz countertop material', qty: 42, amount: 4200.00, category: 'Materials' },
        { description: 'Fabrication and install', qty: 1, amount: 675.00, category: 'Labor' }
      ],
      confidence_score: 0.92,
      method: 'ai'
    },
    {
      id: 'exp_005',
      date: '2026-02-11',
      vendor: 'Electrical Supply House',
      amount: 1125.75,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Lighting fixtures and electrical',
      items: [
        { description: 'Recessed LED lights', qty: 8, amount: 560.00, category: 'Materials' },
        { description: 'Under-cabinet lighting', qty: 3, amount: 285.00, category: 'Materials' },
        { description: 'Pendant fixtures', qty: 3, amount: 555.00, category: 'Materials' },
        { description: 'Wire and conduit', qty: 1, amount: 125.75, category: 'Supplies' }
      ],
      confidence_score: 0.95,
      method: 'ai'
    }
  ],
  
  invoices: [
    {
      id: 'inv_001',
      invoice_number: 'INV-2026-001',
      status: 'paid',
      total: 21250.00,
      amount_paid: 21250.00,
      due_date: '2026-02-17',
      paid_date: '2026-02-13',
      line_items: [
        { description: 'Phase 1: Demo and framing', amount: 8500 },
        { description: 'Phase 2: Electrical and plumbing', amount: 7250 },
        { description: 'Materials deposit', amount: 5500 }
      ]
    },
    {
      id: 'inv_002',
      invoice_number: 'INV-2026-002',
      status: 'sent',
      total: 14375.00,
      amount_paid: 0,
      due_date: '2026-02-20',
      line_items: [
        { description: 'Phase 3: Cabinet installation', amount: 9500 },
        { description: 'Phase 4: Countertop install', amount: 4875 }
      ]
    }
  ],
  
  changeOrders: [
    {
      id: 'co_001',
      co_number: 'CO-001',
      title: 'Add pendant lighting over island',
      status: 'approved',
      total: 935.00,
      date_created: '2026-02-10',
      date_approved: '2026-02-11',
      line_items: [
        { description: '3x Pendant fixtures', qty: 3, unit_price: 185.00 },
        { description: 'Electrical installation', qty: 4, unit_price: 95.00 }
      ]
    },
    {
      id: 'co_002',
      co_number: 'CO-002',
      title: 'Upgrade to soft-close cabinet hardware',
      status: 'approved',
      total: 650.00,
      date_created: '2026-02-05',
      date_approved: '2026-02-06',
      line_items: [
        { description: 'Soft-close hinges and slides', qty: 18, unit_price: 36.11 }
      ]
    }
  ],
  
  dailyLogs: [
    {
      id: 'log_001',
      log_date: '2026-02-12',
      summary: 'Cabinet installation, drywall repair, pendant fixture prep',
      hours_worked: 8.5,
      workers_on_site: [
        { name: 'Dan', role: 'Lead', hours: 8.5 },
        { name: 'Mike', role: 'Helper', hours: 8.0 }
      ],
      weather_conditions: {
        temperature: 42,
        condition: 'Partly cloudy',
        wmo_code: 2
      }
    },
    {
      id: 'log_002',
      log_date: '2026-02-11',
      summary: 'Electrical rough-in for island pendants, plumbing connections',
      hours_worked: 7.5,
      workers_on_site: [
        { name: 'Dan', role: 'Lead', hours: 7.5 },
        { name: 'Tom (electrician)', role: 'Subcontractor', hours: 6.0 }
      ],
      weather_conditions: {
        temperature: 38,
        condition: 'Clear',
        wmo_code: 0
      }
    },
    {
      id: 'log_003',
      log_date: '2026-02-10',
      summary: 'Cabinet delivery and inspection, site prep for installation',
      hours_worked: 6.0,
      workers_on_site: [
        { name: 'Dan', role: 'Lead', hours: 6.0 }
      ],
      weather_conditions: {
        temperature: 45,
        condition: 'Light rain',
        wmo_code: 61
      }
    }
  ]
};

// Supporting project 1
export const martinezBathroom: Project = {
  id: 'proj_002',
  name: 'Martinez Master Bath',
  client_name: 'Carlos Martinez',
  client_email: 'carlos.martinez@email.com',
  client_phone: '(555) 876-5432',
  status: 'in_progress',
  quoted_price: 18500.00,
  start_date: '2026-01-20',
  estimated_completion: '2026-03-10',
  expenses: [
    {
      id: 'exp_101',
      date: '2026-02-09',
      vendor: 'Tile Depot',
      amount: 2340.50,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Bathroom tile and grout',
      items: [
        { description: 'Porcelain floor tile', qty: 80, amount: 1280.00, category: 'Materials' },
        { description: 'Wall tile', qty: 120, amount: 840.00, category: 'Materials' },
        { description: 'Grout and thinset', qty: 1, amount: 220.50, category: 'Supplies' }
      ],
      confidence_score: 0.96,
      method: 'ai'
    }
  ],
  invoices: [
    {
      id: 'inv_101',
      invoice_number: 'INV-2026-003',
      status: 'sent',
      total: 9250.00,
      amount_paid: 0,
      due_date: '2026-02-18',
      line_items: [
        { description: 'Phase 1: Demo and rough-in', amount: 5500 },
        { description: 'Materials deposit', amount: 3750 }
      ]
    }
  ],
  changeOrders: [],
  dailyLogs: [
    {
      id: 'log_101',
      log_date: '2026-02-09',
      summary: 'Tile installation started, shower pan complete',
      hours_worked: 8.0,
      workers_on_site: [
        { name: 'Dan', role: 'Lead', hours: 8.0 },
        { name: 'Mike', role: 'Helper', hours: 8.0 }
      ],
      weather_conditions: {
        temperature: 48,
        condition: 'Overcast',
        wmo_code: 3
      }
    }
  ]
};

// Supporting project 2
export const thompsonDeck: Project = {
  id: 'proj_003',
  name: 'Thompson Deck Build',
  client_name: 'Jennifer Thompson',
  client_email: 'jen.thompson@email.com',
  client_phone: '(555) 345-6789',
  status: 'in_progress',
  quoted_price: 12800.00,
  start_date: '2026-02-01',
  estimated_completion: '2026-03-15',
  expenses: [
    {
      id: 'exp_201',
      date: '2026-02-07',
      vendor: 'Lumber Yard',
      amount: 3675.25,
      category: 'Materials',
      tax_category: 'Other expenses — Materials',
      tax_line: '27a',
      description: 'Pressure-treated deck lumber',
      items: [
        { description: '4x4 posts', qty: 12, amount: 456.00, category: 'Materials' },
        { description: '2x10 joists', qty: 28, amount: 1568.00, category: 'Materials' },
        { description: '5/4 decking boards', qty: 85, amount: 1487.25, category: 'Materials' },
        { description: 'Hardware and fasteners', qty: 1, amount: 164.00, category: 'Supplies' }
      ],
      confidence_score: 0.93,
      method: 'ai'
    }
  ],
  invoices: [
    {
      id: 'inv_201',
      invoice_number: 'INV-2026-004',
      status: 'draft',
      total: 6400.00,
      amount_paid: 0,
      due_date: '2026-02-22',
      line_items: [
        { description: 'Phase 1: Foundation and framing', amount: 4000 },
        { description: 'Materials deposit', amount: 2400 }
      ]
    }
  ],
  changeOrders: [],
  dailyLogs: [
    {
      id: 'log_201',
      log_date: '2026-02-08',
      summary: 'Foundation posts set, joist framing in progress',
      hours_worked: 8.0,
      workers_on_site: [
        { name: 'Dan', role: 'Lead', hours: 8.0 }
      ],
      weather_conditions: {
        temperature: 52,
        condition: 'Clear',
        wmo_code: 0
      }
    }
  ]
};

// All projects
export const DANS_QUARTER = {
  wilsonKitchen,
  martinezBathroom,
  thompsonDeck
};

// Helper function to get all projects as array
export const getAllProjects = (): Project[] => [
  wilsonKitchen,
  martinezBathroom,
  thompsonDeck
];

// Calculate quarter statistics
export const getQuarterStats = () => {
  const allProjects = getAllProjects();
  const totalExpenses = allProjects.reduce(
    (sum, project) => sum + project.expenses.length,
    0
  );
  const totalRevenue = allProjects.reduce(
    (sum, project) => sum + project.quoted_price,
    0
  );
  const totalExpenseAmount = allProjects.reduce(
    (sum, project) => sum + project.expenses.reduce((s, e) => s + e.amount, 0),
    0
  );
  
  return {
    activeProjects: allProjects.filter(p => p.status === 'in_progress').length,
    totalExpenses,
    totalRevenue,
    totalExpenseAmount,
    avgProcessingTime: 5 // seconds
  };
};
