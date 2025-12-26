import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import TerminalTyper from "./TerminalTyper";

const terminalPhrases = [
    "iniciating system...",
    "loading modules...",
    "optimizing experience...",
    "ready for production."
];

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Disponible para nuevos proyectos
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                        Transformando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-text-secondary">Error</span> en Solución Digital.
                    </h1>

                    <p className="text-text-secondary text-lg md:text-xl max-w-lg leading-relaxed">
                        Desarrollo Web y Automatización para negocios que buscan evolucionar en un mundo digital cada vez más complejo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 text-center">
                        <motion.a
                            href="#contacto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-background px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 neon-glow"
                        >
                            Contactar Ahora
                            <MoveRight className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#portafolio"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass px-8 py-4 rounded-2xl font-bold text-lg hover:border-white/20 transition-all flex items-center justify-center"
                        >
                            Ver Portafolio
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
                    <TerminalTyper phrases={terminalPhrases} />
                </motion.div>
            </div>
        </section>
    );
}
