"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "5492614708951";

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = () => {
    let message = "Hola! Quisiera hacer el siguiente pedido:%0A%0A";
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      message += `- ${item.quantity}x ${item.name} ($${itemTotal})%0A`;
    });
    message += `%0A*Total: $${cartTotal}*`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-carbon/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-parchment shadow-2xl z-50 flex flex-col border-l border-gold/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <h2 className="text-2xl font-serif font-black text-carbon flex items-center gap-3">
                <ShoppingBag className="text-gold" />
                Tu Pedido
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-carbon hover:text-crimson transition-colors bg-white rounded-full shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {cartItems.length === 0 ? (
                <div className="text-center text-carbon/50 mt-10">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                  <p>Tu carrito está vacío.</p>
                  <p className="text-sm mt-2">¡Agrega algunos delirios culinarios!</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-carbon leading-tight pr-4">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-carbon/40 hover:text-crimson transition-colors">
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-serif font-bold text-crimson">${item.price * item.quantity}</span>
                        <div className="flex items-center gap-3 bg-parchment rounded-full px-2 py-1 border border-black/5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-carbon hover:bg-white rounded-full transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-carbon hover:bg-white rounded-full transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-black/5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-carbon font-medium">Total Estimado</span>
                  <span className="text-3xl font-serif font-black text-carbon">${cartTotal}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-widest shadow-lg shadow-[#25D366]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex justify-center items-center gap-2"
                >
                  Confirmar por WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
