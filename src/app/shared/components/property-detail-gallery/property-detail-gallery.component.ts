import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-property-detail-gallery',
  templateUrl: './property-detail-gallery.component.html',
  styleUrls: ['./property-detail-gallery.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PropertyDetailGalleryComponent implements OnInit {
  @Input() images: string[] = [];

  selectedIndex = 0;
  showFullscreen = false;

  openFullscreen(index: number): void {
    this.selectedIndex = index;
    this.showFullscreen = true;
  }

  closeFullscreen(): void {
    this.showFullscreen = false;
  }

  ngOnInit(): void {
    console.log("gallery")
  }
}
