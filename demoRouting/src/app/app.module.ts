import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
//on ajout routingComponents et on enlève les autres composant inclu dans son array



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//le tableau des différents composants nécessaires
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
