import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BrandsComponent } from './components/brands/brands.component'; 

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AllusersComponent } from './components/reports/allusers/allusers.component';
import { LowinventoryComponent } from './components/reports/lowinventory/lowinventory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    HeaderComponent,
    ProductComponent,
    CategoriesComponent,
    InventoryComponent,
    BrandsComponent,
    AllusersComponent,
    LowinventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,
    FormsModule ,ToastrModule.forRoot(),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
