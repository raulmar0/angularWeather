import { Component } from '@angular/core';

@Component({
  selector: 'fr-root',
  template: `
    <div>
      <h1>{{title}}</h1>
      <h1 appHighlight> test custom attribute directive </h1>
      <h1 *appNot="true">True</h1><h1 *appNot="false">False</h1>
      <div class="testing">This is a test</div>
      <fr-locations></fr-locations>
      
      <div class="card" id="cardReveal">
        <div class="card-header">
          <div>Featured</div>
          <div id="Close">Close</div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components, one way data binding and directives';
}
