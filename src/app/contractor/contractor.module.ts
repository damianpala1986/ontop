import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';


import { ContractorRoutingModule } from './contractor-routing.module';
import { ContractorListComponent } from './contractor-list/contractor-list.component';
import { ContractorFilterComponent } from './contractor-filter/contractor-filter.component';
import { ContractorListHeaderComponent } from './contractor-list/contractor-list-header/contractor-list-header.component';
import { ContractorListItemComponent } from './contractor-list-item/contractor-list-item.component';
import { ContractorSearchComponent } from './contractor-search/contractor-search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContractorListComponent,
    ContractorFilterComponent,
    ContractorListHeaderComponent,
    ContractorListItemComponent,
    ContractorSearchComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    SharedModule,
    ContractorRoutingModule
  ]
})
export class ContractorModule { }
