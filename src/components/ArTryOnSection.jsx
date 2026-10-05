import React, { useState } from 'react';
import { Camera, RefreshCw, Sun, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';
import { JerseySvg } from './JerseySvg';

export function ArTryOnSection({ t }) {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [capturedPhoto, setCapturedPhoto] = useState(false);

  const handleRotate = () => {
    setRotationAngle((prev) => (prev + 90) % 360);
  };

  const handleSnap = () => {
    setCapturedPhoto(true);
    setTimeout(() => setCapturedPhoto(false), 2000);
  };

  return (
    <section id="ar-tryon" className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              {t.ar.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t.ar.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.ar.subtitle}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Mobil AR Simulyatsiya</h4>
                  <p className="text-xs text-slate-400">
                    Smartfon kamerasi orqali gavdangizni 3D skan qiladi va forma o'lchamini real-vaqtda moslaydi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Xatosiz O'lcham Kafolati</h4>
                  <p className="text-xs text-slate-400">
                    Virtual kiyib ko'rish tufayli o'lcham yoki mato tushishidagi xatoliklar bartaraf etiladi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE AR CAMERA SIMULATOR */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative space-y-4">
              {/* SIMULATOR SCREEN CONTAINER */}
              <div className={`relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800 flex flex-col items-center justify-center transition-all ${
                isCameraActive ? 'bg-slate-900' : 'bg-slate-950'
              }`}>
                {/* BACKGROUND CAMERA GRID / VIDEO FEED SIMULATION */}
                {isCameraActive ? (
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 animate-pulse"></div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90"></div>
                )}

                {/* AR TARGET OVERLAY FRAME */}
                <div className="absolute inset-8 border-2 border-dashed border-cyan-500/30 rounded-2xl pointer-events-none flex items-center justify-center">
                  <div className="text-[10px] text-cyan-400/60 font-mono absolute top-2 left-3">
                    AR TARGET LOCK: ACTIVE
                  </div>
                  <div className="text-[10px] text-cyan-400/60 font-mono absolute bottom-2 right-3">
                    SCALE: 100%
                  </div>
                </div>

                {/* 3D JERSEY MODEL SVG WITH ROTATION */}
                <div
                  className="transition-transform duration-500 transform relative z-10"
                  style={{ transform: `rotateY(${rotationAngle}deg)` }}
                >
                  <JerseySvg
                    config={{
                      primaryColor: '#1D2F8C',
                      secondaryColor: '#F2A33A',
                      useGradient: true,
                      playerName: 'AR FIT',
                      playerNumber: '07'
                    }}
                    view={rotationAngle > 90 && rotationAngle < 270 ? 'back' : 'front'}
                    width={260}
                    height={320}
                  />
                </div>

                {/* CAPTURED FLASH ANIMATION */}
                {capturedPhoto && (
                  <div className="absolute inset-0 bg-white flex items-center justify-center z-30 animate-ping">
                    <span className="text-xl font-black text-slate-950">SNAP!</span>
                  </div>
                )}
              </div>

              {/* SIMULATOR CONTROLS */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setIsCameraActive(!isCameraActive)}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    isCameraActive
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                      : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  {isCameraActive ? 'Kamera Yoqilgan' : t.ar.tryCamera}
                </button>

                <button
                  onClick={handleRotate}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <RefreshCw className="w-4 h-4 text-cyan-400" />
                  {t.ar.rotate3d}
                </button>

                <button
                  onClick={handleSnap}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Sun className="w-4 h-4 text-amber-400" />
                  {t.ar.snapPhoto}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
