import { Component, Injectable } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface Project {
  title: string;
  type: string;
  description: string;
  stack: string[];
  link: string;
  accent: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language: 'fr' | 'en' = 'en';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public languageService: LanguageService) {}

  readonly copy = {
    fr: {
      navProjects: 'Projets', navProfile: 'Profil', navContact: 'Contact', available: 'Disponible immédiatement',
      eyebrow: 'Portfolio · Développeur web', intro: 'Je construis des outils utiles, clairs et solides.',
      lead: 'Mathias Chane Waye, développeur web diplômé d’un Master Informatique DSC. J’aime transformer des besoins métier complexes en expériences simples.',
      viewProjects: 'Voir mes projets', download: 'Télécharger le CV', featured: 'Projet à la une', projects: 'Projets sélectionnés',
      profile: 'Profil', profileText: 'Après des expériences concrètes en ESN, je développe des applications web métier avec une attention particulière pour la qualité, les données et l’expérience utilisateur.',
      experience: 'Expérience professionnelle', education: 'Formation', skills: 'Compétences', languages: 'Langues', contact: 'Construisons quelque chose d’utile.', contactText: 'Vous cherchez un profil curieux, fiable et prêt à apprendre ? Échangeons.', email: 'Écrire un email',
      stages: '11 mois de stages en développement web', location: 'Saint-Étienne · mobilité nationale', resume: 'CV / Resume'
    },
    en: {
      navProjects: 'Projects', navProfile: 'Profile', navContact: 'Contact', available: 'Available immediately',
      eyebrow: 'Portfolio · Web developer', intro: 'I build useful, clear and reliable tools.',
      lead: 'Mathias Chane Waye, web developer with a Master’s degree in Computer Science. I turn complex business needs into simple digital experiences.',
      viewProjects: 'View projects', download: 'Download resume', featured: 'Featured project', projects: 'Selected projects',
      profile: 'Profile', profileText: 'After hands-on experience in a software consultancy, I build business web applications with a focus on quality, data and user experience.',
      experience: 'Professional experience', education: 'Education', skills: 'Skills', languages: 'Languages', contact: 'Let’s build something useful.', contactText: 'Looking for a curious, reliable developer ready to grow? Let’s talk.', email: 'Write an email',
      stages: '11 months of web development internships', location: 'Saint-Étienne · open to relocate in France', resume: 'CV / Resume'
    }
  };

  readonly projects: Project[] = projects;

  get language(): 'fr' | 'en' { return this.languageService.language; }
  t(key: keyof typeof this.copy.fr): string { return this.copy[this.language][key]; }
  setLanguage(language: 'fr' | 'en'): void { this.languageService.language = language; }
}

export const projects: Project[] = [
    { title: 'merge_doc', type: 'Personal project', description: 'A focused tool for merging documents, designed to make a repetitive workflow fast and straightforward.', stack: ['Web tool', 'Open source'], link: 'https://github.com/MATHIASCW/merge_doc', accent: 'coral' },
    { title: 'Infra Dashboard', type: 'Internship · Doing', description: 'Internal dashboard aggregating domains, SSL certificates and emails through the Gandi API.', stack: ['Symfony', 'Vue.js', 'PostgreSQL'], link: '#contact', accent: 'mint' },
    { title: 'Semantic data', type: 'Academic project', description: 'Graph modelling and query API for semantic data using RDF, Turtle and SPARQL.', stack: ['Python', 'FastAPI', 'SPARQL'], link: '#contact', accent: 'yellow' },
    { title: 'CV / Resume', type: 'Personal project', description: 'A concise, bilingual snapshot of my experience, education and technical projects.', stack: ['ATS-ready', 'FR / EN'], link: '#profile', accent: 'coral' }
  ];
