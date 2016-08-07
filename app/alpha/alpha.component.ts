import { Component} from '@angular/core';



// AdminRe
import { AdminReCore } from '../core/core.component';
import { MenuItemsMainComponent } from '../modules/menuItems/menuItems.component';
import { StageComponent } from '../modules/stage/stage.component';
import { ComponentA } from '../component-a/component-a.component';
import { ComponentB } from '../component-b/component-b.component';

// import template from './alpha.component.html';

@Component({
    selector: 'alpha',
    templateUrl: 'app/alpha/alpha.component.html',
    directives: [MenuItemsMainComponent, StageComponent, ComponentA, ComponentB],
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