import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [DatepickerComponent, SelectComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    CommonModule,
  ],
  exports: [DatepickerComponent, SelectComponent],
})
export class SharedModule {}
