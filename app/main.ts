import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProvider } from './app.routes';

bootstrap(AppComponent, [
  appRouterProvider
])
.catch(err => console.log(err));
