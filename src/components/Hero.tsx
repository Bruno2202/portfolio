import { Download, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="flex justify-center items-center min-h-screen flex-col relative"
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="text-indigo-500 dark:text-indigo-400 font-mono text-sm md:text-center tracking-[0.2em] uppercase mb-4 block">
                                Olá, meu nome é
                            </span>

                            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
                                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                                    Bruno Terribile
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col items-center lg:items-center"
                        >
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-gray-700 dark:text-gray-200 font-bold mb-6 tracking-tight">
                                Full Stack Developer
                            </h2>

                            <p className="text-center sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-[600px] leading-relaxed mb-10">
                                Do rascunho ao deploy: construindo ideias em <span className="text-gray-900 dark:text-white font-medium">experiências digitais</span> incríveis.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-5 mb-12"
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all hover:bg-indigo-500 hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.5)] cursor-pointer overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Ver Projetos
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md cursor-pointer"
                        >
                            Entre em Contato
                        </button>

                        <a
                            href="https://drive.google.com/uc?export=download&id=1vO468p7fPoypfcMD1Xbw5QnMPLJR5Pv3"
                            download
                            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-indigo-500/30 text-indigo-400 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-indigo-500/10 hover:border-indigo-500 transition-all cursor-pointer"
                        >
                            <Download size={16} />
                            Baixar CV
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex justify-center gap-4"
                    >
                        {[
                            { href: "https://github.com/Bruno2202", icon: <Github size={20} />, label: "GitHub" },
                            { href: "https://linkedin.com/in/bruno-terribile", icon: <Linkedin size={20} />, label: "LinkedIn" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group relative p-4 bg-white/[0.03] border border-white/10 rounded-xl text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 bg-indigo-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.button
                    onClick={() => scrollToSection('about')}
                    className="cursor-pointer absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={32} />
                </motion.button>
            </div>

            <div className="bg-gradient-to-b from-black/0 to-black p-8 absolute bottom-0 w-full" />
        </section>
    );
}