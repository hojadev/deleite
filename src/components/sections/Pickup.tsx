"use client";

import { motion } from "framer-motion";
import { Store, Clock, Phone, MapPin, Instagram } from "lucide-react";

const points = [
  {
    name: "Punto de Retiro Oficial",
    address: "Carlos Gardel 1122, Barrio B Stotac, San Juan.",
    hours: "Mar a Dom: 19:30 a 23:30",
    phone: "+54 9 2614 70-8951",
    isMain: true,
  }
];

export default function Pickup() {
  return (
    <section className="py-24 bg-parchment relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold text-crimson uppercase tracking-[0.4em] mb-6">Pasá a buscarnos</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-black text-carbon">Puntos de Retiro</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-10 max-w-xl mx-auto">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[48px] border bg-white ${point.isMain ? 'border-gold/30 shadow-2xl shadow-gold/5' : 'border-black/5 shadow-xl shadow-carbon/5'} group transition-all duration-500`}
            >
              <div className="flex justify-between items-start mb-10">
                <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center ${point.isMain ? 'bg-gold/10 text-gold' : 'bg-bone text-carbon/40'}`}>
                  <Store size={32} />
                </div>
                {point.isMain && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/5 px-4 py-1.5 rounded-full border border-gold/10">Principal</span>
                )}
              </div>
              
              <h4 className="text-3xl font-serif font-bold text-carbon mb-8">{point.name}</h4>
              
              <div className="space-y-5 mb-12">
                <div className="flex items-center gap-5 text-carbon/60 group-hover:text-carbon transition-colors">
                  <MapPin size={20} className="text-crimson" />
                  <span className="font-sans font-light text-lg">{point.address}</span>
                </div>
                <div className="flex items-center gap-5 text-carbon/60 group-hover:text-carbon transition-colors">
                  <Clock size={20} className="text-gold" />
                  <span className="font-sans font-light text-lg">{point.hours}</span>
                </div>
                <div className="flex items-center gap-5 text-carbon/60 group-hover:text-carbon transition-colors">
                  <Phone size={20} className="text-crimson" />
                  <span className="font-sans font-light text-lg">{point.phone}</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 py-5 bg-bone border border-black/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-carbon hover:bg-carbon hover:text-white transition-all">
                  Abrir Mapa
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
