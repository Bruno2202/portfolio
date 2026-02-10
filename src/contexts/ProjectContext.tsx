import { createContext, useState, type ReactNode } from "react";
import type { ProjectModel } from "../core/models/ProjectModel";

interface Props {
    children: ReactNode;
}

interface ProjectContextType {
    project: ProjectModel | null;
    setProject: React.Dispatch<React.SetStateAction<ProjectModel | null>>;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export default function ProjectProvider({ children }: Props) {
    const [project, setProject] = useState<ProjectModel | null>(null);

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