import { Component, EventEmitter} from '@angular/core';



// AdminRe
import { AdminReCore } from '../../core/core.component';
import { AlphaComponent } from '../../alpha/alpha.component';

@Component({
    selector: 'stage',
    template: '<h1>StageComponent 1</h1>'
})
export class StageComponent extends AdminReCore {

    // Events
    MenuItemRequestChanged: EventEmitter<any> = new EventEmitter();

    constructor() {
        super();


        this.MenuItemRequestChanged.subscribe((args: any) => {

            console.log("MenuItemRequestChanged fired: " + args)

            // zone.run(() => { // Change the property within the zone, CD will run after

            // });

        });
    }

    ngOnInit() {
        console.log("I'm being called when component is initalized after constructor method in StageComponent in stage.component.ts");

    }
}
