import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const { error } = await supabase.from("messages").insert([formData]);

        if (error) {
            console.error("Error sending message:", error);
            setErrorMessage("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
            setStatus("error");
        } else {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="glass p-8 rounded-3xl border border-accent/30 text-center space-y-4"
                    >
                        <div className="flex justify-center">
                            <CheckCircle className="text-accent w-16 h-16" />
                        </div>
                        <h3 className="text-2xl font-bold">¡Mensaje recibido!</h3>
                        <p className="text-text-secondary">
                            Gracias por contactarme. Te responderé lo antes posible para empezar a trabajar en tu solución.
                        </p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="text-accent font-mono text-sm hover:underline"
                        >
                            Enviar otro mensaje
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6 text-left"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-mono text-accent">NOMBRE_USUARIO</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ej. John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 transition-all text-text-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-mono text-accent">EMAIL_CONTACTO</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 transition-all text-text-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-mono text-accent">REQUERIMIENTOS_MSJ</label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Cuéntame sobre tu proyecto o problema técnico..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 transition-all text-text-primary resize-none"
                            />
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                <AlertCircle size={18} />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <button
                            disabled={status === "loading"}
                            type="submit"
                            className="w-full bg-accent text-background px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 neon-glow hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Iniciar Conversación
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
