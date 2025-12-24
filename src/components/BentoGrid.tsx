import { motion } from "framer-motion";
import { Layout, Bot, Zap, Globe, Cpu, MousePointerClick } from "lucide-react";

interface BentoItemProps {
    title: string;
    description: string;
    icon: any;
    className?: string;
    delay?: number;
}

const BentoItem = ({ title, description, icon: Icon, className = "", delay = 0 }: BentoItemProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={`bento-item group ${className}`}
    >
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={120} />
        </div>
        <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                <Icon size={24} />
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors leading-relaxed">
                    {description}
                </p>
            </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
);

export default function BentoGrid() {
    return (
        <section id="servicios" className="py-24 px-6">
            <div className="container mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Soluciones <span className="text-accent underline decoration-accent/30 underline-offset-8">Especializadas</span></h2>
                    <p className="text-text-secondary max-w-xl text-lg italic">"Encontramos la pieza que le falta a tu engranaje digital."</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    <BentoItem
                        title="Desarrollo Web Next-Gen"
                        description="Sitios web ultra-rápidos, optimizados para SEO y conversión, utilizando Astro, React y las últimas tecnologías del mercado."
                        icon={Layout}
                        className="md:col-span-2 md:row-span-1"
                        delay={0.1}
                    />
                    <BentoItem
                        title="Automatización"
                        description="Elimina tareas repetitivas y optimiza tus procesos internos con workflows inteligentes."
                        icon={Bot}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.2}
                    />
                    <BentoItem
                        title="Digitalización de Nichos"
                        description="Llevamos tu negocio tradicional al mundo digital con estrategias enfocadas en tu sector específico."
                        icon={Zap}
                        className="md:col-span-1 md:row-span-2"
                        delay={0.3}
                    />
                    <BentoItem
                        title="Ecosistemas en la Nube"
                        description="Implementación de soluciones serverless y bases de datos escalables con Supabase y Cloudflare."
                        icon={Cpu}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.4}
                    />
                    <BentoItem
                        title="UX Orientada a Resultados"
                        description="Interfaces intuitivas que no solo se ven bien, sino que guían al usuario hacia la conversión."
                        icon={MousePointerClick}
                        className="md:col-span-1 md:row-span-1"
                        delay={0.5}
                    />
                    <BentoItem
                        title="Presencia Global"
                        description="Localización y despliegue estratégico para llegar a clientes en cualquier parte del mundo."
                        icon={Globe}
                        className="md:col-span-2 md:row-span-1"
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
}
