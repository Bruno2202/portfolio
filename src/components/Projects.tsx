import { motion } from "motion/react";
import { Github, Star, Layout, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { ProjectModel } from "../core/models/ProjectModel";
import { ImageWithFallback } from "./ImageWithFallback";
import { projects } from "../data/projects";
import { ProjectModal } from "./modals/ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectModel | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (project: ProjectModel) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <section id="projects" className="py-24 bg-black relative overflow-hidden">
            {/* Background Decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-20 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]"
                        >
                            <Layout size={12} />
                            Portfolio
                        </motion.div>

                        <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight py-4">
                            Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 inline-block">Destaque</span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Uma seleção de soluções que desenvolvi, unindo arquitetura robusta e interfaces intuitivas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => handleCardClick(project)}
                                className="group relative bg-[#0a0a0f] border border-white/10 rounded-[2rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 cursor-pointer"
                            >
                                {/* Badge de Destaque */}
                                {project.featured && (
                                    <div className="absolute top-5 right-5 z-20 bg-indigo-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-widest flex items-center gap-1.5 shadow-lg">
                                        <Star size={10} fill="currentColor" />
                                        Featured
                                    </div>
                                )}

                                {/* Container da Imagem */}
                                <div className="relative h-60 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
                                    {project.image ? (
                                        <ImageWithFallback
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale-[20%] group-hover:grayscale-0"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-indigo-950/40 to-black flex items-center justify-center">
                                            <span className="text-indigo-500/20 font-black text-4xl italic tracking-tighter uppercase">
                                                {project.title.split(' ')[0]}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Conteúdo do Card */}
                                <div className="p-8 space-y-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags Estilizadas */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-white/[0.03] border border-white/5 text-gray-400 text-[10px] rounded-lg font-bold uppercase tracking-wider group-hover:border-indigo-500/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link de Detalhes */}
                                    <div className="pt-4 flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Detalhes do Projeto
                                            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                    </div>
                                </div>

                                {/* Efeito de Brilho no Hover */}
                                <div className="absolute -inset-px bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Botão Global GitHub */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 text-center"
                    >
                        <a
                            href="https://github.com/brunoterribile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
                        >
                            <Github size={18} className="group-hover:rotate-12 transition-transform" />
                            Explorar Repositórios
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
}