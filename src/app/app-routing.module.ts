import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { InventoryComponent } from './components/inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full'}, 
  { path: 'home-page', component: HomePageComponent} ,   
  { path: 'dashboard', component: DashboardComponent} ,  
  { path: 'product', component: ProductComponent} ,  
  { path: 'categories', component: CategoriesComponent} ,  
  { path: 'brands', component: BrandsComponent} ,  
  { path: 'inventory', component: InventoryComponent} ,  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
