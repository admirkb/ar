import { Component } from '@angular/core';
import { LoggedService } from '../z-services/loggedService';
import { Logged } from '../definitions/logged.d';

@Component({
  moduleId: module.id,
  selector: 'component-a',
  templateUrl: 'component-a.component.html',
  styleUrls: ['component-a.component.css']
})
export class ComponentA  {
  
  private logged: Logged = { email: '' };

  constructor(private ls: LoggedService) {}

  login(): void {
    console.info('Setting a logged user from Component A');
    this.ls.setLogged(this.logged);
  }

}
