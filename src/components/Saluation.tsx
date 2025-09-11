import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";

export default function Saluation() {
    return (
        <motion.div
            id="saluation"
            className="flex flex-col items-center justify-center w-full h-screen"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ease: "easeOut", duration: 1 }}
        >
            <div className="flex flex-row items-center justify-center text-center mb-4 md:mb-2 select-none md:select-auto">
                <p className="text-5xl">
                    Olá, meu nome é{' '}
                    <span className="bg-gradient-to-r from-lightPurple to-purple bg-clip-text text-transparent font-sfpro-bold text-6xl md:text-5xl">
                        Bruno
                    </span>
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", delay: 1 }}
                className="text-xl bg-gradient-to-b from-white/100 to-white/12 bg-clip-text text-transparent mb-8 select-none md:select-auto"
            >
                Web & Mobile developer
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, ease: "easeOut", duration: 1 }}
            >
                <a
                    href="https://drive.google.com/uc?export=download&id=1vO468p7fPoypfcMD1Xbw5QnMPLJR5Pv3"
                    className="flex select-none md:select-auto flex-row gap-2 items-center justify-center font-bold bg-gradient-to-r from-lightPurple to-purple transition-all duration-200 ease-in-out px-5 py-3 rounded-2xl text-base border-none cursor-pointer hover:scale-105 active:scale-100"
                >
                    <DownloadIcon />
                    Baixar currículo
                </a>
            </motion.div>
        </motion.div >
    );
} 