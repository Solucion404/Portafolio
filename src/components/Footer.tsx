import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-mono font-bold text-background">
                                404
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-tight">
                                Solución<span className="text-accent">404</span>
                            </span>
                        </div>
                        <p className="text-text-secondary max-w-sm leading-relaxed">
                            Especialistas en transformar problemas técnicos en ventajas competitivas. Desarrollo eficiente para la era moderna.
                        </p>
                        <div className="text-sm font-mono text-accent/80">
                            TEL: +52 622 182 8935
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Explorar</h4>
                        <ul className="space-y-2 text-text-secondary">
                            <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
                            <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
                            <li><a href="#portafolio" className="hover:text-accent transition-colors">Portafolio</a></li>
                            <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Social</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/alb3r7g12" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all" title="GitHub">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/albertgconstantino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all" title="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:solucion404.dev@gmail.com" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all" title="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-secondary text-sm">
                        &copy; {new Date().getFullYear()} Solución404. Todos los derechos reservados.
                    </p>
                    <div className="font-mono text-[10px] text-accent/50 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                        System.status(OK)
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        </footer>
    );
}
