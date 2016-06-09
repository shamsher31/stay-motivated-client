import { Component, Input } from '@angular/core';
import { Qoute } from './qoute';

@Component({
  selector: 'qoute-detail',
  template: `
    <div *ngIf="qoute">
      <p>{{qoute.title}}</p>
      <p>{{qoute.author}}</p>
      <input [(ngModel)]="qoute.author">
    </div>`
})

export class QouteDetailComponent {  
  @Input()
  qoute: Qoute;
}