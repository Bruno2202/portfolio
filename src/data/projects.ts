import type { Project } from "../types/Project";

export const projects: Project[] = [
    {
        id: 1,
        name: "Sandbox",
        description: "Minha rede social",
        img: "/assets/img/projects/Sandbox.png",
        text: "Uma rede social desenvolvida para dispositivos móveis, com suporte a autenticação via OAuth, e-mail e senha. A plataforma permite que os usuários compartilhem textos e imagens de forma simples e intuitiva.",
        github: "https://github.com/Bruno2202/sandbox",
    },
    {
        id: 2,
        name: "Portfólio",
        description: "Meu portfólio web",
        img: "/assets/img/projects/Portfolio.png",
        text: "Este é o meu portfólio web, onde você pode conhecer mais sobre mim, minhas habilidades e explorar os projetos que desenvolvi ao longo da minha trajetória.",
        github: "https://github.com/Bruno2202/portfolio",
    },
    {
        id: 3,
        name: "Notes",
        description: "Aplicativo de bloco de notas",
        img: "/assets/img/projects/Notes.png",
        text: "Aplicativo móvel desenvolvido para fins de estudo em React Native, que permite ao usuário criar, salvar e gerenciar suas anotações de forma simples e prática.",
        github: "https://github.com/Bruno2202/notes",
    },
    {
        id: 4,
        name: "Notes API",
        description: "API do Notes",
        img: "/assets/img/projects/Notes-api.png",
        text: "Esta é a API do Notes, uma aplicação desenvolvida para gerenciamento de anotações. Ela oferece endpoints para criação, visualização, atualização e exclusão de anotações, além de outras funcionalidades que facilitam a organização das informações do usuário.",
        github: "https://github.com/Bruno2202/notes-api",
    },
    {
        id: 5,
        name: "QuickChat",
        description: "Chat para conversas temporárias",
        img: "/assets/img/projects/QuickChat.png",
        text: "QuickChat é uma plataforma de chat temporário que permite que dois usuários se conectem a uma sala e conversem em tempo real de forma simples e rápida.",
        github: "https://github.com/Bruno2202/quickchat",
    }
];
