import { useState, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface TerminalTyperProps {
    phrases: string[];
}

export default function TerminalTyper({ phrases }: TerminalTyperProps) {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const TYPING_SPEED = 100;
    const DELETING_SPEED = 50;
    const PAUSE_TIME = 1500;

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];

        const handleTyping = () => {
            if (!isDeleting && charIndex < currentPhrase.length) {
                // Typing
                setDisplayText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                // Deleting
                setDisplayText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at the end of typing
                setTimeout(() => setIsDeleting(true), PAUSE_TIME);
            } else if (isDeleting && charIndex === 0) {
                // Move to next phrase after deleting
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? DELETING_SPEED : TYPING_SPEED
        );

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, phraseIndex, phrases]);

    return (
        <div className="w-full max-w-xl glass rounded-xl overflow-hidden shadow-2xl border border-white/5 font-mono">
            {/* Window Controls */}
            <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-text-secondary ml-4">
                    <TerminalIcon size={12} />
                    <span>bash — solution404.sh</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 text-sm space-y-2">
                {/* Static History */}
                <div className="flex gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-text-primary">find --solution "digital-chaos"</span>
                </div>
                <div className="text-text-secondary">Searching for efficiency...</div>
                <div className="text-accent">[SUCCESS] Optimized workflow found.</div>

                <div className="flex gap-2">
                    <span className="text-accent">$</span>
                    <span className="text-text-primary">deploy --startup "Solución404"</span>
                </div>
                <div className="text-text-primary font-bold">Compiling Solution... Done.</div>

                {/* Animated Line */}
                <div className="flex gap-2 text-[#00ff41] drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
                    <span className="text-accent">$</span>
                    <span>{displayText}</span>
                    <span className="animate-pulse">|</span>
                </div>
            </div>
        </div>
    );
}
