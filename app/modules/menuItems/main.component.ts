import { Component} from '@angular/core';



// AdminRe
import { AdminReCore } from '../../core/core.component';
import { AlphaComponent } from '../../alpha/alpha.component';

@Component({
    selector: 'menu-items',
    template: '<h1>MenuItemsMainComponent 1</h1>'
})
export class MenuItemsMainComponent extends AdminReCore {

    constructor() {
        super();

    }

    ngOnInit() {
        console.log("I'm being called when component is initalized after constructor method in MenuItemsMainComponent in main.component.ts");
    }
}
