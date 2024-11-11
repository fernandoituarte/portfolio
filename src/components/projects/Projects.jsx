import { Project } from '../index'
import { RiStarSLine } from "react-icons/ri";
import project1 from "/project1.png";
import project2 from "/project2.png";

import "./projects.css";

export function Projects() {
  const projects = [
    {
      name: "PepineApp",
      description: "PepineApp est une application e-commerce développée avec NestJS, Next.js et Redux. Elle propose une gestion de stock, les commandes sans paiement en ligne, une authentification sécurisée, ainsi que d'autres fonctionnalités pratiques pour les utilisateurs.",
      image: project1,
      technologies: ["Nextjs", "Redux", "Tailwind", "Nestjs"],
      website: 'https://www.fernandoituarte.com',
      repoBack: 'https://github.com/fernandoituarte/PepineApp-Back',
      repoFront: 'https://github.com/fernandoituarte/PepineApp-Front'
    },
    {
      name: "MonGPT",
      description: "MonGpt est une application basée sur NestJS, OpenAI et React, qui offre un GPT personnalisé capable de corriger l'orthographe, de traduire des textes, de convertir du texte en audio, de transcrire l'audio en texte et de générer des images.",
      image: project2,
      technologies: ["React", "Nestjs", "Tailwind", "OpenAi"],
      website: 'https://mon-gpt.vercel.app/',
      repoBack: 'https://github.com/fernandoituarte/MonGPT-back',
      repoFront: 'https://github.com/fernandoituarte/MonGPT'
    },
  ]
  return (
    <section id="projects" className="projects">
      <h2>
        <RiStarSLine size={40}/>
        <span>
          Projects
        </span>
      </h2>
      <ul>
        {projects.map(project => (<Project key={project.name} {...project} />))}
      </ul>
    </section>
  )
}