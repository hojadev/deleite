"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Truck } from "lucide-react";

const Map = dynamic(() => import("@/components/ui/Map"), { ssr: false });

const zones = [
  "Capital (Centro y alrededores)",
  "Rivadavia (Zonas seleccionadas)",
  "Santa Lucía",
  "Rawson (Barrios del Norte)",
  "Chimbas (Cercanías Benavidez)",
];

export default function Coverage() {
  return (
    <section className="py-24 bg-parchment border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white border border-black/5 rounded-[60px] p-8 md:p-20 relative overflow-hidden shadow-2xl shadow-carbon/5">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-crimson/5 to-transparent" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Truck size={12} />
                    Logística Propia
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-black text-carbon leading-tight mb-8">
                    Llegamos a tu <span className="text-crimson italic font-light italic">puerta</span> en San Juan.
                  </h2>
                  <p className="text-carbon/50 text-lg mb-12 font-sans font-light">
                    Contamos con un equipo de reparto dedicado para asegurar que tu pedido llegue caliente y en perfectas condiciones.
                  </p>
                  
                  <div className="space-y-5">
                    {zones.map((zone, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-carbon group cursor-default">
                        <div className="w-2.5 h-2.5 rounded-full bg-gold/20 group-hover:bg-gold transition-colors" />
                        <span className="text-lg font-sans font-light text-carbon/80">{zone}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 flex items-center gap-4 text-gold text-sm italic font-serif">
                    <MapPin size={16} />
                    Consultá por otras zonas vía WhatsApp.
                  </div>
                </motion.div>
              </div>
              
              {/* React Leaflet Map visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative bg-bone rounded-[48px] border border-black/5 p-4 flex items-center justify-center aspect-square shadow-inner"
              >
                <Map />
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
