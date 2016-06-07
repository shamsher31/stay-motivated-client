import { Component } from '@angular/core';

@Component({
  selector: 'qoutes-app',
  template: `
    <p>{{title}}</p>
    <p>{{author}}</p>`
})

export class AppComponent {
  title = 'Love what you do, Do what you love.';
  author = 'Steve Jobs';
} 