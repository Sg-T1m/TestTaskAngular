import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './guards/authGuards';

const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    // { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) }
    {
        path: `app`,
        loadChildren: () =>
            import('./modules/appModule/appModule.module').then(
                (m) => m.AppModuleModule
            ),
            canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./modules/authModule/authModule.module').then(
                (m) => m.AuthModuleModule
            ),
     
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
