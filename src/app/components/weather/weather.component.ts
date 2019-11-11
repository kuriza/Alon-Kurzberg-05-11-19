import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import {OneDay} from '../../classes/one-day';
import { City } from '../../classes/city';
import { Key } from 'protractor';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  fiveDays:Array<OneDay>=new Array<OneDay>();
  
  isFahrenheit :boolean = true; 
  temperatureAtCelsius:number;

  w: WeatherService;
  f:FileReader

  public now: Date = new Date();
  day1:string;
  public day2:string;
  public day3:string;
  public day4:string;
  public day5:string;
  nowNumber:number;
  

   weekday:Array<string> = new Array<string>();
   


  constructor(private router:Router, private weatherService:WeatherService) { 
    this.weekday[0] = 'Sunday';
    this.weekday[1] = 'Monday';
    this.weekday[2] = 'Tuesday';
    this.weekday[3] = 'Wednesday';
    this.weekday[4] = 'Thursday';
    this.weekday[5] = 'Friday';
    this.weekday[6] = 'Saturday';

    setInterval(() => {
      this.now = new Date();
    });
    
    this.day1= this.weekday[(this.now.getDay())%7]; 
    this.day2= this.weekday[(this.now.getDay()+1)%7]; 
    this.day3= this.weekday[(this.now.getDay()+2)%7]; 
    this.day4= this.weekday[(this.now.getDay()+3)%7]; 
    this.day5= this.weekday[(this.now.getDay()+4)%7];      
    
    this.w = weatherService;  
  }

  weather:any;
  

  addToFavorites(){
    
    let c = new City();
    c.name = this.w.tempCityDetailsForFavorites.name;
    c.code = this.w.tempCityDetailsForFavorites.code;
    this.w.cities.push(c)
    
  }

  moveToFavorites(){
    this.router.navigateByUrl('/favorites');
  }

  

  ngOnInit() {
    this.w.tempCityDetailsForFavorites.name = '';
    this.w.tempCityDetailsForFavorites.code = '';

    this.w.isCelsius = true;
    //this.w.showFavoriteConfig(this.w.defaultCity.code);

  }

}
