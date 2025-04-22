import { Routes } from '@angular/router';
import { PropertyDetailComponent } from './features/properties/property-detail/property-detail.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { HomeComponent } from './features/home/home.component';
import { PagenotfoundComponent } from './features/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'landingPage', component: HomeComponent },
      { path: 'details/:id', component: PropertyDetailComponent },
      { path: '**', component: PagenotfoundComponent },
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
