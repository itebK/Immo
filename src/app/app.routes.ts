import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/404notfound/pagenotfound.component';
import { PropertyDetailComponent } from './shared/components/property-detail/property-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'landingPage',
    component: HomeComponent,
  },
  { path: 'details/:id', component: PropertyDetailComponent },
  // This should always be the last route
  { path: '**', component: PagenotfoundComponent }
];
