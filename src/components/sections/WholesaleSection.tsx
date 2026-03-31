"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Building, Truck, Utensils, CheckCircle, Calendar, Send, Store } from "lucide-react";

const valueProps = [
  {
    icon: <Utensils className="text-crimson" size={24} />,
    title: "Calidad Premium",
    desc: "Productos elaborados con materia prima seleccionada y recetas tradicionales chilenas.",
  },
  {
    icon: <Truck className="text-gold" size={24} />,
    title: "Logística Confiable",
    desc: "Entrega puntual en Rivadavia y alrededores de San Juan para asegurar frescura.",
  },
  {
    icon: <CheckCircle className="text-crimson" size={24} />,
    title: "Escalabilidad",
    desc: "Desde pequeños eventos sociales hasta grandes suministros para estaciones de servicio.",
  },
];

export default function WholesaleSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "evento",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Quisiera solicitar un presupuesto.\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Empresa:* ${formData.company || '-'}\n*Tipo:* ${formData.type}\n*Mensaje:* ${formData.message}`;
    const url = `https://wa.me/5492614708951?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="wholesale" className="py-24 bg-parchment relative overflow-hidden border-y border-black/5">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
      
      {/* Decorative Organic Shapes */}
      <motion.div 
        animate={{ rotate: [45, 60, 45], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 text-gold opacity-[0.06] pointer-events-none"
      >
        <Image src="/organic-shape.svg" alt="" width={400} height={400} />
      </motion.div>
      <motion.div 
        animate={{ rotate: [-10, -20, -10], y: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] -right-24 w-[500px] h-[500px] text-crimson opacity-[0.03] pointer-events-none"
      >
        <Image src="/organic-shape.svg" alt="" width={500} height={500} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 relative">
          <motion.div 
            animate={{ rotate: [12, -12, 12], scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] text-gold opacity-[0.04] -z-10"
          >
            <Image src="/organic-shape.svg" alt="" width={600} height={600} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -right-40 w-80 h-80 text-crimson opacity-[0.03] -z-10"
          >
            <Image src="/organic-shape.svg" alt="" width={320} height={320} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-carbon leading-none mb-6 mt-4">
            Llevá el sabor{' '}
            <div className="relative inline-block">
              <span className="text-gold italic font-light relative z-10">Deleite</span>
              <div className="absolute -bottom-2 -left-4 -right-8 h-16 bg-[url('/brush-stroke.svg')] bg-contain bg-no-repeat opacity-40 -z-10" />
            </div>
            {" "}a tu nivel.
          </h2>
          <p className="text-lg text-carbon/50 max-w-2xl mx-auto font-sans font-light">
            Somos el aliado gastronómico ideal para salones de eventos, cafeterías y servicios de catering en San Juan.
          </p>
        </div>

        {/* Feature Cards matching elevated style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 bg-white border border-gold/10 rounded-[40px] text-center group hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 bg-parchment rounded-full flex items-center justify-center mb-8 mx-auto border border-black/5 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm">
                {prop.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-carbon mb-4">{prop.title}</h3>
              <p className="text-sm text-carbon/60 leading-relaxed font-sans font-light">{prop.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-24">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-10 py-5 bg-carbon text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-carbon/20 w-full sm:w-auto text-center justify-center"
          >
            Ver Menú Individual
          </a>
          <a
            href="https://wa.me/5492614708951?text=Hola!%20Me%20interesa%20hacer%20un%20pedido%20mayorista."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-crimson text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-crimson/20 w-full sm:w-auto text-center justify-center"
          >
            Pedir al Por Mayor
            <Send size={16} />
          </a>
        </div>

        <div className="bg-white border border-black/5 rounded-[60px] p-8 md:p-20 shadow-2xl shadow-carbon/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-gold/5 to-transparent -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-carbon mb-8 leading-tight">Solicitá un <br /><span className="text-gold">Presupuesto</span></h3>
              <p className="text-carbon/60 mb-12 max-w-sm font-sans font-light leading-relaxed">
                Diseñamos una propuesta artesanal a medida para tu negocio o evento social.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-crimson/5 rounded-2xl flex items-center justify-center shrink-0 border border-crimson/10 group-hover:bg-crimson group-hover:text-white transition-all">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="text-carbon font-bold text-xs uppercase tracking-widest mb-1">Respuesta Rápida</h4>
                    <p className="text-xs text-carbon/40 font-sans">Menos de 24 horas hábiles.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-gold/5 rounded-2xl flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-gold group-hover:text-white transition-all">
                    <Store size={24} />
                  </div>
                  <div>
                    <h4 className="text-carbon font-bold text-xs uppercase tracking-widest mb-1">Muestras sin Cargo</h4>
                    <p className="text-xs text-carbon/40 font-sans">Para locales comerciales.</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-parchment border border-black/5 rounded-2xl py-5 px-8 text-carbon focus:outline-none focus:border-gold/30 transition-all font-sans text-sm"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-parchment border border-black/5 rounded-2xl py-5 px-8 text-carbon focus:outline-none focus:border-gold/30 transition-all font-sans text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-parchment border border-black/5 rounded-2xl py-5 px-8 text-carbon focus:outline-none focus:border-gold/30 transition-all font-sans text-sm"
                />
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-parchment border border-black/5 rounded-2xl py-5 px-8 text-carbon focus:outline-none focus:border-gold/30 transition-all font-sans text-sm appearance-none cursor-pointer"
                >
                  <option value="evento">Evento Social</option>
                  <option value="negocio">Comercial</option>
                  <option value="corporativo">Corporativo</option>
                </select>
              </div>

              <textarea
                required
                name="message"
                rows={4}
                placeholder="¿Cómo podemos ayudarte?"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-parchment border border-black/5 rounded-2xl py-5 px-8 text-carbon focus:outline-none focus:border-gold/30 transition-all font-sans text-sm resize-none"
              />

              <button type="submit" className="w-full py-6 bg-carbon text-parchment rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-carbon/90 transition-all active:scale-[0.98] shadow-xl shadow-carbon/20">
                <Send size={18} />
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
