import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
     // app-counter is an Angular component, this way we say is part of the module. previous error> If 'app-counter' is an Angular component, then verify that it is part of this module.
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
