import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './Reports.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';

const routes: Routes = [
  {path: '', component: ReportsComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }
