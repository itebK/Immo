import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home.component";
import { PropertyCardComponent } from './shared/components/property-card/property-card.component';
import { NavbarComponent } from './shared/components/navbar.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'immo';
}
