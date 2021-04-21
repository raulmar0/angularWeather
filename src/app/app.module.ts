import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { HighlightDirective } from './app-highlight.directive';
import { AppNotDirective } from './app-not.directive'
import { RevealDirective } from './app-reveal.directive'

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    HighlightDirective,
    AppNotDirective,
    RevealDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
