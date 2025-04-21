import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../../shared/components/property-card/property-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { PropertyService } from '../../core/services/property.service';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Property } from '../../core/models/property.model';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PropertyCardComponent,
    SearchBarComponent,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  showScrollTopBtn = false;


  allProperties: Property[] = [];
  filteredProperties: Property[] = [];
  visibleProperties: Property[] = [];

  step = 6;
  isLoadingMore = false;
  allLoaded = false;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe((properties) => {
      this.allProperties = properties;
      this.filteredProperties = [...properties];
      this.visibleProperties = this.filteredProperties.slice(0, this.step);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

    // Scroll vers le haut visible
    this.showScrollTopBtn = window.pageYOffset > 300;

    // Chargement infini
    if (atBottom && !this.isLoadingMore && !this.allLoaded) {
      this.loadMore();
    }
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadMore(): void {
    if (this.visibleProperties.length >= this.filteredProperties.length) {
      this.allLoaded = true;
      return;
    }

    this.isLoadingMore = true;
    setTimeout(() => {
      const next = this.filteredProperties.slice(this.visibleProperties.length, this.visibleProperties.length + this.step);
      this.visibleProperties = [...this.visibleProperties, ...next];
      this.isLoadingMore = false;

      if (this.visibleProperties.length >= this.filteredProperties.length) {
        this.allLoaded = true;
      }
    }, 1000); // Simuler un délai
  }

  onSearch(filters: any): void {
    this.propertyService.getAllProperties().subscribe((properties) => {
      const regionFilter = filters.region?.toLowerCase().trim();
      const delegationFilter = filters.delegation?.toLowerCase().trim();
      const categoryFilter = filters.category
        ?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const typeFilter = filters.type.toLowerCase();

      this.filteredProperties = properties.filter((property) => {
        const matchesRegion = !regionFilter || property.region.toLowerCase().includes(regionFilter);
        const matchesDelegation = !delegationFilter || property.delegation.toLowerCase().includes(delegationFilter);
        const matchesCategory = !categoryFilter || property.category === categoryFilter;
        const matchesType = !typeFilter || property.mode === typeFilter;

        return matchesRegion && matchesDelegation && matchesCategory && matchesType;
      });

      this.visibleProperties = this.filteredProperties.slice(0, this.step);
      this.allLoaded = this.visibleProperties.length >= this.filteredProperties.length;

      if (filters.onComplete) {
        setTimeout(() => filters.onComplete(), 500);
      }
    });
  }

}
