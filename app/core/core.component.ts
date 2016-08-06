// import 'reflect-metadata';
// import 'zone.js/dist/zone';

// Angular
import {Component, EventEmitter, OnInit} from '@angular/core';

// AdminRe

@Component({
})
export class AdminReCore implements OnInit {
    protected _today: Date = new Date();
    protected _testValue = "Test Value"

    constructor() {

    }

    ngOnInit() {
        console.log("I'm being called when component is initalized after constructor method in AdminReCore in core.component.ts");
    }


    protected get isLoggedIn(): boolean {
        return false;
    }
    protected get currentUser(): any {
        return "M00078995";
    }

    protected get getTestValue(): any {
        return this._testValue;
    }

    protected get getToday(): any {
        return this._today;
    }
}

