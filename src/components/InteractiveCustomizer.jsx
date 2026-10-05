import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Palette,
  Type,
  Sparkles,
  Shirt as ShortsIcon,
  Zap,
  ShoppingBag,
  CheckCircle2,
  Layers,
  Cpu
} from 'lucide-react';
import { JerseySvg } from './JerseySvg';

export function InteractiveCustomizer({ t, onAddToCart }) {
  // State for all jersey customizer options
  const [view, setView] = useState('front'); // 'front' | 'back'
  const [activeTab, setActiveTab] = useState('color'); // 'color' | 'text' | 'logo' | 'shorts' | 'effects'

  // Colors
  const [primaryColor, setPrimaryColor] = useState('#1D2F8C');
  const [secondaryColor, setSecondaryColor] = useState('#F2A33A');
  const [useGradient, setUseGradient] = useState(true);
  const [gradientAngle, setGradientAngle] = useState(135);

  // Text & Fonts
  const [playerName, setPlayerName] = useState('AZIZ');
  const [playerNumber, setPlayerNumber] = useState('10');
  const [frontText, setFrontText] = useState('CHAMPION');
  const [fontStyle, setFontStyle] = useState('sport');

  // AI Emblem Generator
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiLogoGenerated, setAiLogoGenerated] = useState(false);

  // Shorts
  const [hasShorts, setHasShorts] = useState(true);
  const [shortsColor, setShortsColor] = useState('#1D2F8C');
  const [shortsStripeColor, setShortsStripeColor] = useState('#F2A33A');

  // Prints & Patches
  const [printType, setPrintType] = useState('sublimation'); // 'sublimation' | 'reflective' | 'goldFoil'
  const [hasCaptainPatch, setHasCaptainPatch] = useState(false);
  const [hasFlagPatch, setHasFlagPatch] = useState(true);
  const [hasStarPatch, setHasStarPatch] = useState(false);

  // Calculate Base & Dynamic Price
  const basePrice = 159000;
  let printAddon = 0;
  if (printType === 'sublimation') printAddon = 20000;
  if (printType === 'reflective') printAddon = 15000;
  if (printType === 'goldFoil') printAddon = 20000;

  const shortsAddon = hasShorts ? 60000 : 0;
  const patchesAddon = (hasCaptainPatch ? 5000 : 0) + (hasFlagPatch ? 5000 : 0) + (hasStarPatch ? 5000 : 0);

  const totalPrice = basePrice + printAddon + shortsAddon + patchesAddon;

  // Format currency
  const formatPrice = (amount) => {
    return new Intl.NumberFormat('uz-UZ').format(amount) + " so'm";
  };

  // Trigger Confetti on Add to Cart
  const handleAddToCartClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const kitItem = {
      id: Date.now(),
      name: `Custom Kit (${playerName} #${playerNumber})`,
      price: totalPrice,
      config: {
        primaryColor,
        secondaryColor,
        playerName,
        playerNumber,
        frontText,
        hasShorts,
        printType
      }
    };

    onAddToCart(kitItem);
  };

  // Simulate AI emblem creation
  const handleGenerateAiLogo = () => {
    if (!aiPrompt.trim()) return;
    setIsGeneratingAi(true);
    setTimeout(() => {
      setIsGeneratingAi(false);
      setAiLogoGenerated(true);
    }, 1500);
  };

  const fontsList = [
    { id: 'sport', name: t.customizer.fonts.sport, sample: '10' },
    { id: 'classic', name: t.customizer.fonts.classic, sample: '10' },
    { id: 'bold', name: t.customizer.fonts.bold, sample: '10' },
    { id: 'hand', name: t.customizer.fonts.hand, sample: '10' },
    { id: 'retro', name: t.customizer.fonts.retro, sample: '10' },
    { id: 'modern', name: t.customizer.fonts.modern, sample: '10' }
  ];

  return (
    <section id="customizer" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            {t.customizer.title}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.customizer.subtitle}
          </h2>
        </div>

        {/* CUSTOMIZER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: LIVE SVG CANVAS & VIEW SWITCHER (5 COLS) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl backdrop-blur-xl flex flex-col items-center relative sticky top-28">
            {/* TOP BAR WITH FRONT/BACK VIEW TOGGLE */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-extrabold text-slate-300 uppercase tracking-widest flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                Live Preview
              </span>

              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setView('front')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    view === 'front'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.customizer.viewFront}
                </button>
                <button
                  onClick={() => setView('back')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    view === 'back'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.customizer.viewBack}
                </button>
              </div>
            </div>

            {/* JERSEY DISPLAY AREA */}
            <div className="w-full min-h-[440px] py-6 my-4 bg-gradient-to-b from-slate-950/80 to-slate-900 rounded-2xl border border-slate-800/80 flex items-center justify-center relative overflow-hidden">
              <JerseySvg
                config={{
                  primaryColor,
                  secondaryColor,
                  useGradient,
                  gradientAngle,
                  playerName,
                  playerNumber,
                  fontStyle,
                  frontText,
                  shortsColor,
                  shortsStripeColor,
                  hasShorts,
                  printType,
                  hasCaptainPatch,
                  hasFlagPatch,
                  hasStarPatch
                }}
                view={view}
                width={330}
                height={420}
              />
            </div>

            {/* PRICE & ADD TO CART BAR */}
            <div className="w-full pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">{t.customizer.totalPrice}</span>
                <span className="text-2xl font-black text-cyan-400">{formatPrice(totalPrice)}</span>
              </div>

              <button
                onClick={handleAddToCartClick}
                className="px-6 py-3 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                {t.customizer.addToCart}
              </button>
            </div>
          </div>

          {/* RIGHT: CONTROLS & TABS (7 COLS) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            {/* TABS HEADER */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-none">
              <button
                onClick={() => setActiveTab('color')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                  activeTab === 'color'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Palette className="w-4 h-4" />
                {t.customizer.tabColor}
              </button>

              <button
                onClick={() => setActiveTab('text')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                  activeTab === 'text'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Type className="w-4 h-4" />
                {t.customizer.tabBack}
              </button>

              <button
                onClick={() => setActiveTab('logo')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                  activeTab === 'logo'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Cpu className="w-4 h-4" />
                {t.customizer.tabLogo}
              </button>

              <button
                onClick={() => setActiveTab('shorts')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                  activeTab === 'shorts'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <ShortsIcon className="w-4 h-4" />
                {t.customizer.tabShorts}
              </button>

              <button
                onClick={() => setActiveTab('effects')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shrink-0 ${
                  activeTab === 'effects'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Zap className="w-4 h-4" />
                {t.customizer.tabPrints}
              </button>
            </div>

            {/* TAB CONTENT 1: COLOR & STILE */}
            {activeTab === 'color' && (
              <div className="space-y-6 animate-fade-in">
                {/* PRIMARY COLOR */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    {t.customizer.primaryColor}
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    {['#1D2F8C', '#E10600', '#059669', '#111827', '#FFFFFF', '#7C3AED', '#DB2777'].map(
                      (hex) => (
                        <button
                          key={hex}
                          onClick={() => setPrimaryColor(hex)}
                          className={`w-10 h-10 rounded-xl border-2 transition-all transform hover:scale-110 ${
                            primaryColor === hex ? 'border-cyan-400 ring-4 ring-cyan-500/20 scale-110' : 'border-slate-800'
                          }`}
                          style={{ backgroundColor: hex }}
                        />
                      )
                    )}
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer"
                    />
                  </div>
                </div>

                {/* SECONDARY COLOR */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    {t.customizer.secondaryColor}
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    {['#F2A33A', '#FFFFFF', '#000000', '#10B981', '#3B82F6', '#F43F5E'].map((hex) => (
                      <button
                        key={hex}
                        onClick={() => setSecondaryColor(hex)}
                        className={`w-10 h-10 rounded-xl border-2 transition-all transform hover:scale-110 ${
                          secondaryColor === hex ? 'border-cyan-400 ring-4 ring-cyan-500/20 scale-110' : 'border-slate-800'
                        }`}
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer"
                    />
                  </div>
                </div>

                {/* GRADIENT TOGGLE & ANGLE */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-200">{t.customizer.gradient}</span>
                    <button
                      onClick={() => setUseGradient(!useGradient)}
                      className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                        useGradient ? 'bg-cyan-500' : 'bg-slate-800'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                          useGradient ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {useGradient && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>{t.customizer.gradientAngle}</span>
                        <span>{gradientAngle}°</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="360"
                        value={gradientAngle}
                        onChange={(e) => setGradientAngle(Number(e.target.value))}
                        className="w-full accent-cyan-500 cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: TEXT & FONTS */}
            {activeTab === 'text' && (
              <div className="space-y-6 animate-fade-in">
                {/* FRONT TEXT */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    {t.customizer.frontText}
                  </label>
                  <input
                    type="text"
                    value={frontText}
                    onChange={(e) => setFrontText(e.target.value.toUpperCase())}
                    placeholder={t.customizer.frontTextPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 font-bold text-white focus:border-cyan-500 outline-none"
                  />
                </div>

                {/* PLAYER NAME & NUMBER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {t.customizer.playerName}
                    </label>
                    <input
                      type="text"
                      value={playerName}
                      onChange={(e) => setPlayerName(e.target.value.toUpperCase())}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 font-bold text-white focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {t.customizer.playerNumber}
                    </label>
                    <input
                      type="text"
                      value={playerNumber}
                      onChange={(e) => setPlayerNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 font-bold text-white focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                {/* FONT SELECTOR */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    {t.customizer.fontStyle}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {fontsList.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setFontStyle(f.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          fontStyle === f.id
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="text-xl font-bold">{f.sample}</div>
                        <div className="text-[10px] uppercase tracking-wider mt-1">{f.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: AI LOGO GENERATOR */}
            {activeTab === 'logo' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-5 rounded-2xl bg-gradient-to-tr from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-500/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <Cpu className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{t.customizer.aiLogoTitle}</h4>
                      <p className="text-xs text-slate-400">{t.customizer.aiLogoDesc}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <textarea
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder={t.customizer.aiPromptPlaceholder}
                      rows={3}
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:border-cyan-500 outline-none"
                    />

                    <button
                      onClick={handleGenerateAiLogo}
                      disabled={isGeneratingAi || !aiPrompt.trim()}
                      className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 transition-all flex items-center justify-center gap-2"
                    >
                      {isGeneratingAi ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin" />
                          Generatsiya qilinmoqda...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          {t.customizer.generateAiBtn}
                        </>
                      )}
                    </button>
                  </div>

                  {aiLogoGenerated && (
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Eksklyuziv AI gerbi shakllantirildi va formaga biriktirildi!</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: SHORTS */}
            {activeTab === 'shorts' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-200">{t.customizer.shortsToggle}</span>
                  <button
                    onClick={() => setHasShorts(!hasShorts)}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                      hasShorts ? 'bg-cyan-500' : 'bg-slate-800'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                        hasShorts ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {hasShorts && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        {t.customizer.shortsColor}
                      </label>
                      <div className="flex items-center gap-3">
                        {['#1D2F8C', '#E10600', '#059669', '#111827', '#FFFFFF'].map((hex) => (
                          <button
                            key={hex}
                            onClick={() => setShortsColor(hex)}
                            className={`w-9 h-9 rounded-xl border-2 ${
                              shortsColor === hex ? 'border-cyan-400 ring-2 ring-cyan-500/20' : 'border-slate-800'
                            }`}
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                        {t.customizer.shortsStripe}
                      </label>
                      <div className="flex items-center gap-3">
                        {['#F2A33A', '#FFFFFF', '#000000', '#10B981'].map((hex) => (
                          <button
                            key={hex}
                            onClick={() => setShortsStripeColor(hex)}
                            className={`w-9 h-9 rounded-xl border-2 ${
                              shortsStripeColor === hex ? 'border-cyan-400 ring-2 ring-cyan-500/20' : 'border-slate-800'
                            }`}
                            style={{ backgroundColor: hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT 5: PRINTS & PATCHES */}
            {activeTab === 'effects' && (
              <div className="space-y-6 animate-fade-in">
                {/* PRINT TYPE */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    {t.customizer.printTypes}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => setPrintType('sublimation')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        printType === 'sublimation'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">Sublimatsiya</div>
                      <div className="text-[10px] opacity-75 mt-1">+20,000 so'm</div>
                    </button>

                    <button
                      onClick={() => setPrintType('reflective')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        printType === 'reflective'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">Reflektiv (Porlash)</div>
                      <div className="text-[10px] opacity-75 mt-1">+15,000 so'm</div>
                    </button>

                    <button
                      onClick={() => setPrintType('goldFoil')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        printType === 'goldFoil'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold">Oltin Folga</div>
                      <div className="text-[10px] opacity-75 mt-1">+20,000 so'm</div>
                    </button>
                  </div>
                </div>

                {/* PATCHES */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Yamoqlar (Patches)
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasCaptainPatch}
                        onChange={(e) => setHasCaptainPatch(e.target.checked)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <span className="text-xs text-slate-200">{t.customizer.patches.captain}</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasFlagPatch}
                        onChange={(e) => setHasFlagPatch(e.target.checked)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <span className="text-xs text-slate-200">{t.customizer.patches.flag}</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasStarPatch}
                        onChange={(e) => setHasStarPatch(e.target.checked)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <span className="text-xs text-slate-200">{t.customizer.patches.star}</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
