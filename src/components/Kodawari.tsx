import { motion } from 'framer-motion';

interface KodawariProps {
  lang: 'en' | 'jp';
}

export const Kodawari = ({ lang }: KodawariProps) => {
  return (
    <section id="concept" className="py-32 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] group overflow-hidden rounded-sm">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img 
                src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/8064202/pexels-photo-8064202.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Close-up of a hand holding a rustic ceramic mug overflowing with foamy milk or beverage."
    width="2832"
    height="4240"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/hand-holding-a-brown-mug-with-foamy-liquid-8064202/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Los Muertos Crew on Pexels
    </a>
  </div>
</div>" 
                alt="Kodawari" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
              <span className="text-xs tracking-widest uppercase font-medium">
                {lang === 'en' ? 'The Craft' : '職人技'}
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-stone-400 font-serif italic text-lg mb-4 block">
                Kodawari (こだわり)
              </span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-stone-900 mb-8 leading-[1.1]">
                {lang === 'en' 
                  ? 'The relentless pursuit of perfection.' 
                  : '妥協なき、完全への追求。'}
              </h2>
              <div className="w-12 h-0.5 bg-stone-900 mb-8" />
              <p className="text-stone-600 leading-loose text-lg font-light">
                {lang === 'en' ? (
                  <>
                    We believe coffee is not just a drink, but a moment of pause. 
                    Our beans are sourced from single estates, roasted in small batches in Shibuya, 
                    and brewed with a precision that borders on obsession. 
                    We honor the traditional Japanese Kissaten culture while embracing modern minimalism.
                  </>
                ) : (
                  <>
                    コーヒーは単なる飲み物ではなく、心を整えるための「間」であると信じています。
                    厳選されたシングルオリジン豆を渋谷で少量ずつ焙煎し、
                    執念とも呼べるほどの精密さで抽出します。
                    日本の伝統的な喫茶店文化に敬意を払いながら、現代的なミニマリズムを融合させました。
                  </>
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8"
            >
              <div>
                <h3 className="font-serif text-xl mb-2">{lang === 'en' ? 'Roast' : '焙煎'}</h3>
                <p className="text-sm text-stone-500">
                  {lang === 'en' ? 'Probat P5 / Light to Medium' : 'プロバット P5 / 浅煎り〜中煎り'}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">{lang === 'en' ? 'Water' : '水'}</h3>
                <p className="text-sm text-stone-500">
                  {lang === 'en' ? 'Soft / 30ppm / 92°C' : '軟水 / 30ppm / 92°C'}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};