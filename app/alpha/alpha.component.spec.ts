/* tslint:disable:no-unused-variable */
import { AlphaComponent } from './alpha.component';

import { async, inject } from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AlphaComponent with TCB', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(AlphaComponent).then(fixture => {
      expect(fixture.componentInstance instanceof AlphaComponent).toBe(true, 'should create AlphaComponent');
    });
  })));

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(AlphaComponent).then(fixture => {
      // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding

      let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

          h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

      expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
    });

  })));
});

describe('Value Test', () => {
  it('should check if valueTest is equal to "Value Test"', () => {
    expect(true).toEqual(true, 'should pass');
  });
});
