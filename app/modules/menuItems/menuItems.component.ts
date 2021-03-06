import { Component, EventEmitter} from '@angular/core';



// AdminRe
import { AdminReCore } from '../../core/core.component';
import { AlphaComponent } from '../../alpha/alpha.component';

@Component({
    selector: 'menu-items',
    template: '<h1>MenuItemsMainComponent 1</h1>'
})
export class MenuItemsMainComponent extends AdminReCore {

    // Events
    MenuItemRequestChanged: EventEmitter<any> = new EventEmitter();

    constructor() {
        super();


        this.MenuItemRequestChanged.subscribe((args : any) => {

            console.log("MenuItemRequestChanged fired: " + args)

            // zone.run(() => { // Change the property within the zone, CD will run after

            // });

        });
    }

    ngOnInit() {
        console.log("I'm being called when component is initalized after constructor method in MenuItemsMainComponent in main.component.ts");


        var b = new Object();
        b['time'] = new Date();
        this.MenuItemRequestChanged.emit(b)

    }
}
