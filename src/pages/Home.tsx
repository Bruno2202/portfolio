import About from "../components/About";
import Projects from "../components/Projects";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { useTheme } from "../contexts/ThemeContext";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Contact } from "../components/Contact";

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="bg-white dark:bg-black transition-colors relative">
            <AnimatedBackground isDark={theme === 'dark'} />

            <div className="relative z-10">
                <Header/>
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>

    );
}
