"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FusionStory() {
  return (
    <section id="story" className="py-24 bg-parchment relative overflow-hidden z-10 border-t border-black/5">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(26,26,26,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-gold/5 blur-[120px] rounded-full -z-20 pointer-events-none" />
      
      {/* Large Decorative Text Background */}
      <div className="absolute top-[10%] right-[-5%] pointer-events-none -z-10 select-none overflow-hidden">
        <span className="text-[15vw] font-serif font-black text-gold/5 leading-none uppercase tracking-tighter">
          Familia
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Image with Character Background */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Character Plate (Ochre Blob) */}
            <motion.div
              animate={{ rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[120%] aspect-square bg-gold opacity-10 blur-3xl rounded-full pointer-events-none"
            />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] md:aspect-square w-full rounded-[40px] overflow-hidden shadow-xl z-10 group"
            >
              <Image
                src="/foto_grupal.jpeg"
                alt="Nuestra Historia - Familia Fusión"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-[1.15] group-hover:scale-[1.20] transition-transform duration-700"
              />
            </motion.div>

            {/* Artistic Caption */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 bg-gold text-white p-6 md:p-8 rounded-3xl shadow-2xl max-w-[240px] md:max-w-[280px] z-20"
            >
              <p className="text-sm md:text-base font-serif italic leading-relaxed">
                "Nuestra cocina es el puente entre lo que fuimos y lo que somos hoy."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 relative lg:pl-10">
            <h2 className="text-[11px] font-bold text-gold uppercase tracking-[0.4em] mb-6">Nuestra Esencia</h2>
            <h3 className="text-5xl md:text-7xl font-serif font-black text-carbon leading-none mb-10 relative">
              Un sabor que <br />
              <div className="relative inline-block mt-4">
                <span className="text-gold italic font-light relative z-10">no conoce fronteras.</span>
                <div className="absolute -bottom-2 -left-2 -right-8 h-16 bg-[url('/brush-stroke.svg')] bg-contain bg-no-repeat opacity-40 -z-10" />
              </div>
            </h3>
            
            <div className="space-y-6 text-lg md:text-[22px] text-carbon/70 font-sans font-light leading-relaxed">
              <p>
                Nuestra historia es la de una familia chilena con papá argentino, que decidió emigrar a la Argentina en busca de nuevas oportunidades. Cargamos nuestras maletas con sueños, pero sobre todo, llevamos nuestras recetas.
              </p>
              <p>
                Esa misma cocina que nos abrazó en casa y en cada festividad, pronto se convirtió en nuestro sustento en este nuevo país. Así nace Deleite, del esfuerzo y del deseo profundo de mezclar lo mejor de estos dos micromundos.
              </p>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
