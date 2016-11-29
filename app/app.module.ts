import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}  from './app.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './hero.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    AppComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
