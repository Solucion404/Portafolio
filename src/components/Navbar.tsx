import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Portafolio", href: "#portafolio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`max-w-5xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${isScrolled ? "py-2 shadow-2xl" : ""
          }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-mono font-bold text-background">
            404
          </div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">
            Solución<span className="text-accent">404</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-accent font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacto"
            className="border border-accent text-accent px-5 py-2 rounded-full text-sm font-medium hover:bg-accent hover:text-background transition-colors"
          >
            Iniciar Proyecto
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4 pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-primary font-medium text-lg border-b border-white/5 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-accent text-background w-full py-3 rounded-xl font-bold mt-4 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Iniciar Proyecto
          </a>
        </motion.div>
      )}
    </nav>
  );
}
