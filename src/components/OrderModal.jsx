import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';

export function OrderModal({ isOpen, onClose, cartItems = [], t }) {
  const [step, setStep] = useState('cart'); // 'cart' | 'success'
  const [address, setAddress] = useState('Toshkent sh., Yunusobod, Amir Temur 108');
  const [timeWindow, setTimeWindow] = useState('10:00–14:00');
  const [paymentMethod, setPaymentMethod] = useState('click'); // 'click' | 'payme' | 'cash'

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0) || 219000;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 }
    });
    setStep('success');
  };

  const formatUzS = (num) => new Intl.NumberFormat('uz-UZ').format(num) + " so'm";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white max-h-[90vh] overflow-y-auto">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'cart' ? (
          <form onSubmit={handleConfirmOrder} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <ShoppingBag className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold">{t.modal.checkoutTitle}</h3>
            </div>

            {/* CART ITEMS SUMMARY */}
            <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
              {cartItems.length === 0 ? (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                  Savat bo'sh. Demo to'plam biriktirildi (AZIZ · 10 Kit).
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-white block">{item.name}</span>
                      <span className="text-slate-400">Sublimatsiya + To'plam</span>
                    </div>
                    <span className="font-bold text-cyan-400">{formatUzS(item.price)}</span>
                  </div>
                ))
              )}
            </div>

            {/* ADDRESS INPUT */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                {t.modal.deliveryAddress}
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={t.modal.addressPlaceholder}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-cyan-500 outline-none"
              />
            </div>

            {/* TIME WINDOW */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                {t.modal.deliveryTime}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeWindow('10:00–14:00')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    timeWindow === '10:00–14:00'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {t.modal.time1}
                </button>

                <button
                  type="button"
                  onClick={() => setTimeWindow('14:00–18:00')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    timeWindow === '14:00–18:00'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  {t.modal.time2}
                </button>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                {t.modal.paymentMethod}
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('click')}
                  className={`p-3 rounded-xl border text-xs font-extrabold transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === 'click'
                      ? 'bg-blue-600/30 border-blue-400 text-blue-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Click</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('payme')}
                  className={`p-3 rounded-xl border text-xs font-extrabold transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === 'payme'
                      ? 'bg-cyan-600/30 border-cyan-400 text-cyan-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Payme</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === 'cash'
                      ? 'bg-emerald-600/30 border-emerald-400 text-emerald-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <span>Naqd / Kuryerga</span>
                </button>
              </div>
            </div>

            {/* TOTAL & SUBMIT */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Jami to'lov:</span>
                <span className="text-2xl font-black text-cyan-400">{formatUzS(totalAmount)}</span>
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <span>{t.modal.confirmBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* SUCCESS SCREEN */
          <div className="text-center space-y-6 py-4 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">{t.modal.successTitle}</h3>
              <p className="text-sm text-slate-300">{t.modal.successMsg}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1 text-slate-400">
              <div>Manzil: {address}</div>
              <div>Yetkazish: Ertaga ({timeWindow})</div>
              <div className="text-cyan-400 font-bold">Status: Qabul Qilindi (FRM-000124)</div>
            </div>

            <button
              onClick={() => {
                setStep('cart');
                onClose();
              }}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white transition-all"
            >
              {t.modal.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
