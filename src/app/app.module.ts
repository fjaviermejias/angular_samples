import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { CalculatorService } from './services/calculator.service';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { ApodService } from './services/apod.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BeersComponent } from './components/beers/beers/beers.component';
import { BeersService } from './services/beers.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent,
    ApodComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule, HttpClientModule, YouTubePlayerModule
  ],
  providers: [HeroesService, CalculatorService, ApodService, BeersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
