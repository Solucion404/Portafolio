import { motion } from "framer-motion";

const techStack = [
    "Astro", "React", "Tailwind CSS", "Supabase", "Cloudflare",
    "TypeScript", "Node.js", "Framer Motion", "Lucide React", "Vite"
];

export default function StackMarquee() {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
            <div className="flex">
                <motion.div
                    animate={{ x: [0, -1035] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex items-center gap-12 px-6"
                >
                    {[...techStack, ...techStack, ...techStack].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-text-secondary font-mono text-xl md:text-2xl font-bold tracking-tighter"
                        >
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
