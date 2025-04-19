import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Property } from '../../../core/models/property.model';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class PropertyCardComponent {
  @Input() data!: Property;

  @Input() images: string[] = [];
  @Input() type!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() currency!: string;
  @Input() address!: string;
  @Input() city!: string;
  @Input() area!: string;
  @Input() bedrooms!: number;
  @Input() bathrooms!: number;
  @Input() category?: string;
  @Input() isNew:boolean=true;
  @Input() surface:boolean=true;

}
