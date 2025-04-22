import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Property } from '../../../core/models/property/property.model';
import { MatIconModule } from '@angular/material/icon';
import { PropertyType } from '../../../core/models/enums/property-type.enum';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyCardComponent {
  readonly propertyType = PropertyType;
  @Input() data!: Property;
  formatType(type: string, mode: string): string {
    const capitalizedType =
      type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    const modeLabel = mode === 'location' ? 'à louer' : 'à vendre';
    return `${capitalizedType} ${modeLabel}`;
  }
}
