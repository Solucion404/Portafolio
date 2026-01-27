import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
    if (projects.length === 0) {
        return (
            <div className="glass p-12 rounded-3xl border border-dashed border-white/10 text-center">
                <p className="text-text-secondary text-xl italic">Próximamente... estamos compilando nuestras mejores soluciones.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-[32px] overflow-hidden group hover:border-accent/30 transition-all border border-white/5"
                >
                    <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                        {project.image_url ? (
                            <img
                                src={project.image_url}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-accent/20 bg-gradient-to-br from-neutral-900 to-black">
                                <Folder size={64} />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 gap-4">
                            {project.live_url && (
                                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-accent hover:text-background transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
