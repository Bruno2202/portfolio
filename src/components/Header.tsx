import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'INÍCIO', id: 'home', offset: 0 },
        { label: 'SOBRE MIM', id: 'about', offset: -100 },
        { label: 'PROJETOS', id: 'projects', offset: -100 },
        { label: 'CONTATO', id: 'contact', offset: -100 },
    ];


    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/40 backdrop-blur-md border-b border-gray-200 dark:border-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="hidden md:flex items-center space-x-12 mx-auto">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center gap-2 ml-auto">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors cursor-pointer"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}