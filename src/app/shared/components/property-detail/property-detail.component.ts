import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../../../core/models/property.model';
import { PropertyService } from '../../../core/services/property.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PropertyDetailGalleryComponent } from '../property-detail-gallery/property-detail-gallery.component';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule,PropertyDetailGalleryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PropertyDetailComponent implements OnInit {
  property!: Property;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) { }

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.propertyService.getAllProperties().subscribe((props) => {
        this.property = props.find((p) => p.id === propertyId)!;
      });
    }
  }
}
