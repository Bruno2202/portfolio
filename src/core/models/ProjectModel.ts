export interface ProjectModel {
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
    tags: string[];
    github: string;
    demo?: string;
    featured?: boolean;
    year?: string;
    team?: string;
    highlights?: string[];
}