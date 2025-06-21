import { createContext, useState, type ReactNode } from "react";
import type { Project } from "../types/Project";

interface Props {
    children: ReactNode;
}

interface ProjectContextType {
    project: Project | null;
    setProject: React.Dispatch<React.SetStateAction<Project | null>>;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export default function ProjectProvider({ children }: Props) {
    const [project, setProject] = useState<Project | null>(null);

    return (
        <ProjectContext.Provider
            value={{
                project,
                setProject
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}