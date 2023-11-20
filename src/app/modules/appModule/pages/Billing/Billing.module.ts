import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './Billing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'shared';


const Routes: Routes = [
{path: '', component: BillingComponent},
{path: '**', redirectTo: '', pathMatch: 'full'}
]
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(Routes),
    SharedModule
  ],
  declarations: [BillingComponent]
})
export class BillingModule { }
