import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  icon,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all rounded-full overflow-hidden relative group";
  
  const variants = {
    primary: "bg-crimson text-white hover:bg-red-700 shadow-lg shadow-crimson/20",
    secondary: "bg-white text-carbon hover:bg-cream",
    outline: "bg-transparent border-2 border-white/20 text-white hover:border-crimson hover:text-crimson",
    gold: "bg-gold text-carbon hover:bg-yellow-600 shadow-lg shadow-gold/20",
  };

  const sizes = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-8 py-3 text-xs",
    lg: "px-10 py-4 text-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </motion.button>
  );
}
