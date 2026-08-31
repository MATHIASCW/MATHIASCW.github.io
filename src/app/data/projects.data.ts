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
    title: 'Voice Virtual Assistant',
    type: 'Personal project',
    description: 'Voice assistant proof of concept using ElevenLabs Conversational AI with live microphone and speaker interactions.',
    stack: ['Python', 'Jupyter', 'ElevenLabs API'],
    link: 'https://github.com/MATHIASCW/Voice-Virtual-Assistant-with-ElevenLabs',
    accent: 'mint'
  },
  {
    title: 'Spreadsheet Data Analysis',
    type: 'Personal project',
    description: 'Data analysis workflow using pandas to inspect, clean and explore spreadsheet data.',
    stack: ['Python', 'pandas', 'Jupyter'],
    link: 'https://github.com/MATHIASCW/analyze-spreadsheet-data-with-pandas',
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
