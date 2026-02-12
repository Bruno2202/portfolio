import { motion } from "motion/react";
import { Code2, GraduationCap, Laptop, Sparkles } from "lucide-react";

export default function About() {
    const stats = [
        { icon: Laptop, label: "Foco", value: "Full Stack" },
        { icon: GraduationCap, label: "Formação", value: "Ciência da Computação" },
        { icon: Code2, label: "Experiência", value: "4+ Anos de Estudo" },
    ];

    return (
        <section id="about" className="relative min-h-screen flex items-center py-24 bg-black overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-12 gap-16 items-center"
                >
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.div
                            className="relative group mx-auto max-w-[320px] lg:max-w-none"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900 shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-b from-transparent to-black/60 absolute inset-0 z-10" />
                                <img
                                    src="/assets/img/bruno.jpg"
                                    alt="Bruno Terribile"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>

                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-[#0d0d15] border border-white/10 p-5 rounded-2xl shadow-xl z-20 hidden md:block"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-bold text-white tracking-tight">Open to Work</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-black uppercase tracking-[0.2em]"
                            >
                                <Sparkles size={14} />
                                Discovery
                            </motion.div>

                            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight">
                                Bruno <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Terribile</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                Olá! Tenho 21 anos e atualmente curso o 4º ano de <span className="text-white font-medium italic underline decoration-indigo-500/50">Ciência da Computação na FEMA</span>. Minha jornada no desenvolvimento é movida pela curiosidade de entender como sistemas complexos funcionam por baixo do capô.
                            </p>
                            <p>
                                Como <span className="text-white font-semibold">Desenvolvedor Web e Mobile</span>, foco na criação de ecossistemas digitais que não sejam apenas funcionais, mas visualmente impactantes e tecnicamente robustos. Do design de interfaces modernas à arquitetura de bancos de dados escaláveis.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 transition-colors group"
                                >
                                    <stat.icon size={20} className="text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
                                    <p className="text-sm text-white font-semibold">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}