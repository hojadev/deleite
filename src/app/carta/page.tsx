import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

const menuItems = [
  {
    category: "Sushi & Handrolls Fusión",
    items: [
      {
        name: "Handroll Pollo Queso Cebollín",
        description: "Crujiente roll frito en panko con pollo teriyaki, queso crema y cebollín. Tamaño premium.",
        individual: "$ 3.500",
        wholesale: "$ 32.000",
        wholesaleUnit: "10 un.",
      },
      {
        name: "Handroll Camarón Queso Cebollín",
        description: "Clásico infalible con camarones ecuatorianos apanados y nuestro blend especial de queso crema.",
        individual: "$ 4.100",
        wholesale: "$ 38.000",
        wholesaleUnit: "10 un.",
      },
    ]
  },
  {
    category: "Clásicos Chilenos",
    items: [
      {
        name: "Completo Italiano",
        description: "Salchicha premium, abundante palta hass, tomate fresco y mayo casera en pan amasado super suave.",
        individual: "$ 2.400",
        wholesale: "$ 20.000",
        wholesaleUnit: "10 un.",
      },
      {
        name: "Empanada de Pino",
        description: "Receta tradicional. Carne picada a cuchillo, huevo, aceituna y pasas, horneada al punto de oro.",
        individual: "$ 1.800",
        wholesale: "$ 19.500",
        wholesaleUnit: "12 un.",
      },
      {
        name: "Chacarero Premium",
        description: "Laminas de lomo vacuno, porotos verdes, ají verde y tomate. Un clásico chileno con el mejor lomo.",
        individual: "$ 3.200",
        wholesale: "$ 29.000",
        wholesaleUnit: "10 un.",
      }
    ]
  },
  {
    category: "Pastelería",
    items: [
      {
        name: "Milhojas de Manjar",
        description: "Capas infinitas de masa crocante rellenas con abundante dulce de leche estilo chileno.",
        individual: "$ 1.500",
        wholesale: "$ 13.000",
        wholesaleUnit: "10 un.",
      }
    ]
  }
];

export default function CartaPage() {
  return (
    <main className="min-h-screen bg-parchment relative selection:bg-gold/30">
      <Navbar />
      
      {/* Texture Background */}
      <div className="fixed inset-0 opacity-[0.10] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(rgba(26,26,26,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none z-0" />

      <section className="relative z-10 pt-48 pb-32 px-4 md:px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="w-24 h-24 mx-auto relative mb-8">
            <Image src="/logo.png" alt="Deleite Logo" fill sizes="(max-width: 768px) 96px, 96px" className="object-contain drop-shadow-md" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-carbon uppercase tracking-widest mb-4">
            La Carta
          </h1>
          <div className="mx-auto w-24 h-1 bg-gold rounded-full mb-6" />
          <p className="font-serif italic text-xl text-carbon/60">
            Nuestra fina selección de fusiones gastronómicas.
          </p>
        </div>

        {/* Menu Body */}
        <div className="space-y-20 bg-white/60 backdrop-blur-md p-8 md:p-16 rounded-[40px] shadow-2xl shadow-gold/5 border border-gold/20">
          
          <div className="flex justify-end gap-12 sm:gap-20 border-b-2 border-carbon mb-8 pb-4">
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-carbon/50">Porción</span>
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-gold text-right w-24">Mayorista</span>
          </div>

          {menuItems.map((category, idx) => (
            <div key={idx} className="relative">
              <h2 className="text-2xl md:text-3xl font-serif font-black text-crimson mb-8 flex items-center gap-4">
                {category.category}
                <div className="h-px bg-crimson/20 flex-1" />
              </h2>
              
              <div className="space-y-10">
                {category.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 mb-2">
                      {/* Name and Dots */}
                      <div className="flex-1 flex items-baseline">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-carbon group-hover:text-gold transition-colors shrink-0">
                          {item.name}
                        </h3>
                        {/* Dotted Leader */}
                        <div className="flex-1 mx-4 border-b-2 border-dotted border-carbon/20 relative top-[-6px] hidden sm:block" />
                      </div>
                      
                      {/* Prices */}
                      <div className="flex justify-between sm:justify-end gap-12 sm:gap-20 shrink-0">
                        <span className="text-xl font-serif font-bold text-carbon">
                          {item.individual}
                        </span>
                        <div className="text-right w-24">
                          <span className="text-xl font-serif font-black text-gold">
                            {item.wholesale}
                          </span>
                          <div className="text-[10px] font-bold text-gold/60 uppercase tracking-widest">
                            {item.wholesaleUnit}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm font-sans text-carbon/50 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Footer info */}
        <div className="mt-20 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-carbon/40 mb-8">
            Todos los precios expresados en ARS. Sujetos a modificación sin previo aviso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl">
            <a
              href="https://wa.me/5492614708951?text=Hola!%20Quisiera%20hacer%20un%20pedido%20individual."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-carbon text-white rounded-full font-bold text-[10px] md:text-[11px] uppercase tracking-widest shadow-lg shadow-carbon/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-1/2"
            >
              Hacer Pedido Individual
            </a>
            <a
              href="https://wa.me/5492614708951?text=Hola!%20Me%20interesa%20hacer%20un%20pedido%20mayorista."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-crimson text-white rounded-full font-bold text-[10px] md:text-[11px] uppercase tracking-widest shadow-lg shadow-crimson/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-1/2"
            >
              Encargar al por mayor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
