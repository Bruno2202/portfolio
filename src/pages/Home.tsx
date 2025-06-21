import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Saluation from "../components/Saluation";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/contact/Contact";
import Detail from "../components/cards/projects/Detail";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

export default function Home() {
    const { project } = useContext(ProjectContext)!

    return (
        <div className={`
            w-full flex justify-center bg-contain bg-no-repeat bg-darkGrey
            bg-[url(/assets/img/background/back_mobile.png)] md:bg-[url(/assets/img/background/back.png)] 
        `}>
            <AnimatePresence>
                <motion.div key="header">
                    <Header />
                </motion.div>

                <motion.div key="content">
                    <div className="w-full px-4 md:px-12">
                        <Saluation />
                        <About />
                        <Projects />
                        <Contact />
                        <Footer />
                    </div>
                </motion.div>
            </AnimatePresence>

            <Detail project={project} />
        </div>
    );
}
