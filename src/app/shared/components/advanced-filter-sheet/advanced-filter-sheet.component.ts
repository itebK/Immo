import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-advanced-filter-sheet',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './advanced-filter-sheet.component.html'
})
export class AdvancedFilterSheetComponent {
  private bottomSheetRef = inject(MatBottomSheetRef<AdvancedFilterSheetComponent>);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    priceMin: [''],
    priceMax: [''],
    surfaceMin: [''],
    surfaceMax: ['']
  });

  apply(): void {
    this.bottomSheetRef.dismiss(this.form.value);
  }
}
