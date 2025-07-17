import { motion } from "framer-motion";
import Project from "./cards/projects/Project";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <motion.div
            id="projects"
            className="flex flex-col items-center justify-start w-full mb-40"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            viewport={{ once: true }}
        >
            <p className="text-center text-4xl font-sfpro-bold mb-8">
                Meus projetos
            </p>
            <div
                className="flex flex-wrap items-start justify-center w-full gap-10"
            >
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </motion.div>
    );
}