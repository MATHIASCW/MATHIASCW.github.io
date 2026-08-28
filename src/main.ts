import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { ProjectsPage } from './app/projects-page';
import { ProfilePage } from './app/profile-page';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'projects' },
	{ path: 'projects', component: ProjectsPage },
	{ path: 'profile', component: ProfilePage },
	{ path: '**', redirectTo: 'projects' }
];

bootstrapApplication(App, { providers: [provideRouter(routes)] }).catch((error: unknown) => console.error(error));
