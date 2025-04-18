import { Component, Input } from '@angular/core';
import { Property } from '../../core/models/property.model';
import { PropertyService } from '../../core/services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
  data!: Property;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ref = this.route.snapshot.paramMap.get('ref');
    if (ref) {
      const allProperties = this.propertyService.getProperties();
      console.log(ref)
      console.log(allProperties)

      this.data = allProperties.find((property) => property.ref === ref)!;
      console.log(this.data)
    }
  }
}
