import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LanguageService } from './core/language.service';

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
      navProjects: 'Projets', navProfile: 'Profil', navContact: 'Contact', available: 'Disponible immédiatement'
    },
    en: {
      navProjects: 'Projects', navProfile: 'Profile', navContact: 'Contact', available: 'Available immediately'
    }
  };

  get language(): 'fr' | 'en' { return this.languageService.language; }
  t(key: keyof typeof this.copy.fr): string { return this.copy[this.language][key]; }
  setLanguage(language: 'fr' | 'en'): void { this.languageService.language = language; }
}

