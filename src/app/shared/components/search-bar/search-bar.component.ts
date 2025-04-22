import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { map, Observable, startWith } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LocationService, Region } from '../../../core/services/location.service';
import { PropertyMode } from '../../../core/models/enums/property-mode.enum';
import { PropertyCategory } from '../../../core/models/enums/property-category.enum';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchSubmitted = new EventEmitter<any>();

  isLoading = false;
  searchForm: FormGroup;

  // propertyTypes = [
  //   { label: 'TOUTES', icon: 'all_inclusive', value: 'all' },
  //   { label: 'VENTE', icon: 'home', value: PropertyMode.Vente },
  //   { label: 'LOCATION', icon: 'vpn_key', value: PropertyMode.Location },
  //   { label: 'COURTE DURÉE', icon: 'schedule', value: PropertyMode.CourteDuree }
  // ];
  propertyTypes = [
    {
      label: 'Toutes',
      icon: 'all_inclusive',
      value: 'all',
      tooltip: 'Afficher toutes les annonces'
    },
    {
      label: 'Vente',
      icon: 'home',
      value: PropertyMode.Vente,
      tooltip: 'Biens à vendre'
    },
    {
      label: 'Location',
      icon: 'vpn_key',
      value: PropertyMode.Location,
      tooltip: 'Location longue durée '
    },
    {
      label: 'Courte durée',
      icon: 'schedule',
      value: PropertyMode.CourteDuree,
      tooltip: 'Location pour vacances ou courte période'
    }
  ];
  

  propertyCategories = [
    { value: 'residentiel', label: PropertyCategory.Residentiel, icon: 'home' },
    { value: 'commercial', label: PropertyCategory.Commercial, icon: 'apartment' },
    { value: 'agricole', label: PropertyCategory.Agricole, icon: 'spa' },
  ];

  regions: Region[] = [];
  delegations: string[] = [];

  filteredRegions!: Observable<Region[]>;
  filteredDelegations!: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.searchForm = this.fb.group({
      category: [''],
      type: ['all'],
      region: [''],
      delegation: [{ value: '', disabled: true }],
    });
  }

  ngOnInit(): void {
    this.loadRegions();
    this.onRegionChange();
  }

  private loadRegions(): void {
    this.locationService.getRegions().subscribe((data) => {
      this.regions = data;
      this.filteredRegions = this.searchForm.get('region')!.valueChanges.pipe(
        startWith(''),
        map((value) =>
          this.regions.filter((r) =>
            r.region.toLowerCase().includes(value?.toLowerCase())
          )
        )
      );
    });
  }

  private onRegionChange(): void {
    this.searchForm.get('region')?.valueChanges.subscribe((selectedRegion) => {
      const region = this.regions.find((r) => r.region === selectedRegion);
      this.delegations = region?.delegations || [];

      const delegationControl = this.searchForm.get('delegation');
      delegationControl?.setValue('');

      this.delegations.length
        ? delegationControl?.enable()
        : delegationControl?.disable();

      this.filteredDelegations = delegationControl!.valueChanges.pipe(
        startWith(''),
        map((value) =>
          this.delegations.filter((d) =>
            d.toLowerCase().includes(value?.toLowerCase())
          )
        )
      );
    });
  }

  submit(): void {
    this.isLoading = true;

    const filters = this.searchForm.value;

    const typeFilter = filters.type === 'all' ? '' : filters.type;

    this.searchSubmitted.emit({
      ...filters,
      type: typeFilter,
      onComplete: () => {
        this.isLoading = false;
      }
    });
  }

  resetForm(): void {
    this.isLoading = false;

    this.searchForm.reset({
      category: '',
      type: 'all',
      region: '',
      delegation: ''
    });

    this.searchForm.get('delegation')?.disable();
  }
}
