import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { HeaderContext } from '../contexts/HeaderContext';

export default function Header() {
    const { isOpenHeader } = useContext(HeaderContext)!;

    function scrollToElement(elementId: string, offset: number = 0) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY + offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        }
    }

    const navItems = [
        { label: 'INÍCIO', id: 'saluation', offset: 0 },
        { label: 'SOBRE MIM', id: 'about', offset: -100 },
        { label: 'PROJETOS', id: 'projects', offset: -100 },
        { label: 'CONTATO', id: 'contact', offset: -100 },
    ];

    return (
        <AnimatePresence>
            {isOpenHeader && (
                <motion.nav
                    id="header"
                    className="fixed z-[10] bg-[#f5f3e221] flex flex-row items-center justify-center w-screen gap-[60px] backdrop-blur-md max-[600px]:gap-[1px] max-[600px]:text-[0.8rem]"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {navItems.map((item) => (
                        <p
                            key={item.id}
                            className="p-4 h-full cursor-pointer transition-all duration-200 ease-out hover:bg-purple select-none"
                            onClick={() => scrollToElement(item.id, item.offset)}
                        >
                            {item.label}
                        </p>
                    ))}
                </motion.nav>
            )}
        </AnimatePresence>
    );
}