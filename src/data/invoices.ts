export interface Invoice {
  id: string;
  project_id: string;
  invoice_number: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  issued_date?: string;
  due_date?: string;
  paid_date?: string;
}

export const mockInvoices: Invoice[] = [
  {
    id: 'inv_001',
    project_id: 'proj_001',
    invoice_number: 'INV-2026-001',
    amount: 21250.00,
    status: 'paid',
    issued_date: '2026-01-20',
    due_date: '2026-02-03',
    paid_date: '2026-01-28'
  },
  {
    id: 'inv_002',
    project_id: 'proj_002',
    invoice_number: 'INV-2026-002',
    amount: 14000.00,
    status: 'sent',
    issued_date: '2026-02-05',
    due_date: '2026-02-19'
  },
  {
    id: 'inv_003',
    project_id: 'proj_003',
    invoice_number: 'INV-2026-003',
    amount: 15800.00,
    status: 'paid',
    issued_date: '2026-01-28',
    due_date: '2026-02-11',
    paid_date: '2026-02-08'
  }
];
