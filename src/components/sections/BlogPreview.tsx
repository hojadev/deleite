"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Deleite en la Fiesta Nacional del Sol",
    date: "Febrero 2024",
    location: "Complejo Costanera, Chimbas",
    excerpt: "Vivimos una semana increíble compartiendo nuestros clásicos chilenos con miles de sanjuaninos.",
    image: "/foto_grupal.jpeg",
  }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-parchment border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-[11px] font-bold text-crimson uppercase tracking-[0.4em] mb-4">Comunidad</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-carbon">Noticias</h3>
          </div>
          <button className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 hover:text-carbon transition-colors group">
            Ver todas las novedades
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 border border-black/5 group-hover:border-gold/30 transition-all duration-500 shadow-xl shadow-carbon/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/40 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                  <div className="flex flex-col gap-1.5 text-white">
                     <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gold text-white">
                       <Calendar size={12} />
                       {post.date}
                     </div>
                     <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/80">
                       <MapPin size={12} />
                       {post.location}
                     </div>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <h4 className="text-2xl font-serif font-bold text-carbon mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-carbon/40 text-sm font-sans font-light leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="w-12 h-0.5 bg-crimson transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
