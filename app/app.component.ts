import { Component } from '@angular/core';
import { QouteService} from './qoute.service';
import { QoutesComponent} from './qoutes.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <router-outlet></router-outlet>
    <qoutes-app></qoutes-app>
    
  `,
  directives: [QoutesComponent, ROUTER_DIRECTIVES ],
  providers: [QouteService]
})
export class AppComponent {
  title = 'List of Qoutes';
}
