import React from 'react';
import { Star, Award } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Jasur Umarov',
      role: 'IT Park Football League Kapitani',
      team: 'CyberFC Tashkent',
      comment: "Formo orqali jamoamiz uchun 18 ta forma yaratdik. Sublimatsiya bosmasi juda sifatli chiqdi, yuvilganda ham rangi o'chmaydi! Ertasi kuniyoq yetkazib berishdi.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Bobur Mirzayev',
      role: 'Havas FC Murabbiyi',
      team: 'Havas FC',
      comment: "AR kiyib ko'rish funksiyasi bomba! Bolalar va kattalar o'lchamini xatosiz tanladik. AI bilan gerb yaratish imkoniyati esa alohida mavzu.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Dilshod Raximov',
      role: 'Street Football UZ Asoschisi',
      team: 'Street Legends',
      comment: "Formo platformasi bilan 50+ to'plam forma zakaz qildik va 20% chegirma oldik. Toshkent bo'ylab tezkor va sifatli servis.",
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Mijozlarimiz va Jamoalar
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Formo Bilan Chempion Bo'lgan Jamoalar
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            O'zbekistondagi 450+ dan ortiq havaskor va professional jamoalar bizga ishonishadi.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl flex flex-col justify-between relative hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                {/* RATING STARS */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* COMMENT */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* USER INFO */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-800">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/40">
                  <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-slate-400 block">{rev.role}</span>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase">{rev.team}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
