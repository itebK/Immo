import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class PropertyCardComponent {
  @Input() title!: string;
  @Input() location!: string;
  @Input() price!: number;
  @Input() images: string[] = [];
}
