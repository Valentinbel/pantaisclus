import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantaistvComponent } from './views/pantaistv/pantaistv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NonantaComponent } from './views/nonanta/nonanta.component';

@NgModule({
  declarations: [
    AppComponent,
    PantaistvComponent,
    NonantaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
