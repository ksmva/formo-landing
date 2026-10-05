import React, { useState, useEffect } from 'react';
import { Shirt, ShoppingBag, Menu, X, Sparkles, ChevronDown } from 'lucide-react';

export function Navbar({ lang = 'uz', onLangChange, t, cartCount = 0, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                FORMO
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30">
                  v1.0
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                Custom Kit Platform
              </span>
            </div>
          </a>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#customizer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              {t.nav.customizer}
            </a>
            <a href="#ar-tryon" className="hover:text-cyan-400 transition-colors">
              {t.nav.arTryOn}
            </a>
            <a href="#team-kits" className="hover:text-cyan-400 transition-colors">
              {t.nav.teamKit}
            </a>
            <a href="#size-guide" className="hover:text-cyan-400 transition-colors">
              {t.nav.sizes}
            </a>
            <a href="#tracker" className="hover:text-cyan-400 transition-colors">
              {t.nav.tracker}
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              {t.nav.faq}
            </a>
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden sm:flex items-center gap-4">
            {/* LANGUAGE SELECTOR */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <span>{currentLangObj.flag}</span>
                <span className="font-medium uppercase">{currentLangObj.code}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-slate-900 border border-slate-800 shadow-xl py-2 z-50">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        onLangChange(item.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-sm flex items-center gap-2 hover:bg-slate-800 ${
                        lang === item.code ? 'text-cyan-400 font-bold bg-cyan-950/30' : 'text-slate-300'
                      }`}
                    >
                      <span>{item.flag}</span>
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CART BUTTON */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-extrabold text-xs flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA BUTTON */}
            <a
              href="#customizer"
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.hero.ctaPrimary}
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex sm:hidden items-center gap-3">
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-4">
          <div className="flex justify-around pb-3 border-b border-slate-800">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => {
                  onLangChange(item.code);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  lang === item.code ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-300'
                }`}
              >
                {item.flag} {item.code.toUpperCase()}
              </button>
            ))}
          </div>

          <nav className="flex flex-col gap-3 font-medium text-slate-300">
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-900 text-cyan-400 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t.nav.customizer}
            </a>
            <a href="#ar-tryon" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-900">
              {t.nav.arTryOn}
            </a>
            <a href="#team-kits" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-900">
              {t.nav.teamKit}
            </a>
            <a href="#size-guide" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-900">
              {t.nav.sizes}
            </a>
            <a href="#tracker" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-900">
              {t.nav.tracker}
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-900">
              {t.nav.faq}
            </a>
          </nav>

          <a
            href="#customizer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
          >
            {t.hero.ctaPrimary}
          </a>
        </div>
      )}
    </header>
  );
}
