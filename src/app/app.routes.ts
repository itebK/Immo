import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/404notfound/pagenotfound.component';
import { PropertyComponent } from './pages/property/property.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'landingPage',
    component: HomeComponent,
  },
  { path: ':property', component: PropertyComponent },
  // This should always be the last route
  { path: '**', component: PagenotfoundComponent }
];
