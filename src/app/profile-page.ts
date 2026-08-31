import { Component } from '@angular/core';
import { LanguageService } from './core/language.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css'
})
export class ProfilePage {
  constructor(public languageService: LanguageService) {}
  get language(): 'fr' | 'en' { return this.languageService.language; }
}
