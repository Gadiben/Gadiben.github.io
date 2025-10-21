import { Routes } from '@angular/router';
import { Cv } from './cv/cv';

export const routes: Routes = [
  {
    path: 'fr',
    component: Cv,
    data: { lang: 'fr' }
  },
  {
    path: 'en',
    component: Cv,
    data: { lang: 'en' }
  },
  {
    path: '',
    redirectTo: 'fr',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'fr'
  }
];
