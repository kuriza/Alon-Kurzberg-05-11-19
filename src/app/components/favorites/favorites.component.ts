import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {City} from '../../classes/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  weather: any;
  //dailyForecasts: any;
  

  constructor(private router:Router, public weatherService:WeatherService) {
    
   }

   moveToWeatherPage(){
     this.weatherService.showAddToFavoritesBtn = false;
    this.router.navigateByUrl('');
   }

   
  
  ngOnInit() {
    
  }

}
