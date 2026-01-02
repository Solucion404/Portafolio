import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const TEMPLATES = [
    {
        id: 1,
        title: "E-Commerce Premium",
        image: "/templates/template-1.png",
        link: "#",
        description: "Una tienda online moderna con enfoque en conversión y velocidad."
    },
    {
        id: 2,
        title: "Restaurante Gourmet",
        image: "/templates/template-2.png",
        link: "#",
        description: "Diseño elegante para destacar platillos y facilitar reservaciones."
    },
    {
        id: 3,
        title: "Arquitectura & Diseño",
        image: "/templates/template-3.png",
        link: "#",
        description: "Portfolio minimalista para estudios de arquitectura y diseño de interiores."
    },
];

export default function TemplatesGallery() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [showLightbox, setShowLightbox] = useState(false);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? TEMPLATES.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === TEMPLATES.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Plantillas <span className="text-accent underline decoration-accent/30 underline-offset-8">Exclusivas</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Diseños optimizados y listos para escalar tu negocio al siguiente nivel.
                    </p>
                </div>

                {/* Desktop 3D Carousel */}
                <div className="hidden md:flex justify-center items-center gap-4 py-12 perspective-1000">
                    {TEMPLATES.map((template, index) => {
                        const isActive = index === activeIndex;
                        const isLeft = index === (activeIndex - 1 + TEMPLATES.length) % TEMPLATES.length;
                        const isRight = index === (activeIndex + 1) % TEMPLATES.length;

                        return (
                            <motion.div
                                key={template.id}
                                onClick={() => isActive ? setShowLightbox(true) : setActiveIndex(index)}
                                className={`relative cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden
                  ${isActive ? "z-50 shadow-[0_0_50px_rgba(0,224,85,0.3)] border-2 border-accent" : "z-10 grayscale opacity-50"}
                `}
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.15 : 0.85,
                                    rotateY: isLeft ? 25 : isRight ? -25 : 0,
                                    x: isLeft ? -50 : isRight ? 50 : 0,
                                    opacity: isActive ? 1 : 0.4,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                style={{
                                    width: "400px",
                                    aspectRatio: "16/9",
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay on Hover for active */}
                                {isActive && (
                                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">{template.title}</h3>
                                        <p className="text-gray-300 text-sm mb-6">{template.description}</p>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setShowLightbox(true); }}
                                                className="bg-accent text-background p-3 rounded-full hover:scale-110 transition-transform"
                                                title="Ampliar vista"
                                            >
                                                <Maximize2 size={20} />
                                            </button>
                                            <a
                                                href={template.link}
                                                className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all"
                                                title="Ver Demo"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mobile View (Simple Stack/Slider) */}
                <div className="md:hidden space-y-8">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-card">
                        <motion.img
                            key={activeIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src={TEMPLATES[activeIndex].image}
                            alt={TEMPLATES[activeIndex].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold">{TEMPLATES[activeIndex].title}</h3>
                            <p className="text-text-secondary text-sm mt-2">{TEMPLATES[activeIndex].description}</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handlePrev}
                            className="p-4 glass rounded-full text-accent hover:bg-accent hover:text-background transition-all"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-4 glass rounded-full text-accent hover:bg-accent hover:text-background transition-all"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {showLightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setShowLightbox(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
                        >
                            <X size={40} />
                        </button>

                        <div className="max-w-6xl w-full flex flex-col items-center gap-8">
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <img
                                    src={TEMPLATES[activeIndex].image}
                                    alt={TEMPLATES[activeIndex].title}
                                    className="w-full h-full object-contain bg-black"
                                />
                            </motion.div>

                            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 px-4">
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-white">{TEMPLATES[activeIndex].title}</h2>
                                    <p className="text-text-secondary mt-2 max-w-xl">{TEMPLATES[activeIndex].description}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={TEMPLATES[activeIndex].link}
                                        className="bg-accent text-background px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                                    >
                                        Ver Demo en Vivo
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
