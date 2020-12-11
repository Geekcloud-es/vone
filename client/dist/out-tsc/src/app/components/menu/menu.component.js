import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MenuComponent = class MenuComponent {
    constructor(changeDetectorRef, media) {
        //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
        this.fillerNav = [
            { name: "home", route: "home", icon: "home" },
            { name: "Sales", route: "sales", icon: "local_atm" },
            { name: "Inventory", route: "inventory", icon: "import_contacts" },
            { name: "Analysis", route: "analysis", icon: "align_vertical_bottom" }
        ];
        this.shouldRun = true;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngOnInit() {
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map