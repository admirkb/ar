import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AlphaComponent } from './alpha/alpha.component';
import { LoggedService } from './z-services/loggedService'

bootstrap(AlphaComponent, [
  LoggedService
]);
