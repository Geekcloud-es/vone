import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesQuotationComponent } from './sales-quotation/sales-quotation.component';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import {  InMemoryCache, HttpLink   } from "@apollo/client/core";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SalesComponent,
    InventoryComponent,
    SalesQuotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    apollo: Apollo,
  ) {
     apollo.create({
      link: new HttpLink({ uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
