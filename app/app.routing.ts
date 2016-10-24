import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent}      from './home/home.component';

const appRoutes: Routes = [
    {path: 'heroes', component: HomeComponent},
    // {path: 'detail/:id', component: HeroDetailComponent},
    {path: '', redirectTo: '/heroes', pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
