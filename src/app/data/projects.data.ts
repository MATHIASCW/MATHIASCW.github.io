import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    title: 'merge_doc',
    type: 'Personal project',
    description: 'A focused tool for merging documents, designed to make a repetitive workflow fast and straightforward.',
    stack: ['Web tool', 'Open source'],
    link: 'https://github.com/MATHIASCW/merge_doc',
    accent: 'coral'
  },
  {
    title: 'Tolkien Knowledge Graph',
    type: 'Academic project',
    description: 'Knowledge graph built from Tolkien Gateway with RDF/Turtle, SPARQL, SHACL validation and a Linked Data API.',
    stack: ['Python', 'FastAPI', 'RDF', 'SPARQL'],
    link: 'https://github.com/MATHIASCW/Semantic-Web-project',
    accent: 'yellow'
  },
  {
    title: 'CV / Resume',
    type: 'Personal project',
    description: 'A concise, bilingual snapshot of my experience, education and technical projects.',
    stack: ['ATS-ready', 'FR / EN'],
    link: '#profile',
    accent: 'coral'
  }
];
