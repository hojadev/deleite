"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Materia Prima",
    desc: "Seleccionamos los mejores cortes de carne sanjuanina y productos frescos de la cordillera.",
  },
  {
    number: "02",
    title: "A Mano",
    desc: "Masa estirada por nosotros, handrolls armados en el momento. El toque humano es irremplazable.",
  },
  {
    number: "03",
    title: "Al Fuego",
    desc: "Fuego fuerte para la empanada, precisión extrema para el sushi. Cada plato tiene su ciencia.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white border-y border-black/5 relative overflow-hidden">
      {/* Decorative Organic Shape */}
      <div className="absolute -top-24 -left-24 w-96 h-96 text-gold opacity-5 rotate-45 pointer-events-none">
        <Image src="/organic-shape.svg" alt="" width={400} height={400} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-[11px] font-bold text-crimson uppercase tracking-[0.4em] mb-6">El Secreto</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-black text-carbon mb-8 leading-tight relative">
              Honramos lo <br />
              <div className="relative inline-block">
                <span className="text-gold italic font-light relative z-10">hecho a mano.</span>
                <div className="absolute -bottom-1 -left-4 -right-10 h-16 bg-[url('/brush-stroke.svg')] bg-contain bg-no-repeat opacity-40 -z-10" />
              </div>
            </h3>
            
            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="text-3xl font-serif font-black text-gold/20 group-hover:text-gold transition-colors duration-500">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-black text-carbon mb-2">{step.title}</h4>
                    <p className="text-sm text-carbon/50 font-sans font-light leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex items-center justify-center">
            {/* Character Background (Ochre Plate) */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute w-[110%] aspect-square bg-gold opacity-[0.08] blur-3xl rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square w-full rounded-[60px] overflow-hidden shadow-2xl border-[10px] border-white ring-1 ring-black/5 z-10"
            >
              <Image
                src="/deleite_preparation.jpeg"
                alt="Nuestro Proceso"
                fill sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            {/* Floating Stamp */}
            <motion.div 
              animate={{ rotate: [12, 15, 12], y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-gold rounded-full flex items-center justify-center p-8 text-center text-white border-8 border-parchment shadow-xl z-20 group-hover:bg-crimson transition-colors"
            >
               <span className="text-[10px] font-black uppercase tracking-widest leading-tight">
                 Calidad <br /> Artesanal <br /> Garantizada
               </span>
            </motion.div>

            {/* Floating Ingredients Placeholder */}
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 text-gold opacity-[0.03] -z-10"
            >
              <Image src="/organic-shape.svg" alt="" width={200} height={200} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
