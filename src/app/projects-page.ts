import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService, projects } from './app';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css'
})
export class ProjectsPage {
  readonly projects = projects;

  constructor(public languageService: LanguageService) {}

  get language(): 'fr' | 'en' { return this.languageService.language; }
  t(key: 'projects' | 'navProjects'): string {
    if (key === 'navProjects') return this.language === 'fr' ? 'Projets' : 'Projects';
    return this.language === 'fr' ? 'Projets sélectionnés' : 'Selected projects';
  }
}
