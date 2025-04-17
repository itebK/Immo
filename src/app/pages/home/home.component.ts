import { Component, OnInit } from '@angular/core';
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
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { PropertyService } from '../../core/services/property.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PropertyCardComponent,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDividerModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchForm!: FormGroup;
  selectedType: 'vente' | 'location' = 'vente';

  regions = [
    { value: 'tunis', label: 'Grand Tunis' },
    { value: 'sousse', label: 'Sousse' },
  ];

  cities = [
    { value: 'ariana', label: 'Ariana' },
    { value: 'manouba', label: 'Manouba' },
  ];

  filteredProperties: any[] = [];


  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.filteredProperties = this.propertyService.getProperties();

    this.searchForm = this.fb.group({
      region: [''],
      municipalite: [''],
    });
    // this.searchForm = this.fb.group({
    //   location: [''],
    //   type: [''],
    //   minPrice: [''],
    //   maxPrice: ['']
    // });
  }

  onSearch(): void {
    const { location, type, minPrice, maxPrice } = this.searchForm.value;

    this.filteredProperties = this.propertyService
      .getProperties()!
      .filter((p) => {
        const matchLocation = location
          ? p.location.toLowerCase().includes(location.toLowerCase())
          : true;
        const matchType = type ? p.type === type : true;
        const matchMin = minPrice ? p.price >= minPrice : true;
        const matchMax = maxPrice ? p.price <= maxPrice : true;
        return matchLocation && matchType && matchMin && matchMax;
      });
  }
}
