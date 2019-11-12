import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {City} from '../classes/city';
import { HttpParameterCodec } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators'
import { Router } from '@angular/router';


export interface Weather2 {
  DailyForecasts: DailyForecast1;
  Headline: any;
}
 interface DailyForecast1 {
  Date: any;
  Day: any;
  Link?: any;
}

export interface CityDetails {
  headers:any
  ok:any
  status:any
  statusText:any
  type:any
  url:any
  _body: any
  __proto:any
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cities:Array<City> = new Array<City>();

  apiKey= 'yC3Cj5ToIR1x0RCHI38AJdzznLupzrFt'; 
  getCodeUrl='https://dataservice.accuweather.com/locations/v1/search?q=';
  getWeatherUrl='https://dataservice.accuweather.com/forecasts/v1/daily/5day/';

  
  tempCityDetailsForFavorites:City = new City();
  
  //weather: Weather2;
  dailyForecast: any[];
  oneDayJson:any[];
  oneDayDetails:any;
  __body:any; 
  //key:string;
  
  showAddToFavoritesBtn:boolean = false;
  showAllFavorites:boolean = false;
  incorrectCityName:boolean = false;
  isCelsius :boolean = false; 
  defaultCity:City = new City();
  constructor(private http:HttpClient, private router:Router) { 
    this.defaultCity.code= '215854';
    this.defaultCity.name = 'tel aviv';
    this.cities.push(this.defaultCity);
  }

  changeDefaultCity(){
    this.defaultCity.code = this.tempCityDetailsForFavorites.code;
    this.defaultCity.name = this.tempCityDetailsForFavorites.name;
  }

  getConfig(code:string) {
    if(this.isCelsius){
      return this.http.get<Weather2>(this.getWeatherUrl + code + '?apikey=' + this.apiKey +'&metric=true');
    }
    else
      return this.http.get<Weather2>(this.getWeatherUrl + code + '?apikey=' + this.apiKey);
  }

showConfig(code:string) {
    this.getConfig(code).pipe(
        map(res => res.DailyForecasts)
        )
      .subscribe( (data: any) => {
        this.showAddToFavoritesBtn = true;
        this.dailyForecast = data;
        //this.oneDayDetails = this.dailyForecast[0]
      }
      
      );
  }

  getCityConfig(name:string) {
    return this.http.get<CityDetails>(this.getCodeUrl + name + '&apikey=' + this.apiKey);
  }

showCityConfig(name:string) {
  //console.log(this.url + name + '&apikey=' + this.apiKey);
    this.getCityConfig(name)
      .subscribe( (data: any) => {
        this.__body = data
        if(this.__body && this.__body[0] && this.__body[0].Key){

        this.incorrectCityName = false;
        this.tempCityDetailsForFavorites.name =name;
        this.tempCityDetailsForFavorites.code = this.__body[0].Key,
        this.showConfig(this.__body[0].Key)
      }
      else
        this.incorrectCityName = true;        
      }
        ,
        (err) => {console.log("api faild")
      });
  }

  addToFavorites(){
    let c:City = new City()
    c.name = this.tempCityDetailsForFavorites.name;
    c.code = this.tempCityDetailsForFavorites.code;
    this.cities.push(c);
    this.router.navigateByUrl('/favorites');
  }
  
  toggleCelsiusSwich(){
    this.isCelsius = !this.isCelsius;
  }

  changeFavoriteButton(){
    this.showAllFavorites = !this.showAllFavorites;
  }




  getFavoriteConfig(code:string) {
    if(this.isCelsius){
      return this.http.get<Weather2>(this.getWeatherUrl + code + '?apikey=' + this.apiKey +'&metric=true');
    }
    else
      return this.http.get<Weather2>(this.getWeatherUrl + code + '?apikey=' + this.apiKey);
  }

showFavoriteConfig(code:string) {
  
    this.getFavoriteConfig(code).pipe(
        map(res => res.DailyForecasts)
        )
        
      .subscribe( (data: any) => {
        this.showAllFavorites = true;
        this.oneDayJson = data;
        this.oneDayDetails = this.oneDayJson[0]
        this.isCelsius = false;
      }
      
      );
  }

  removeFromFavorites(name:string){
    for(let i = 0; i < this.cities.length; i++)
    {
      if( this.cities[i].name == name )
        {
          this.cities.splice(i,1);
        }
    }
   }
}