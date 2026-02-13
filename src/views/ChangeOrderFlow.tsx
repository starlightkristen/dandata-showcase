import { useState } from 'react';
import type { ViewProps } from '../types';
import { Mic, FileText, Send, CheckCircle, DollarSign } from 'lucide-react';
import { wilsonKitchen } from '../data/dans-quarter';

export function ChangeOrderFlow({ onNext, onPrevious }: ViewProps) {
  const [step, setStep] = useState(0);
  const changeOrder = wilsonKitchen.changeOrders[0];

  const steps = [
    {
      title: 'Client Request',
      description: '"Can we add pendant lights over the island?"',
      icon: <Mic className="w-6 h-6" />,
      time: '10 seconds',
      detail: (
        <div className="bg-slate-900 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">
              SW
            </div>
            <div>
              <div className="text-white font-semibold mb-1">{wilsonKitchen.client_name}</div>
              <div className="text-slate-300">
                "I was thinking... could we add some pendant lights over the kitchen island? 
                I saw some nice ones that would really tie the room together."
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Quick Voice Note',
      description: 'Dan records costs and scope',
      icon: <Mic className="w-6 h-6" />,
      time: '20 seconds',
      detail: (
        <div className="bg-slate-900 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>
            <div className="text-slate-400">Recording...</div>
          </div>
          <div className="text-slate-300 italic">
            "Three pendant fixtures at $185 each, plus 4 hours electrical work at $95 per hour. 
            Total $935. Wilson Kitchen change order."
          </div>
        </div>
      )
    },
    {
      title: 'Change Order Generated',
      description: 'System creates professional document',
      icon: <FileText className="w-6 h-6" />,
      time: '5 seconds',
      detail: (
        <div className="bg-slate-900 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xl font-bold text-white mb-1">{changeOrder.co_number}</div>
              <div className="text-slate-400">{changeOrder.title}</div>
            </div>
            <div className="px-3 py-1 bg-yellow-600 rounded-full text-sm font-semibold text-white">
              PENDING
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {changeOrder.line_items.map((item, idx) => (
              <div key={idx} className="flex justify-between py-2 border-b border-slate-700">
                <div>
                  <div className="text-slate-300">{item.description}</div>
                  <div className="text-slate-500 text-sm">Qty: {item.qty} @ ${item.unit_price}</div>
                </div>
                <div className="text-white font-semibold">
                  ${(item.qty * item.unit_price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t-2 border-slate-600">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-2xl font-bold text-cyan-400">${changeOrder.total.toFixed(2)}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Sent to Client',
      description: 'One-click approval link',
      icon: <Send className="w-6 h-6" />,
      time: '2 seconds',
      detail: (
        <div className="bg-slate-900 rounded-lg p-4">
          <div className="text-slate-400 text-sm mb-3">To: {wilsonKitchen.client_email}</div>
          <div className="text-white font-semibold mb-3">Change Order #{changeOrder.co_number} - Wilson Kitchen Remodel</div>
          <div className="text-slate-300 mb-4">
            Hi Sarah,<br/><br/>
            Per our conversation, here's the change order for adding pendant lighting over the island.<br/><br/>
            Click below to review and approve.
          </div>
          <button className="w-full px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold">
            Review Change Order
          </button>
        </div>
      )
    },
    {
      title: 'Approved & Added',
      description: 'Revenue captured automatically',
      icon: <CheckCircle className="w-6 h-6" />,
      time: '1 day later',
      detail: (
        <div className="bg-slate-900 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4 text-emerald-400">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Approved by {wilsonKitchen.client_name}</span>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <div className="text-slate-400 text-sm mb-1">Original Contract</div>
              <div className="text-white text-2xl font-bold">
                ${wilsonKitchen.quoted_price.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-sm mb-1">Change Orders</div>
              <div className="text-emerald-400 text-2xl font-bold">
                +${wilsonKitchen.changeOrders.reduce((sum, co) => sum + co.total, 0).toFixed(2)}
              </div>
            </div>
          </div>
          <div className="pt-4 border-t-2 border-slate-600">
            <div className="flex justify-between items-center">
              <span className="text-lg text-slate-400">New Project Total</span>
              <span className="text-3xl font-bold text-white">
                ${(wilsonKitchen.quoted_price + wilsonKitchen.changeOrders.reduce((sum, co) => sum + co.total, 0)).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Capture Every Dollar
          </h2>
          <p className="text-xl text-slate-400">
            Change orders in 30 seconds. Zero revenue leakage.
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx <= step ? 'w-12 bg-cyan-500' : 'w-8 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current step */}
        <div className="mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border-2 border-cyan-500 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                {steps[step].icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">{steps[step].title}</h3>
                <p className="text-slate-400">{steps[step].description}</p>
                <div className="mt-2 text-cyan-400 font-semibold">{steps[step].time}</div>
              </div>
            </div>
            {steps[step].detail}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Previous Step
            </button>
            <button
              onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
              disabled={step === steps.length - 1}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next Step →
            </button>
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">$935</div>
            <div className="text-slate-400">Additional revenue</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Mic className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">30 sec</div>
            <div className="text-slate-400">Total time spent</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-slate-400">Captured in system</div>
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
