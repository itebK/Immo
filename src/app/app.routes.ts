import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/404notfound/pagenotfound.component';
import { PropertyCardComponent } from './shared/components/property-card/property-card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'landingPage',
    component: HomeComponent,
  },
  { path: ':ref', component: PropertyCardComponent },
  // This should always be the last route
  { path: '**', component: PagenotfoundComponent }
];
