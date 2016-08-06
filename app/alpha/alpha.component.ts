import { Component} from '@angular/core';



// AdminRe
import { AdminReCore } from '../core/core.component';
import { MenuItemsMainComponent } from '../modules/menuItems/main.component';


// import template from './alpha.component.html';

@Component({
    selector: 'alpha',
    templateUrl: 'app/alpha/alpha.component.html',
    directives: [MenuItemsMainComponent],
})
export class AlphaComponent extends AdminReCore {

    constructor() {
        super();

    }

    ngOnInit() {
        console.log("I'm being called when component is initalized after constructor method in AlphaComponent in alpha.component.ts");
    }
}

    // templateUrl: 'app/alpha.component.html'