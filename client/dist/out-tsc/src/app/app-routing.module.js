import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SalesQuotationComponent } from './sales-quotation/sales-quotation.component';
import { SalesComponent } from './sales/sales.component';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map