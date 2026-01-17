import { motion } from 'framer-motion';

interface MenuGridProps {
  lang: 'en' | 'jp';
}

const menuItems = [
  {
    id: 1,
    nameEn: "Hand Drip Blend",
    nameJp: "ハンドドリップ ブレンド",
    price: "¥800",
    descEn: "Signature house blend. Nutty, chocolate finish.",
    descJp: "看板ブレンド。ナッツの香り、チョコレートの後味。",
    image: "https://images.pexels.com/photos/21404851/pexels-photo-21404851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    nameEn: "Matcha Latte",
    nameJp: "抹茶ラテ",
    price: "¥950",
    descEn: "Ceremonial grade matcha from Uji, Kyoto.",
    descJp: "京都宇治産の儀式用抹茶を使用。",
    image: "https://images.pexels.com/photos/8951881/pexels-photo-8951881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    nameEn: "Cold Brew",
    nameJp: "水出しコーヒー",
    price: "¥850",
    descEn: "Steeped for 18 hours. Smooth, low acidity.",
    descJp: "18時間浸漬。まろやかで酸味控えめ。",
    image: "https://images.pexels.com/photos/28944483/pexels-photo-28944483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    nameEn: "Seasonal Tart",
    nameJp: "季節のタルト",
    price: "¥700",
    descEn: "Chestnut and cream. Limited daily.",
    descJp: "栗とクリーム。数量限定。",
    image: "https://images.pexels.com/photos/31544097/pexels-photo-31544097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const MenuGrid = ({ lang }: MenuGridProps) => {
  return (
    <section id="menu" className="py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-stone-400 font-serif italic text-lg">{lang === 'en' ? 'Offerings' : '献立'}</span>
          <h2 className="text-4xl md:text-5xl font-medium mt-2 text-stone-900">{lang === 'en' ? 'Selected Menu' : '厳選メニュー'}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-6 bg-stone-200">
                <img 
                  src={item.image} 
                  alt={item.nameEn} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-medium text-lg text-stone-900">
                  {lang === 'en' ? item.nameEn : item.nameJp}
                </h3>
                <span className="font-serif text-stone-500">{item.price}</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                {lang === 'en' ? item.descEn : item.descJp}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-stone-900 rounded-full text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium">
            {lang === 'en' ? 'View Full Menu' : '全メニューを見る'}
          </button>
        </div>
      </div>
    </section>
  );
};