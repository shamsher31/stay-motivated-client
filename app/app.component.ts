import { Component } from '@angular/core';
import { Qoute } from './qoute';
import { QouteDetailComponent } from './qoute-detail.component';

@Component({
  selector: 'qoutes-app',
  template: `
    <qoute-detail [qoute]="selectedQoute"></qoute-detail>
    <ul>
      <li *ngFor="let qoute of qoutes" (click)="onSelect(qoute)">
        <p>{{qoute.title}}</p>
        <p>{{qoute.author}}</p>
      </li>
    </ul>`,
    directives: [QouteDetailComponent] 
})

export class AppComponent {
  public qoutes = QOUTES;
  selectedQoute: Qoute;
  onSelect(qoute: Qoute) {
    this.selectedQoute = qoute;
  }
}

var QOUTES: Qoute[] = [
  {
    title: 'Love what you do, Do what you love.',
    author: 'Steve Jobs'
  },
  {
    title: 'Work hard dream big.',
    author: 'Steve Jobs'
  },
  {
    title: 'Hardwork beats talent.',
    author: 'Steve Jobs'
  },
  {
    title: 'Life id too short to wait.',
    author: 'Steve Jobs'
  },
  {
    title: 'Never stop dreaming.',
    author: 'Steve Jobs'
  },
]