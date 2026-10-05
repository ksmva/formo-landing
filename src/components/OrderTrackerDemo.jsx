import React, { useState } from 'react';
import { Truck, CheckCircle, Clock } from 'lucide-react';

export function OrderTrackerDemo({ t }) {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // 0: Qabul qilindi, 1: Bosildi, 2: Yetkazishga chiqdi, 3: Yetkazildi

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % 4);
  };

  const stepsList = [
    { title: t.tracker.steps[0], time: '10:15', desc: 'Buyurtma va dizayn tasdiqlandi' },
    { title: t.tracker.steps[1], time: '14:30', desc: "Sublimatsiya bosildi va sifat nazorati o'tdi" },
    { title: t.tracker.steps[2], time: 'Ertaga 09:30', desc: "Kuryer Sardorga biriktirildi va yo'lga chiqdi" },
    { title: t.tracker.steps[3], time: 'Ertaga 11:00', desc: 'Buyurtma muvaffaqiyatli topshirildi' }
  ];

  return (
    <section id="tracker" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-4 h-4" />
            {t.tracker.badge}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.tracker.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            {t.tracker.subtitle}
          </p>
        </div>

        {/* INTERACTIVE TRACKER WIDGET */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          {/* TRACKER TOP BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs text-slate-400 font-semibold block">{t.tracker.orderNo}</span>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                AZIZ · 10 (Real Madrid Kit)
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 font-bold border border-emerald-800">
                  75% Bajarildi
                </span>
              </h4>
            </div>

            <button
              onClick={handleNextStep}
              className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-cyan-400 transition-all self-start sm:self-auto"
            >
              Holatni sinash (Demo Click)
            </button>
          </div>

          {/* PROGRESS TIMELINE BAR */}
          <div className="relative pt-4">
            <div className="absolute top-8 left-0 right-0 h-1 bg-slate-800 z-0"></div>
            <div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 z-0"
              style={{ width: `${(activeStepIndex / 3) * 100}%` }}
            ></div>

            <div className="grid grid-cols-4 gap-2 relative z-10">
              {stepsList.map((step, idx) => {
                const isCompleted = idx <= activeStepIndex;
                const isCurrent = idx === activeStepIndex;

                return (
                  <div key={idx} className="flex flex-col items-center text-center space-y-2">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                        isCurrent
                          ? 'bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/30 scale-110'
                          : isCompleted
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-950 border border-slate-800 text-slate-500'
                      }`}
                    >
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                    </div>

                    <span
                      className={`text-xs font-bold ${
                        isCurrent ? 'text-cyan-400' : isCompleted ? 'text-white' : 'text-slate-500'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COURIER & ETA DETAILS BOX */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">{t.tracker.courier}</span>
                <span className="text-sm font-bold text-white">Sardor Karimov</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">{t.tracker.eta}</span>
                <span className="text-sm font-bold text-emerald-400">Vaqtida Yetkazish Kafolati</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
