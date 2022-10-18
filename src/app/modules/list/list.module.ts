import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ListComponent } from './list.component';
import { MaterialDataModule } from '../../core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FilterComponent, PaginationComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ListRoutingModule,
    MaterialDataModule,
  ],
})
export class ListModule {}
