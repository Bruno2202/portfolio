import { motion } from "framer-motion";
import Topic from "./cards/Topic";
import { getAge } from "../utils/getAge";
import Highlight from "./Highlight";

export default function About() {
    return (
        <motion.div
            id="about"
            className="flex flex-col items-center justify-center w-full mt-20 mb-40"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            viewport={{ once: true }}
        >
            <p className="text-center text-4xl font-sfpro-bold font-bold mb-8 w-full">
                Sobre mim
            </p>
            <div className="flex flex-col-reverse items-center md:flex-row w-full gap-8">
                <div className="w-full md:w-3/4">
                    <Topic>
                        <p className="text-lg md:text-xl">
                            Olá! Meu nome é <Highlight>Bruno Terribile</Highlight>, tenho {getAge()} anos e sou estudante do <Highlight>3º ano</Highlight> de <Highlight>Ciência da Computação</Highlight> na <Highlight>FEMA</Highlight>.
                            Sou um <Highlight>desenvolvedor Full Stack</Highlight> apaixonado por criar <Highlight>soluções para web e mobile</Highlight>, atuando tanto no <Highlight>front-end</Highlight> quanto no <Highlight>back-end</Highlight>.
                            <br />
                            <br />
                            Tenho <Highlight>experiência prática</Highlight> com tecnologias modernas, como <Highlight>JavaScript</Highlight>, <Highlight>TypeScript</Highlight>, <Highlight>React</Highlight>, <Highlight>React Native</Highlight>, <Highlight>Node.js</Highlight>, bancos de dados relacionais como <Highlight>PostgreSQL</Highlight> e <Highlight>MySQL</Highlight>, além de ferramentas e frameworks como <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, <Highlight>Tailwind</Highlight> e <Highlight>Git</Highlight>.
                            <br />
                            <br />
                            Busco sempre <Highlight>aprimorar meus conhecimentos</Highlight> e <Highlight>habilidades</Highlight>, aplicando as <Highlight>melhores práticas de desenvolvimento</Highlight> para construir aplicações <Highlight>eficientes</Highlight>, <Highlight>escaláveis</Highlight> e com <Highlight>excelente experiência para o usuário</Highlight>.
                        </p>
                    </Topic>
                </div>

                <div className="w-2/3 md:w-1/4">
                    <img
                        alt="Bruno Terribile"
                        className="w-full object-cover rounded-2xl"
                        src="/assets/img/bruno.jpg"
                    />
                </div>
            </div>
        </motion.div>
    );
}