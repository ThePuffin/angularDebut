import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module'; //on ajout routingComponents et on enlève les autres composant inclu dans son array
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents //le tableau des différents composants nécessaires
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
