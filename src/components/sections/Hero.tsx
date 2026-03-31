"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-parchment">
      {/* Enhanced Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      {/* Subtle Dot Pattern for filling space elegantly */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      {/* Large Decorative Text Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none -z-10 select-none overflow-hidden">
        <span className="text-[25vw] font-serif font-black text-gold/5 leading-none uppercase tracking-widest">
          Fusión
        </span>
      </div>

      {/* Layered Decorative organic shapes */}
      <motion.div 
        animate={{ rotate: [12, -12, 12], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] text-gold opacity-[0.08] pointer-events-none"
      >
        <Image src="/organic-shape.svg" alt="" width={600} height={600} />
      </motion.div>
      
      <motion.div 
        animate={{ rotate: [-5, 15, -5], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] -right-32 w-[700px] h-[700px] text-crimson opacity-[0.04] pointer-events-none"
      >
        <Image src="/organic-shape.svg" alt="" width={700} height={700} />
      </motion.div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10">
        <div className="flex flex-col items-center justify-center">
          
          {/* Centered Content Section */}
          <div className="w-full text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[52px] md:text-[88px] font-serif font-black text-carbon leading-[0.95] tracking-tight mb-8">
                Un sabor <br />
                <span className="relative inline-block text-gold italic font-light pb-2">
                  que une culturas.
                  <div className="absolute bottom-2 left-0 right-0 h-10 bg-[url('/brush-stroke.svg')] bg-contain bg-no-repeat opacity-40 -z-10" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-carbon/70 font-sans font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                Disfrutá lo mejor de la cocina <span className="font-medium text-carbon italic underline decoration-gold/30 underline-offset-8">chilena y argentina</span> en una experiencia artesanal única. 
                Hecho a mano, con amor.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
                <Link
                  href="#menu"
                  className="group relative px-14 py-6 bg-crimson text-white rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden shadow-[0_20px_50px_-10px_rgba(153,27,27,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span className="relative z-10">Explorar Menú</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="#story"
                  className="px-10 py-6 border border-carbon/20 text-carbon rounded-full font-bold text-sm uppercase tracking-widest hover:bg-carbon hover:text-white hover:border-carbon transition-all duration-300 backdrop-blur-sm"
                >
                  Nuestra Historia
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Staggered Masonry Gallery */}
          <div className="w-full max-w-6xl mx-auto pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center">
              
              {/* Left Image (Sushi) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-xl md:translate-y-16"
              >
                <Image
                  src="/deleite_sushi_1.jpeg"
                  alt="Sushi Fusión"
                  fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Center Main Image (Food Composition) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative aspect-[3/4] w-full rounded-[40px] overflow-hidden shadow-2xl z-20"
              >
                <div className="absolute inset-0 bg-gold/10 pointer-events-none mix-blend-overlay z-10" />
                <Image
                  src="/deleite_food_composition.jpeg"
                  alt="Fusión Gastronómica"
                  fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </motion.div>

              {/* Right Image (Hotdog) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-xl md:translate-y-16"
              >
                <Image
                  src="/deleite_hotdog.jpeg"
                  alt="Completo Italiano"
                  fill sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
