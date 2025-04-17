import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../shared/components/property-card/property-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDivider, MatDividerModule } from '@angular/material/divider';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
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
  MatDividerModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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

  properties = [
    {
      title: 'Condo moderne à Québec',
      location: 'Québec, QC',
      price: 345000,
      type: 'vente',
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300'
      ]
    },
    {
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300'
      ]
    },
    {
      title: 'Condo moderne à Québec',
      location: 'Québec, QC',
      price: 345000,
      type: 'vente',
      images: [
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300'
      ]
    },
    {
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300'
      ]
    },
    {
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300'
      ]
    },
    {
      title: 'Appartement à louer à Montréal',
      location: 'Montréal, QC',
      price: 1200,
      type: 'location',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&h=300'
      ]
    }
  ];

  filteredProperties = this.properties;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      region: [''],
      municipalite: ['']
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

    this.filteredProperties = this.properties.filter(p => {
      const matchLocation = location ? p.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchType = type ? p.type === type : true;
      const matchMin = minPrice ? p.price >= minPrice : true;
      const matchMax = maxPrice ? p.price <= maxPrice : true;
      return matchLocation && matchType && matchMin && matchMax;
    });
  }
}