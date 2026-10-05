import React from 'react';
import { Shirt, Send, Globe, Share2, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* BRAND COLUMN (2 COLS) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-bold">
                <Shirt className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">FORMO</span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              O'zbekistondagi 1-sonli AI & AR sport kiyimlari moslashtirish va instant buyurtma berish platformasi. Futbol, basketbol va kibersport jamoalari uchun individual dizayn.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                title="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platforma</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#customizer" className="hover:text-cyan-400 transition-colors">
                  Dizayn Studiyasi
                </a>
              </li>
              <li>
                <a href="#ar-tryon" className="hover:text-cyan-400 transition-colors">
                  AR Kiyib Ko'rish
                </a>
              </li>
              <li>
                <a href="#team-kits" className="hover:text-cyan-400 transition-colors">
                  Jamoaviy Buyurtmalar
                </a>
              </li>
              <li>
                <a href="#size-guide" className="hover:text-cyan-400 transition-colors">
                  O'lchamlar Jadvali
                </a>
              </li>
              <li>
                <a href="#tracker" className="hover:text-cyan-400 transition-colors">
                  Live Buyurtma Holati
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL & TERMS */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hujjatlar</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Ommaviy Oferta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Maxfiylik Siyosati
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Qaytarish va Almashtirish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Bosma Sifati Kafolati
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Aloqa</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>+998 (90) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>info@formo.uz</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Toshkent sh., IT Park, Mirobod t.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>Formo v1.0.0 © 2026. Barcha huquqlar himoyalangan.</div>
          <div className="flex gap-4">
            <span>Click & Payme integratsiyalari</span>
            <span>·</span>
            <span>Toshkent, O'zbekiston</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
