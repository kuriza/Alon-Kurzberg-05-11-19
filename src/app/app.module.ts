import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Http,HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';



//import { LoginService } from '../login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './components/weather/weather.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import { TempServiceService } from './services/temp-service.service';
import {WeatherService} from './services/weather.service';

const appRoutes:Routes =
[
  {path:'', component: WeatherComponent},
  {path:'favorites', component: FavoritesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
