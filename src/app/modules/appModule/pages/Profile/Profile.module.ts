import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Profile.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'shared';
import { FormProfileComponent } from './components/formProfile/formProfile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes =[
{path: '', component: ProfileComponent},
{path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ProfileComponent,
    FormProfileComponent
  ]
})
export class ProfileModule { }
