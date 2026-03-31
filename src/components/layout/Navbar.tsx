"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Menú", href: "/#menu" },
  { name: "Historia", href: "/#story" },
  { name: "Mayorista", href: "/#wholesale" },
  { name: "Bitácora", href: "/#blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { cartItems, openCart } = useCart();
  
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-1" : "bg-transparent py-2"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Column 1: Logo and Brand */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="relative z-10 flex items-center gap-4 group">
                <div className="w-[55px] h-[55px] md:w-[75px] md:h-[75px] relative group-hover:scale-105 transition-transform duration-500 drop-shadow-sm">
                  <Image src="/logo.png" alt="Deleite Logo" fill sizes="64px" className="object-contain" priority />
                </div>
                <span className="text-2xl md:text-3xl font-serif font-black tracking-tight text-carbon group-hover:text-gold transition-colors">
                  Deleite
                </span>
              </Link>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="hidden lg:flex flex-1 justify-center">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[12px] font-bold text-carbon uppercase tracking-wider hover:text-crimson transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crimson transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Cart & CTA */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
              <button onClick={openCart} className="p-2 text-carbon hover:text-crimson transition-colors relative">
                <ShoppingBag size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-crimson text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <Link 
                href="#menu"
                className="px-8 py-3 rounded-full border border-crimson text-crimson text-[12px] font-bold uppercase tracking-widest hover:bg-crimson hover:text-white transition-all duration-300 shadow-sm"
              >
                Pedir Ahora
              </Link>
            </div>

            {/* Mobile Toggle & Actions */}
            <div className="lg:hidden flex flex-1 justify-end items-center gap-4">
              <button onClick={openCart} className="p-2 text-carbon relative">
                <ShoppingBag size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-crimson text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                className="p-2 text-carbon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-parchment/98 backdrop-blur-xl border-b border-black/5"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-serif font-medium text-carbon hover:text-crimson transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-black/10">
                <Link
                  href="#menu"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-crimson text-white font-bold rounded-xl uppercase tracking-widest text-xs"
                  onClick={() => setIsOpen(false)}
                >
                  Pedir Ahora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <CartDrawer />
  </>
);
}
