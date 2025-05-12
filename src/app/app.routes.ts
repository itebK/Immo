import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'landingPage', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
      { path: 'details/:id', loadComponent: () => import('./features/properties/property-detail/property-detail.component').then(m => m.PropertyDetailComponent) },
      { path: '**', loadComponent: () => import('./features/pagenotfound/pagenotfound.component').then(m => m.PagenotfoundComponent) },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) }
    ]
  }
];


