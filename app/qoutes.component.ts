import { Component, OnInit } from '@angular/core';
import { Qoute } from './qoute';
import { QouteDetailComponent } from './qoute-detail.component';
import { QouteService } from './qoute.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'qoutes-app',
  template: `
    <qoute-detail [qoute]="selectedQoute"></qoute-detail>
    <ul>
      <li *ngFor="let qoute of qoutes" (click)="onSelect(qoute)">
        <p>
          <a routerLink="/qoutes" [queryParams]="{id: qoute.id}">
            {{qoute.title}}
          </a>
        </p>
        <p>{{qoute.author}}</p>
      </li>
    </ul>`,
    directives: [QouteDetailComponent, ROUTER_DIRECTIVES]
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
