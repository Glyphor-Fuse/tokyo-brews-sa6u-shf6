import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Instagram, Mail } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Kodawari } from '../components/Kodawari';
import { MenuGrid } from '../components/MenuGrid';

export default function Index() {
  const [lang, setLang] = useState<'en' | 'jp'>('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'jp' : 'en');

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar lang={lang} toggleLang={toggleLang} />
      
      <main>
        <Hero lang={lang} />
        <Kodawari lang={lang} />
        <MenuGrid lang={lang} />

        {/* Gallery Section - Inline for file limit optimization */}
        <section className="py-32 bg-stone-900 text-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                 <span className="text-stone-500 font-serif italic text-lg">{lang === 'en' ? 'Atmosphere' : '空間'}</span>
                 <h2 className="text-4xl md:text-5xl font-medium mt-2">{lang === 'en' ? 'The Space' : '店内風景'}</h2>
              </div>
              <p className="text-stone-400 max-w-sm mt-6 md:mt-0 text-sm md:text-right">
                {lang === 'en' 
                  ? 'Designed by Studio Koto. A blend of concrete, reclaimed wood, and silence.' 
                  : 'Studio Kotoによる設計。コンクリート、古材、そして静寂の融合。'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="md:col-span-2 row-span-2 rounded-lg overflow-hidden relative"
              >
                <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/30294330/pexels-photo-30294330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A stylish cafe interior with modern and industrial design elements in Jawa Barat, Indonesia."
    width="6000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/modern-cafe-design-with-industrial-elements-30294330/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Drayhan z on Pexels
    </a>
  </div>
</div>" alt="Interior" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 0.98 }} className="rounded-lg overflow-hidden relative">
                <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/8979158/pexels-photo-8979158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Close-up of a barista creating latte art in a blue cup with precision pouring technique."
    width="3996"
    height="3996"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/a-person-doing-a-latte-art-8979158/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Pexels User on Pexels
    </a>
  </div>
</div>" alt="Barista" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 0.98 }} className="rounded-lg overflow-hidden relative">
                <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/32648364/pexels-photo-32648364.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Warm cafe setting featuring a rustic wooden table and stylish decor."
    width="3000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/cozy-cafe-interior-with-wooden-table-and-art-32648364/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by sparkle light on Pexels
    </a>
  </div>
</div>" alt="Chair" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-3 h-[200px] rounded-lg overflow-hidden relative">
                 <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/11286667/pexels-photo-11286667.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A couple walks past illuminated storefronts in a lively street of Shibuya City, Tokyo at night."
    width="6048"
    height="4024"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/couple-walking-past-a-restaurant-11286667/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Han Sen on Pexels
    </a>
  </div>
</div>" alt="Exterior" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Access & Footer Section */}
        <section id="access" className="bg-stone-50 pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-stone-200 pb-20">
              
              {/* Map Placeholder */}
              <div className="h-[400px] bg-stone-200 rounded-xl overflow-hidden grayscale invert-[0.05]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.7016358!3d35.658034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2sShibuya%20Station!5e0!3m2!1sen!2sjp!4v1625634567890!5m2!1sen!2sjp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                ></iframe>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-8">
                <div>
                  <h3 className="text-2xl font-serif mb-6">{lang === 'en' ? 'Visit Us' : 'アクセス'}</h3>
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-5 h-5 text-stone-400 mt-1" />
                    <p className="text-stone-600">
                      1-23-4 Jinnan, Shibuya-ku<br/>
                      Tokyo, Japan 150-0041
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-stone-400 mt-1" />
                    <div className="text-stone-600">
                      <p>Mon - Fri: 08:00 - 20:00</p>
                      <p>Sat - Sun: 09:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <a href="#" className="p-3 bg-stone-100 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-stone-100 rounded-full hover:bg-stone-900 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-stone-400 font-medium tracking-wide uppercase">
              <p>&copy; 2024 KISSATEN. All rights reserved.</p>
              <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}