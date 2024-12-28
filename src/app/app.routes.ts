import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

const redirects: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

const publics: Routes = [
  { path: 'login', component: LoginComponent },
];

export const routes: Routes = [...redirects, ...publics];