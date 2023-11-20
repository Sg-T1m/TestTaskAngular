import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleComponent } from './authModule.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: AuthModuleComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
      CommonModule, 
      SharedModule,
      ReactiveFormsModule,
      FormsModule,
     RouterModule.forChild(routes)],
    declarations: [AuthModuleComponent],
})
export class AuthModuleModule {}
