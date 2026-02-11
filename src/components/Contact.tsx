import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { EmailService } from '../core/services/EmailService';
import toast from 'react-hot-toast';
import { validateEmail } from '../utils/validateEmail';

export function Contact() {
    const [formData, setFormData] = useState({
        issuerName: '',
        issuerEmail: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    async function handleSendEmail(e: React.FormEvent) {
        e.preventDefault();

        try {
            setIsSubmitted(true);
            await EmailService.sendEmail(formData);
        } catch (err: any) {
            toast.error("Erro ao enviar email. Tente novamente mais tarde");
            setIsSubmitted(false);
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'brunoterribile2005@gmail.com',
            link: 'mailto:bruno@example.com',
        },
        {
            icon: MapPin,
            label: 'Localização',
            value: 'Assis - SP, Brasil',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: '/bruno-terribile',
            link: 'https://linkedin.com/in/brunoterribile',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: '@Bruno2202',
            link: 'https://github.com/Bruno2202',
        },
    ];

    return (
        <section id="contact" className="relative min-h-screen flex items-center py-20 bg-black overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Sparkles size={14} />
                                Disponível para novos projetos
                            </span>
                            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                                Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Conversar?</span>
                            </h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                                Tem uma ideia incrível ou precisa de um desenvolvedor para sua equipe? Mande uma mensagem e vamos construir algo incrível juntos.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="group flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
                                    >
                                        <div className="bg-indigo-500/10 p-3 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                                            <info.icon className="text-indigo-400" size={22} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-indigo-400/60 font-bold mb-0.5">{info.label}</p>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-indigo-400 transition-colors font-medium text-lg"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-white font-medium text-lg">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="p-8 bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/10 rounded-[2rem] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <CheckCircle2 size={80} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    Status
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Atualmente respondendo e-mails em menos de <span className="text-white font-bold">24 horas</span>. Aberto para propostas Full-stack e Freelance.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7 bg-white/[0.03] backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10"
                        >
                            <form onSubmit={handleSendEmail} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-indigo-400 ml-1">Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.issuerName}
                                            onChange={(e) => setFormData({ ...formData, issuerName: e.target.value })}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-indigo-400 ml-1">E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.issuerEmail}
                                            onChange={(e) => setFormData({ ...formData, issuerEmail: e.target.value })}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:ring focus:ring-indigo-500/50 focus:border-indigo-500/50 outline-none transition-all"
                                            placeholder="seu@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-indigo-400 ml-1">Mensagem</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={5}
                                        className={`w-full px-5 py-4 bg-white/5 border rounded-2xl text-white outline-none transition-all resize-none 
                                                ${formData.message.length > 0 && formData.message.length < 10
                                                ? 'border-red-500/50'
                                                : 'border-white/10 focus:ring focus:ring-indigo-500/50'}`}
                                        placeholder="No que posso te ajudar?"
                                    />
                                    {formData.message.length > 0 && formData.message.length < 10 && (
                                        <span className="text-[10px] text-red-400 ml-2">A mensagem precisa de pelo menos 10 caracteres.</span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitted || formData.message.length < 10 || !validateEmail(formData.issuerEmail) || !formData.issuerName}
                                    className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-3
                                        ${isSubmitted
                                            ? 'bg-green-500 text-white cursor-default'
                                            : (formData.message.length < 10 || !validateEmail(formData.issuerEmail) || !formData.issuerName)
                                                ? 'bg-indigo-600/50 text-white/50 cursor-not-allowed'
                                                : 'bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)]'
                                        }`}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle2 size={20} />
                                            Enviado com Sucesso!
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Enviar Mensagem
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}