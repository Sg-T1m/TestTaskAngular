import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'shared';
import { RouterModule, Routes } from '@angular/router';

import { AppModuleComponent } from './appModule.component';
import { NavBarComponent } from './components/navBar/navBar.component';
import { NavBarBtnComponent } from './components/navBarBtn/navBarBtn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ErorMessengeComponent } from './components/erorMessenge/erorMessenge.component';

const routes: Routes = [
    {
        path: '',
        component: AppModuleComponent,
        children: [
            {
                path: 'Inventory',
                loadChildren: () =>
                    import('./pages/Inventory/Inventory.module').then(
                        (m) => m.InventoryModule
                    ),
            },
            {
                path: 'Billing',
                loadChildren: () =>
                    import('./pages/Billing/Billing.module').then(
                        (m) => m.BillingModule
                    ),
            },
            {
                path: 'Reports',
                loadChildren: () =>
                    import('./pages/Reports/Reports.module').then(
                        (m) => m.ReportsModule
                    ),
            },
            {
                path: 'Profile',
                loadChildren: () =>
                    import('./pages/Profile/Profile.module').then(
                        (m) => m.ProfileModule
                    ),
            },
        ],
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AppModuleComponent,
        NavBarComponent,
        NavBarBtnComponent,
        HeaderComponent,
        ErorMessengeComponent
     
    ],
})
export class AppModuleModule {}
