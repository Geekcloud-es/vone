import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesQuotationComponent } from './sales-quotation/sales-quotation.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
  path: 'home',
  component: HomeComponent
},
{ path: 'inventory',
 component: InventoryComponent
},
{
  path: 'sales',
  component: SalesComponent,
  children: [{
    path: 'quotation',
    component: SalesQuotationComponent
  }]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
