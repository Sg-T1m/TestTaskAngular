import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './Inventory.component';
import {RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';

const routes: Routes =[
  {path: '', component: InventoryComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
