import React, { useState } from 'react';
import {
  Shirt,
  Sparkles,
  Smartphone,
  ChevronDown,
  Zap,
  Globe,
  Download,
  Users,
  X
} from 'lucide-react';
import { JerseySvg } from './components/JerseySvg';
import './App.css';

function App() {
  const [lang, setLang] = useState('uz');
  const [langOpen, setLangOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [presetIndex, setPresetIndex] = useState(0);

  const presets = [
    { name: 'Real Classic', primary: '#1D2F8C', secondary: '#F2A33A', player: 'AZIZ', num: '10' },
    { name: 'Cyber Black', primary: '#111827', secondary: '#00F0FF', player: 'FORMO', num: '07' },
    { name: 'Emerald Gold', primary: '#059669', secondary: '#F59E0B', player: 'CHAMPION', num: '99' },
    { name: 'Flame Red', primary: '#E10600', secondary: '#000000', player: 'STRIKER', num: '09' }
  ];

  const currentPreset = presets[presetIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* --- NAVBAR --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Shirt className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">FORMO</span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Xususiyatlar</a>
            <a href="#showcase" className="hover:text-cyan-400 transition-colors">Dizaynlar</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">Qanday ishlaydi</a>
            <a href="#teams" className="hover:text-cyan-400 transition-colors">Jamoalar uchun</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-slate-900 border border-slate-800 shadow-xl py-1 z-50">
                  {['uz', 'ru', 'en'].map((code) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-semibold uppercase hover:bg-slate-800 ${
                        lang === code ? 'text-cyan-400' : 'text-slate-300'
                      }`}
                    >
                      {code === 'uz' ? "O'zbekcha" : code === 'ru' ? 'Русский' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
            >
              Ilovani Yuklash
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Formo v1.0 — Sport Formasi Platformasi</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                O'z jamoangiz uchun <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  mukammal sport formasi
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Dizayn yarating, 3D/AR orqali kiyib ko'ring hamda Toshkent bo'ylab 24 soat ichida yetkazib berishga buyurtma bering.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Ilovani Yuklash
                </button>
                <a
                  href="#showcase"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  Dizaynlarni ko'rish
                </a>
              </div>

              {/* Stats */}
              <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-black text-white">15,000+</div>
                  <div className="text-xs text-slate-400">Tayyorlangan formalar</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">450+</div>
                  <div className="text-xs text-slate-400">Jamoalar</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400">24 Soat</div>
                  <div className="text-xs text-slate-400">Yetkazish</div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Visual Card */}
            <div id="showcase" className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col items-center space-y-4">
                <div className="w-full py-4 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-center">
                  <JerseySvg
                    config={{
                      primaryColor: currentPreset.primary,
                      secondaryColor: currentPreset.secondary,
                      playerName: currentPreset.player,
                      playerNumber: currentPreset.num,
                      frontText: 'FORMO'
                    }}
                    view="front"
                    width={250}
                    height={300}
                  />
                </div>

                {/* Preset selector */}
                <div className="w-full space-y-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Dizayn Kolleksiyasi:
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {presets.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPresetIndex(idx)}
                        className={`py-1.5 px-2 rounded-lg border text-[11px] font-bold transition-all ${
                          presetIndex === idx
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {p.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID SECTION --- */}
      <section id="features" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Nega aynan Formo?</h2>
            <p className="text-sm text-slate-400">
              Formo platformasi orqali jamoangiz uchun professional sport kiyimlarini oson va tez yarating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Shirt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Moslashtirish Studiyasi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ism, raqam, ranglar va 6 xil zamonaviy shriftlar yordamida o'ziga xos dizayn tayyorlang.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">AI Gerb Generator</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sun'iy intellekt yordamida jamoangiz uchun eksklyuziv logotip va gerblarni yaratish.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">3D / AR Kiyib Ko'rish</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Xarid qilishdan oldin formani smartfon kamerasi orqali gavdangizda sinab ko'ring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">24 Soatda Yetkazish</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Yuqori sifatli yapon sublimatsiyasi va Toshkent bo'ylab tezkor kuryerlik xizmati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (3 STEPS) --- */}
      <section id="how-it-works" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-extrabold text-white">3 Oddiy Qadam</h2>
            <p className="text-sm text-slate-400">Buyurtma berish jarayoni juda sodda va shaffof</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 font-black flex items-center justify-center mx-auto text-lg">
                1
              </div>
              <h3 className="text-base font-bold text-white">Dizaynni Tanlang</h3>
              <p className="text-xs text-slate-400">
                Ilovada forma rangi, ismingiz, raqamingiz va jamoa logotipini kiriting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 font-black flex items-center justify-center mx-auto text-lg">
                2
              </div>
              <h3 className="text-base font-bold text-white">AR Orqali Tekshiring</h3>
              <p className="text-xs text-slate-400">
                Virtual kiyib ko'rish simulyatsiyasi orqali o'lchamni aniq moslang.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 font-black flex items-center justify-center mx-auto text-lg">
                3
              </div>
              <h3 className="text-base font-bold text-white">Qabul Qiling</h3>
              <p className="text-xs text-slate-400">
                Click yoki Payme orqali to'lang va 24 soat ichida formani qo'lingizga oling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM BULK SECTION --- */}
      <section id="teams" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold">
                <Users className="w-4 h-4" />
                Jamoaviy Chegirmalar
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Butun jamoa uchun buyurtma bering va 20% gacha tejang!
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                10+ to'plamdan boshlab maxsus narxlar va Toshkent bo'ylab bepul yetkazib berish xizmati.
              </p>
            </div>

            <button
              onClick={() => setDownloadModalOpen(true)}
              className="px-8 py-4 rounded-xl text-sm font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg shrink-0"
            >
              Jamoa uchun buyurtma berish
            </button>
          </div>
        </div>
      </section>

      {/* --- FAQ ACCORDION --- */}
      <section id="faq" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold text-white">Ko'p So'raladigan Savollar</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Forma qancha vaqtda tayyor bo'ladi?",
                a: "Individual bosma 1-2 ish kunida tayyor bo'ladi va Toshkent bo'ylab ertasi kuni yetkazib beriladi."
              },
              {
                q: "O'lcham mos kelmasa-chi?",
                a: "Biz har bir mijozga bepul almashtirish kafolatini beramiz. Kuryerimiz yangi o'lchamni keltirib beradi."
              },
              {
                q: "Qanday to'lov usullari mavjud?",
                a: "Click, Payme orqali onlayn to'lashingiz yoki kuryerga forma yetib kelganda naqd to'lashingiz mumkin."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full text-left font-bold text-sm text-white flex items-center justify-between gap-4"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              F
            </div>
            <span className="font-bold text-white">FORMO</span>
            <span>© 2026. Barcha huquqlar himoyalangan.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Oferta</a>
            <a href="#" className="hover:text-slate-300">Maxfiylik</a>
            <a href="#" className="hover:text-slate-300">Aloqa: +998 90 123 45 67</a>
          </div>
        </div>
      </footer>

      {/* --- DOWNLOAD MODAL --- */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-6 shadow-2xl relative text-center space-y-4">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
              <Download className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Formo Ilovasini Yuklang</h3>
              <p className="text-xs text-slate-400">iOS va Android qurilmalari uchun tayyor</p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="w-full py-3 rounded-xl font-bold text-xs bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white flex items-center justify-center gap-2"
              >
                <span> App Store danda yuklash</span>
              </button>
              <button
                onClick={() => setDownloadModalOpen(false)}
                className="w-full py-3 rounded-xl font-bold text-xs bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white flex items-center justify-center gap-2"
              >
                <span>▶ Google Play danda yuklash</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
