import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    MatDividerModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;

  allProperties: Property[] = [];
  filteredProperties: Property[] = [];

  constructor(private fb: FormBuilder, private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      region: [''],
      delegation: [''],
    });

    this.propertyService.getAllProperties().subscribe((properties) => {
      this.allProperties = properties;
      this.filteredProperties = [...properties];
    });
  }

  onSearch(filters: any): void {
    console.log(filters);
    this.propertyService.getAllProperties().subscribe((properties) => {
      const regionFilter = filters.region?.toLowerCase().trim();
      const delegationFilter = filters.delegation?.toLowerCase().trim();
      const categoryFilter = filters.category.toLowerCase();
      const typeFilter = filters.type.toLowerCase();
  
      this.filteredProperties = properties.filter((property) => {
        const matchesRegion = !regionFilter || property.region.toLowerCase().includes(regionFilter);
        const matchesDelegation = !delegationFilter || property.delegation.toLowerCase().includes(delegationFilter);
        const matchesCategory = !categoryFilter || property.category === categoryFilter;
        const matchesType = !typeFilter || property.mode === typeFilter;
  
        return matchesRegion && matchesDelegation && matchesCategory && matchesType;
      });

      setTimeout(() => {
      if (filters.onComplete) {
        filters.onComplete();
      }
    }, 1000);
    });
  }
   
}
