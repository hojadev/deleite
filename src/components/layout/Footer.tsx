import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bone border-t border-black/5 pt-20 pb-10 text-carbon">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="#" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold/20 group-hover:border-gold">
                <Image
                  src="/logo.png"
                  alt="Deleite Logo"
                  fill sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-serif font-black text-carbon tracking-tighter">DELEITE</span>
            </Link>
            <p className="text-carbon/50 text-sm font-sans font-light leading-relaxed mb-8">
              Fusión Chileno-Argentina en el corazón de San Juan. Recetas familiares con un toque de Deleite premium.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/deleiteinternacional?_rdc=10&_rdr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-black/5 rounded-full flex items-center justify-center hover:bg-crimson hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Navegación</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="#menu" className="text-carbon/40 hover:text-crimson transition-colors">Menú Digital</Link></li>
              <li><Link href="#wholesale" className="text-carbon/40 hover:text-crimson transition-colors">Catering y Eventos</Link></li>
              <li><Link href="#blog" className="text-carbon/40 hover:text-crimson transition-colors">Bitácora Social</Link></li>
              <li><Link href="#story" className="text-carbon/40 hover:text-crimson transition-colors">Nuestra Historia</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-serif font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Contacto</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 text-carbon/60">
                <MapPin size={18} className="text-crimson shrink-0" />
                <span className="font-sans font-light leading-tight">Rivadavia, San Juan, Argentina</span>
              </li>
              <li className="flex items-center gap-4 text-carbon/60">
                <Phone size={18} className="text-crimson shrink-0" />
                <span className="font-sans font-light font-bold">+56 9 2062 1254</span>
              </li>
              <li className="flex items-center gap-4 text-carbon/60">
                <Mail size={18} className="text-crimson shrink-0" />
                <span className="font-sans font-light">hola@deleitefusion.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-gold font-serif font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Horarios</h4>
            <ul className="space-y-3 text-sm text-carbon/50 font-sans font-light">
              <li className="flex justify-between border-b border-black/5 pb-2">
                <span>Mar - Jue:</span>
                <span className="text-carbon">19:30 - 23:30</span>
              </li>
              <li className="flex justify-between border-b border-black/5 pb-2">
                <span>Vie - Sáb:</span>
                <span className="text-carbon">19:30 - 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-carbon">19:30 - 23:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-carbon/30 font-bold uppercase tracking-[0.2em]">
          <p>© 2024 Deleite Fusión. Gourmet Experience.</p>
          <div className="flex gap-10">
            <Link href="#" className="hover:text-gold transition-colors">Términos</Link>
            <Link href="#" className="hover:text-gold transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
