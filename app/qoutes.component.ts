import { Component, OnInit } from '@angular/core';
import { Qoute } from './qoute';
import { QouteDetailComponent } from './qoute-detail.component';
import { QouteService } from './qoute.service';

@Component({
  selector: 'qoutes-app',
  template: `
    <qoute-detail [qoute]="selectedQoute"></qoute-detail>
    <ul>
      <li *ngFor="let qoute of qoutes" (click)="onSelect(qoute)">
        <p>
          {{qoute.title}}
        </p>
        <p>{{qoute.author}}</p>
      </li>
    </ul>`
})

export class QoutesComponent implements OnInit {

  public qoutes: Qoute[];
  selectedQoute: Qoute;

  constructor(private qouteService: QouteService) {}

  getQoutes() {
    this.qouteService.getQoutes().then(qoutes => this.qoutes = qoutes);
  }

  ngOnInit() {
    this.getQoutes();
  }

  onSelect(qoute: Qoute) {
    this.selectedQoute = qoute;
  }
}
