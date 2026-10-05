import React, { useState } from 'react';
import { Ruler } from 'lucide-react';

export function SizeCalculator({ t }) {
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(76);
  const [activeTab, setActiveTab] = useState('adults'); // 'adults' | 'kids'

  // Size calculation algorithm
  const calculateSize = () => {
    if (height < 165 || weight < 60) return { size: 'S', ru: '44–46', chest: 96, length: 70 };
    if (height <= 173 || weight <= 70) return { size: 'M', ru: '46–48', chest: 100, length: 72 };
    if (height <= 180 || weight <= 80) return { size: 'L', ru: '48–50', chest: 104, length: 74 };
    if (height <= 187 || weight <= 90) return { size: 'XL', ru: '50–52', chest: 108, length: 76 };
    if (height <= 193 || weight <= 100) return { size: 'XXL', ru: '52–54', chest: 112, length: 78 };
    return { size: '3XL', ru: '54–56', chest: 116, length: 80 };
  };

  const rec = calculateSize();

  const adultTable = [
    { size: 'S', ru: '44–46', chest: '96 cm', length: '70 cm' },
    { size: 'M', ru: '46–48', chest: '100 cm', length: '72 cm' },
    { size: 'L', ru: '48–50', chest: '104 cm', length: '74 cm' },
    { size: 'XL', ru: '50–52', chest: '108 cm', length: '76 cm' },
    { size: 'XXL', ru: '52–54', chest: '112 cm', length: '78 cm' },
    { size: '3XL', ru: '54–56', chest: '116 cm', length: '80 cm' }
  ];

  const kidsTable = [
    { age: '2–3 yosh', height: '98 cm', size: '104' },
    { age: '4–5 yosh', height: '110 cm', size: '116' },
    { age: '6–7 yosh', height: '122 cm', size: '122' },
    { age: '8–9 yosh', height: '134 cm', size: '128' },
    { age: '10–11 yosh', height: '146 cm', size: '140' },
    { age: '12–13 yosh', height: '158 cm', size: '152' }
  ];

  return (
    <section id="size-guide" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Ruler className="w-4 h-4" />
            {t.size.title}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.size.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: HEIGHT / WEIGHT INTERACTIVE WIZARD */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
              Aqlli O'lcham Advisor
            </h3>

            {/* HEIGHT SLIDER */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-semibold">{t.size.height}</span>
                <span className="text-xl font-bold text-cyan-400">{height} sm</span>
              </div>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* WEIGHT SLIDER */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-semibold">{t.size.weight}</span>
                <span className="text-xl font-bold text-cyan-400">{weight} kg</span>
              </div>
              <input
                type="range"
                min="40"
                max="130"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* RECOMMENDED RESULT BOX */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-cyan-950/60 to-blue-950/40 border border-cyan-500/40 text-center space-y-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block">
                {t.size.recTitle}
              </span>
              <div className="text-5xl font-black text-cyan-400 tracking-wider">
                {rec.size}
              </div>
              <div className="text-xs text-slate-400">
                RU {rec.ru} · Ko'krak: {rec.chest}cm · Uzunlik: {rec.length}cm
              </div>
            </div>
          </div>

          {/* RIGHT: TABBED MEASUREMENT TABLE */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">{t.size.chartTitle}</h3>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('adults')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'adults'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.size.tabAdults}
                </button>
                <button
                  onClick={() => setActiveTab('kids')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === 'kids'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.size.tabKids}
                </button>
              </div>
            </div>

            {/* ADULTS TABLE */}
            {activeTab === 'adults' ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-bold">
                      <th className="pb-3 px-2">{t.size.sizeCol}</th>
                      <th className="pb-3 px-2">{t.size.ruCol}</th>
                      <th className="pb-3 px-2">{t.size.chestCol}</th>
                      <th className="pb-3 px-2">{t.size.lengthCol}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium text-slate-200">
                    {adultTable.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`hover:bg-slate-800/40 transition-colors ${
                          rec.size === row.size ? 'bg-cyan-950/40 text-cyan-400 font-bold' : ''
                        }`}
                      >
                        <td className="py-3 px-2 font-bold">{row.size}</td>
                        <td className="py-3 px-2">{row.ru}</td>
                        <td className="py-3 px-2">{row.chest}</td>
                        <td className="py-3 px-2">{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              /* KIDS TABLE */
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-bold">
                      <th className="pb-3 px-2">Farzandingiz Yoshi</th>
                      <th className="pb-3 px-2">Bo'y Taxmini</th>
                      <th className="pb-3 px-2">Tavsiya O'lcham</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium text-slate-200">
                    {kidsTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-2 font-bold">{row.age}</td>
                        <td className="py-3 px-2">{row.height}</td>
                        <td className="py-3 px-2 text-cyan-400 font-bold">{row.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
