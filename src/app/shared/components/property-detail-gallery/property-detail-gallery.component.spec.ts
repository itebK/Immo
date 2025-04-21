import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailGalleryComponent } from './property-detail-gallery.component';

describe('PropertyDetailGalleryComponent', () => {
  let component: PropertyDetailGalleryComponent;
  let fixture: ComponentFixture<PropertyDetailGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDetailGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
