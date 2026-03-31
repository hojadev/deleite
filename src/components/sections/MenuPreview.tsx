"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Handroll Pollo Queso Cebollín",
    price: 3500,
    priceLabel: "$ 3.500",
    description: "Crujiente roll frito en panko con pollo, queso crema y cebollín. Tamaño premium.",
    image: "/deleite_sushi_1.jpeg"
  },
  {
    id: 2,
    name: "Handroll Camarón Queso Cebollín",
    price: 4100,
    priceLabel: "$ 4.100",
    description: "Clásico infalible con camarones apanados y nuestro blend especial de queso crema.",
    image: "/deleite_camaron_handroll.jpeg"
  },
  {
    id: 3,
    name: "Completo Italiano",
    price: 2400,
    priceLabel: "$ 2.400",
    description: "Salchicha premium, abundante palta hass, tomate fresco y mayo casera en pan amasado super suave.",
    image: "/deleite_hotdog.jpeg"
  },
  {
    id: 4,
    name: "Empanada de Pino",
    price: 1800,
    priceLabel: "$ 1.800",
    description: "Receta tradicional chilena. Carne picada a cuchillo, huevo, aceituna y pasas, horneada al punto de oro.",
    image: "/deleite_food_composition.jpeg"
  }
];

export default function MenuPreview() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-24 bg-parchment relative z-10 border-t border-black/5 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <motion.div 
        animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 left-0 w-80 h-80 text-gold opacity-[0.03] -z-10"
      >
        <Image src="/organic-shape.svg" alt="" width={320} height={320} />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-gold/5 blur-[120px] rounded-full -z-20" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-[11px] font-bold text-gold uppercase tracking-[0.3em] mb-4">Nuestra Carta</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-black text-carbon relative inline-block mb-6">
            Explorá el Sabor Deleite
            <div className="absolute -bottom-2 -left-4 -right-4 h-12 bg-[url('/brush-stroke.svg')] bg-contain bg-no-repeat opacity-30 -z-10" />
          </h3>
          
          {/* Wholesale Consult Banner */}
          <div className="mt-8 mb-4">
            <Link 
              href="/carta" 
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold/10 text-gold border border-gold/30 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
            >
              Consultar Precios al por Mayor
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col bg-white border border-black/5 rounded-[32px] hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[4/3] bg-parchment relative overflow-hidden">
                   <Image
                      src={product.image}
                      alt={product.name}
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-xl font-serif font-bold text-carbon mb-2 line-clamp-2 leading-tight">{product.name}</h4>
                    <p className="text-xs text-carbon/60 mb-6 font-sans font-light leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-black/5 mt-auto">
                    <span className="text-2xl font-serif font-black text-carbon italic">{product.priceLabel}</span>
                    <button 
                      onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                      className="w-10 h-10 flex items-center justify-center bg-crimson text-white rounded-full hover:bg-crimson/90 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-crimson/20"
                      aria-label="Agregar al carrito"
                    >
                      <Plus size={20} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-20 text-center">
           <Link href="/carta" className="inline-flex items-center px-12 py-5 bg-carbon text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gold hover:-translate-y-1 transition-all shadow-xl shadow-carbon/20 group">
              Ver Carta Completa
              <ChevronRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </div>
    </section>
  );
}
