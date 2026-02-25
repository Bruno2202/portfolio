export interface ProjectModel {
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
    tags: string[];
    github?: string;
    frontend?: string;
    backend?: string;
    demo?: string;
    featured?: boolean;
    year?: string;
    team?: string;
    highlights?: string[];
}