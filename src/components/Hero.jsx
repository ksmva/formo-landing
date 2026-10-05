import React, { useState } from 'react';
import { ArrowRight, Camera, Sparkles, Zap, Star } from 'lucide-react';
import { JerseySvg } from './JerseySvg';

export function Hero({ t }) {
  const [heroColor, setHeroColor] = useState('#1D2F8C');
  const [heroSecondary, setHeroSecondary] = useState('#F2A33A');
  const [heroName, setHeroName] = useState('AZIZ');
  const [heroNumber, setHeroNumber] = useState('10');
  const [heroView, setHeroView] = useState('front');

  const presetColors = [
    { p: '#1D2F8C', s: '#F2A33A', label: 'Real Classic' },
    { p: '#E10600', s: '#000000', label: 'Flame Red' },
    { p: '#059669', s: '#F59E0B', label: 'Emerald Gold' },
    { p: '#4F46E5', s: '#EC4899', label: 'Cyberpunk' },
    { p: '#111827', s: '#D4AF37', label: 'Black Gold' }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      {/* BACKGROUND GLOW LIGHTS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm font-semibold text-cyan-400 shadow-xl backdrop-blur-md animate-bounce-subtle">
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>{t.hero.badge}</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              {t.hero.title}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                {t.hero.titleGradient}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#customizer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#ar-tryon"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all flex items-center justify-center gap-3"
              >
                <Camera className="w-5 h-5 text-cyan-400" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* STATS GRID */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stats.jerseys}</div>
                <div className="text-xs text-slate-400">{t.hero.stats.jerseysLabel}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stats.teams}</div>
                <div className="text-xs text-slate-400">{t.hero.stats.teamsLabel}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 flex items-center gap-1 justify-center lg:justify-start">
                  <Star className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  {t.hero.stats.rating}
                </div>
                <div className="text-xs text-slate-400">{t.hero.stats.ratingLabel}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">{t.hero.stats.delivery}</div>
                <div className="text-xs text-slate-400">{t.hero.stats.deliveryLabel}</div>
              </div>
            </div>
          </div>

          {/* RIGHT HERO INTERACTIVE WIDGET */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* FLOATING GLASS CONTAINER */}
            <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-2xl backdrop-blur-xl relative">
              {/* TOP HERO PRESET SELECTOR */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Interactive Live Demo
                  </span>
                </div>
                {/* View Switcher */}
                <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setHeroView('front')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      heroView === 'front' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Front
                  </button>
                  <button
                    onClick={() => setHeroView('back')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      heroView === 'back' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    Back
                  </button>
                </div>
              </div>

              {/* JERSEY PREVIEW CANVAS */}
              <div className="py-2 bg-gradient-to-b from-slate-950 to-slate-900/90 rounded-2xl border border-slate-800 flex items-center justify-center min-h-[360px] relative">
                <JerseySvg
                  config={{
                    primaryColor: heroColor,
                    secondaryColor: heroSecondary,
                    useGradient: true,
                    playerName: heroName,
                    playerNumber: heroNumber,
                    frontText: 'FORMO'
                  }}
                  view={heroView}
                  width={290}
                  height={350}
                />
              </div>

              {/* QUICK CONTROLS IN HERO */}
              <div className="mt-4 space-y-3">
                {/* COLOR DOTS */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">Color Palette:</span>
                  <div className="flex gap-2">
                    {presetColors.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setHeroColor(c.p);
                          setHeroSecondary(c.s);
                        }}
                        className={`w-6 h-6 rounded-full border-2 transition-transform ${
                          heroColor === c.p ? 'scale-125 border-cyan-400 shadow-md' : 'border-slate-700'
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${c.p} 50%, ${c.s} 50%)`
                        }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>

                {/* NAME & NUMBER INPUTS */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-400 font-semibold block mb-1">
                      Player Name
                    </label>
                    <input
                      type="text"
                      value={heroName}
                      onChange={(e) => setHeroName(e.target.value.toUpperCase().slice(0, 10))}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 font-semibold block mb-1">
                      Number
                    </label>
                    <input
                      type="text"
                      value={heroNumber}
                      onChange={(e) => setHeroNumber(e.target.value.slice(0, 3))}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-bold text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
