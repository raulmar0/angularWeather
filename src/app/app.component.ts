import { Component } from '@angular/core';

@Component({
  selector: 'fr-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <fr-locations></fr-locations>
    </div>
   `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Components, one way data binding and directives';
}
