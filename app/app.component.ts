import { Component } from '@angular/core';
import { QouteService} from './qoute.service';
import { QoutesComponent} from './qoutes.component';

@Component({
  selector: 'my-app',
  template: `
    <h3>{{title}}</h3>
    <qoutes-app></qoutes-app>
  `
})
export class AppComponent {
  title = 'List of Qoutes';
}
