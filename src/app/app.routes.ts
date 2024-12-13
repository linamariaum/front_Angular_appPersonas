import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/listar-personas' },
  { path: 'listar-personas', loadChildren: () => import('./pages/personas/personas.routes').then(m => m.PERSONAS_ROUTES) }
];
