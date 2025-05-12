import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Property } from '../../../core/models/property/property.model';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PropertyCardComponent } from '../../../shared/components/property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PropertyCardComponent, MatProgressSpinnerModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent {
  @Input() visibleProperties: Property[] = [];
  @Input() isLoadingMore = false;
  @Input() allLoaded = false;
}
