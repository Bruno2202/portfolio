import { Github, Linkedin, Heart } from 'lucide-react';

export function Footer() {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/Bruno2202', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/bruno-terribile', label: 'LinkedIn' },
    ];

    const quickLinks = [
        { label: 'Início', href: '#home' },
        { label: 'Sobre', href: '#about' },
        { label: 'Projetos', href: '#projects' },
        { label: 'Contato', href: '#contact' },
    ];

    return (
        <footer className="relative bg-[#030303] border-t border-white/5 py-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">
                            BRUNO<span className="text-indigo-500"> TERRIBILE</span>
                        </h3>
                        <p className="text-gray-400 text-base max-w-xs leading-relaxed">
                            Desenvolvedor Web & Mobile focado em construir interfaces de alto impacto e sistemas escaláveis.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6">
                            Navegação
                        </h4>
                        <ul className="grid grid-cols-1 gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center text-gray-400 hover:text-white transition-all text-sm"
                                    >
                                        <span className="h-px w-0 bg-indigo-500 group-hover:w-3 transition-all mr-0 group-hover:mr-2" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6">
                            Conectar
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 text-gray-400 hover:text-white transition-all hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
                    <p>© {new Date().getFullYear()} Bruno Terribile. Todos os direitos reservados.</p>
                    
                    <p className="flex items-center gap-1.5 group">
                        Built with 
                        <Heart size={12} className="text-red-500 group-hover:scale-125 transition-transform fill-red-500" /> 
                        in Brazil
                    </p>
                </div>
            </div>
        </footer>
    );
}