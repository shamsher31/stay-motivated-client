import { provideRouter, RouterConfig} from '@angular/router';
import { QoutesComponent } from './qoutes.component';
import { QouteDetailComponent } from './qoute-detail.component';


const routes: RouterConfig = [
  { path: 'qoutes', component: QoutesComponent},
  { path: 'qoute/:id', component: QouteDetailComponent}
  // { path: '**', component: PageNotFoundComponent}
];

export const appRouterProvider = [
  provideRouter(routes)
];