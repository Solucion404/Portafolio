import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

export default function Reveal({ children, width = "100%", delay = 0, className = "" }: RevealProps) {
    return (
        <div className={className} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay,
                    ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
