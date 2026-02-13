import type { ViewProps } from '../types';
import { TrendingUp, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';
import { wilsonKitchen } from '../data/dans-quarter';

export function ProjectDashboard({ onNext, onPrevious }: ViewProps) {
  // Calculate project financials
  const totalExpenses = wilsonKitchen.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const totalInvoiced = wilsonKitchen.invoices.reduce((sum, inv) => sum + inv.total, 0);
  const totalPaid = wilsonKitchen.invoices.reduce((sum, inv) => sum + inv.amount_paid, 0);
  const totalChangeOrders = wilsonKitchen.changeOrders
    .filter(co => co.status === 'approved')
    .reduce((sum, co) => sum + co.total, 0);
  const adjustedContract = wilsonKitchen.quoted_price + totalChangeOrders;
  const remainingToBill = adjustedContract - totalInvoiced;
  const profit = totalPaid - totalExpenses;
  const profitMargin = (profit / totalPaid) * 100;

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Know Your Numbers NOW
          </h2>
          <p className="text-xl text-slate-400">
            Real-time project financials. Not spreadsheets from last week.
          </p>
        </div>

        {/* Project header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 mb-8 border-2 border-cyan-500/50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{wilsonKitchen.name}</h3>
              <div className="text-slate-300">{wilsonKitchen.client_name}</div>
              <div className="text-slate-400 text-sm">
                Started {wilsonKitchen.start_date} • Est. completion {wilsonKitchen.estimated_completion}
              </div>
            </div>
            <div className="px-4 py-2 bg-cyan-600 rounded-full text-white font-semibold">
              IN PROGRESS
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-cyan-400" />
              <div className="text-slate-400 text-sm">Contract Value</div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ${adjustedContract.toLocaleString()}
            </div>
            {totalChangeOrders > 0 && (
              <div className="text-emerald-400 text-sm">
                +${totalChangeOrders.toLocaleString()} change orders
              </div>
            )}
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <div className="text-slate-400 text-sm">Collected</div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ${totalPaid.toLocaleString()}
            </div>
            <div className="text-slate-400 text-sm">
              {((totalPaid / adjustedContract) * 100).toFixed(0)}% of contract
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <div className="text-slate-400 text-sm">To Bill</div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ${remainingToBill.toLocaleString()}
            </div>
            <div className="text-slate-400 text-sm">
              Ready to invoice
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <div className="text-slate-400 text-sm">Profit</div>
            </div>
            <div className="text-3xl font-bold text-emerald-400 mb-1">
              ${profit.toLocaleString()}
            </div>
            <div className="text-slate-400 text-sm">
              {profitMargin.toFixed(1)}% margin
            </div>
          </div>
        </div>

        {/* Detailed breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Expenses */}
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4">Recent Expenses</h4>
            <div className="space-y-3">
              {wilsonKitchen.expenses.slice(0, 5).map((expense) => (
                <div key={expense.id} className="flex justify-between items-start py-3 border-b border-slate-700 last:border-0">
                  <div>
                    <div className="text-white font-semibold">{expense.vendor}</div>
                    <div className="text-slate-400 text-sm">{expense.description}</div>
                    <div className="text-slate-500 text-xs">{expense.date}</div>
                  </div>
                  <div className="text-white font-semibold">${expense.amount.toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t-2 border-slate-600 flex justify-between items-center">
              <span className="text-slate-400">Total Expenses</span>
              <span className="text-2xl font-bold text-white">${totalExpenses.toLocaleString()}</span>
            </div>
          </div>

          {/* Invoices */}
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-slate-700">
            <h4 className="text-xl font-bold text-white mb-4">Invoices</h4>
            <div className="space-y-3">
              {wilsonKitchen.invoices.map((invoice) => (
                <div key={invoice.id} className="py-3 border-b border-slate-700 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-white font-semibold">{invoice.invoice_number}</div>
                      <div className="text-slate-400 text-sm">Due: {invoice.due_date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">${invoice.total.toLocaleString()}</div>
                      <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                        invoice.status === 'paid' ? 'bg-emerald-600 text-white' :
                        invoice.status === 'sent' ? 'bg-cyan-600 text-white' :
                        'bg-slate-600 text-white'
                      }`}>
                        {invoice.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  {invoice.status === 'paid' && invoice.paid_date && (
                    <div className="text-emerald-400 text-sm flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Paid {invoice.paid_date}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t-2 border-slate-600 flex justify-between items-center">
              <span className="text-slate-400">Total Invoiced</span>
              <span className="text-2xl font-bold text-white">${totalInvoiced.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* The point */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 rounded-xl p-8 mb-12 border-2 border-cyan-500/50 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Always Know Where You Stand</h3>
          <p className="text-xl text-slate-300 mb-4">
            Every expense tracked. Every invoice recorded. Profit calculated in real-time.
          </p>
          <div className="text-lg text-cyan-400 font-semibold">
            No guessing. No surprises. Just facts.
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
