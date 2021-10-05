import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
