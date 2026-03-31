import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  category: string;
  image?: string;
  isNew?: boolean;
}

export default function ProductCard({
  name,
  price,
  description,
  category,
  image = "/hero_empanada_completo_fusion.png", // Fallback
  isNew = false,
}: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent opacity-60" />
        
        {isNew && (
          <div className="absolute top-4 left-4 bg-crimson text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Nuevo
          </div>
        )}
        
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-gold p-1.5 rounded-full">
          <Star size={12} fill="currentColor" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-[10px] text-gold/60 font-bold uppercase tracking-widest mb-2">
          {category}
        </div>
        <h3 className="text-xl font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors">
          {name}
        </h3>
        <p className="text-sm text-white/50 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex justify-between items-center pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-xs text-white/30 uppercase tracking-tighter">Precio</span>
            <span className="text-xl font-bold text-cream underline decoration-crimson underline-offset-4 decoration-2">
              {price}
            </span>
          </div>
          <button className="bg-white/5 hover:bg-crimson text-white p-3 rounded-2xl transition-all shadow-xl shadow-black/20 group/btn">
            <Plus size={20} className="group-hover/btn:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
