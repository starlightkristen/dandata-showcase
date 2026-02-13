import { useState } from 'react';
import type { ViewProps } from '../types';
import { FileText, Send, CheckCircle, DollarSign, Clock } from 'lucide-react';
import { wilsonKitchen } from '../data/dans-quarter';

export function InvoiceFlow({ onNext, onPrevious }: ViewProps) {
  const [currentDay, setCurrentDay] = useState(0);
  const invoice = wilsonKitchen.invoices[0];

  const timeline = [
    {
      day: 0,
      title: 'Phase Complete',
      description: 'Cabinet installation finished',
      action: 'Create invoice',
      icon: <FileText className="w-6 h-6" />
    },
    {
      day: 1,
      title: 'Invoice Sent',
      description: 'Email sent to Sarah Wilson',
      action: 'Client reviews',
      icon: <Send className="w-6 h-6" />
    },
    {
      day: 2,
      title: 'Client Approves',
      description: 'Sarah clicks "Pay Invoice"',
      action: 'Payment processing',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      day: 3,
      title: 'Money in Account',
      description: '$21,250 deposited',
      action: 'Project continues',
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get Paid in 3 Days
          </h2>
          <p className="text-xl text-slate-400">
            Professional invoices. Fast payment. No chasing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          {/* Progress line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700">
            <div 
              className="h-full bg-cyan-500 transition-all duration-500"
              style={{ width: `${(currentDay / 3) * 100}%` }}
            />
          </div>

          {/* Timeline items */}
          <div className="relative grid grid-cols-4 gap-4">
            {timeline.map((item, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all ${
                    idx <= currentDay
                      ? 'bg-cyan-600 text-white scale-110'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {item.icon}
                </div>
                <div className={`font-bold mb-1 ${idx <= currentDay ? 'text-white' : 'text-slate-500'}`}>
                  Day {item.day}
                </div>
                <div className={`text-sm mb-2 ${idx <= currentDay ? 'text-cyan-400' : 'text-slate-600'}`}>
                  {item.title}
                </div>
                <div className={`text-xs ${idx <= currentDay ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice preview */}
        {currentDay >= 1 && (
          <div className="bg-slate-800 rounded-xl p-8 mb-8 border-2 border-slate-700">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{invoice.invoice_number}</h3>
                <div className="text-slate-400">{wilsonKitchen.client_name}</div>
                <div className="text-slate-400">{wilsonKitchen.client_email}</div>
              </div>
              <div className="text-right">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  currentDay >= 3 ? 'bg-emerald-600 text-white' : 'bg-cyan-600 text-white'
                }`}>
                  {currentDay >= 3 ? 'PAID' : 'SENT'}
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {invoice.line_items.map((item, idx) => (
                <div key={idx} className="flex justify-between py-3 border-b border-slate-700">
                  <span className="text-slate-300">{item.description}</span>
                  <span className="text-white font-semibold">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t-2 border-slate-600">
              <span className="text-xl font-bold text-white">Total</span>
              <span className="text-3xl font-bold text-cyan-400">
                ${invoice.total.toLocaleString()}
              </span>
            </div>

            {currentDay >= 3 && (
              <div className="mt-6 flex items-center gap-3 text-emerald-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">
                  Paid on {invoice.paid_date} — 3 days after sending
                </span>
              </div>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setCurrentDay(Math.max(0, currentDay - 1))}
            disabled={currentDay === 0}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous Day
          </button>
          
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-5 h-5" />
            <span>Day {currentDay} of 3</span>
          </div>

          <button
            onClick={() => setCurrentDay(Math.min(3, currentDay + 1))}
            disabled={currentDay === 3}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next Day →
          </button>
        </div>

        {/* Key points */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1 min</div>
            <div className="text-slate-400">To create invoice</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1 click</div>
            <div className="text-slate-400">For client to pay</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">3 days</div>
            <div className="text-slate-400">Average payment time</div>
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
