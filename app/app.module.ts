import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QouteService } from './qoute.service';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes.component';
import { QouteDetailComponent } from './qoute-detail.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    QoutesComponent,
    QouteDetailComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    QouteService,
  ]
})
export class AppModule { }
