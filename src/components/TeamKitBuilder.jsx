import React, { useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';

export function TeamKitBuilder({ t }) {
  const [quantity, setQuantity] = useState(15);
  const basePricePerKit = 219000; // Complete Jersey + Shorts kit

  let discountPercent = 0;
  if (quantity >= 10 && quantity < 20) discountPercent = 10;
  else if (quantity >= 20 && quantity < 50) discountPercent = 15;
  else if (quantity >= 50) discountPercent = 20;

  const discountedPricePerKit = Math.round(basePricePerKit * (1 - discountPercent / 100));
  const totalOriginal = basePricePerKit * quantity;
  const totalDiscounted = discountedPricePerKit * quantity;
  const totalSavings = totalOriginal - totalDiscounted;

  const formatUzS = (num) => new Intl.NumberFormat('uz-UZ').format(num) + " so'm";

  return (
    <section id="team-kits" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: INFORMATION & TIERS */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              {t.team.calcTitle}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.team.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.team.subtitle}
            </p>

            {/* TIERS LIST */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-300">{t.team.tier1}</span>
                <span className="font-bold text-slate-400">0% Chegirma</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-300">{t.team.tier2}</span>
                <span className="font-bold text-cyan-400">10% Chegirma</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-300">{t.team.tier3}</span>
                <span className="font-bold text-cyan-400">15% Chegirma</span>
              </div>
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/50 to-blue-950/40 border border-cyan-500/30 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-white font-bold">{t.team.tier4}</span>
                <span className="font-extrabold text-emerald-400">20% Chegirma + Bepul</span>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE BULK CALCULATOR CARD */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
              {t.team.calcTitle}
            </h3>

            {/* QUANTITY SLIDER */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-300">{t.team.quantity}</span>
                <span className="text-2xl font-black text-cyan-400">{quantity} dona</span>
              </div>

              <input
                type="range"
                min="1"
                max="100"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-950 rounded-lg"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 dona</span>
                <span>25 dona</span>
                <span>50 dona</span>
                <span>100 dona</span>
              </div>
            </div>

            {/* SAVINGS SUMMARY BOX */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex justify-between text-sm text-slate-400">
                <span>{t.team.discountApplied}</span>
                <span className="font-bold text-cyan-400">{discountPercent}%</span>
              </div>

              <div className="flex justify-between text-sm text-slate-400">
                <span>{t.team.perKitPrice}</span>
                <span className="font-bold text-white">{formatUzS(discountedPricePerKit)}</span>
              </div>

              {totalSavings > 0 && (
                <div className="flex justify-between text-xs text-emerald-400 font-semibold pt-1 border-t border-slate-900">
                  <span>Tejalgan pul:</span>
                  <span>-{formatUzS(totalSavings)}</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                <span className="text-sm font-bold text-slate-200">{t.team.totalAmount}</span>
                <span className="text-2xl sm:text-3xl font-black text-cyan-400">
                  {formatUzS(totalDiscounted)}
                </span>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <a
              href="#customizer"
              className="w-full py-4 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.team.requestQuote}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
