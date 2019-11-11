import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  constructor() { }
  weather = {
    "Headline": {
       "EffectiveDate": "2019-11-04T19:00:00+02:00",
       "EffectiveEpochDate": 1572886800,
       "Severity": 7,
       "Text": "Mild Monday night",
       "Category": "heat",
       "EndDate": "2019-11-05T07:00:00+02:00",
       "EndEpochDate": 1572930000,
       "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
       {
          "Date": "2019-11-04T07:00:00+02:00",
          "EpochDate": 1572843600,
          "Temperature": {
             "Minimum": {
                "Value": 64,
                "Unit": "F",
                "UnitType": 18
             },
             "Maximum": {
                "Value": 83,
                "Unit": "F",
                "UnitType": 18
             }
          },
          "Day": {
             "Icon": 1,
             "IconPhrase": "Sunny",
             "HasPrecipitation": false
          },
          "Night": {
             "Icon": 33,
             "IconPhrase": "Clear",
             "HasPrecipitation": false
          },
          "Sources": [
             "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
       },
       {
          "Date": "2019-11-05T07:00:00+02:00",
          "EpochDate": 1572930000,
          "Temperature": {
             "Minimum": {
                "Value": 65,
                "Unit": "F",
                "UnitType": 18
             },
             "Maximum": {
                "Value": 85,
                "Unit": "F",
                "UnitType": 18
             }
          },
          "Day": {
             "Icon": 1,
             "IconPhrase": "Sunny",
             "HasPrecipitation": false
          },
          "Night": {
             "Icon": 33,
             "IconPhrase": "Clear",
             "HasPrecipitation": false
          },
          "Sources": [
             "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
       },
       {
          "Date": "2019-11-06T07:00:00+02:00",
          "EpochDate": 1573016400,
          "Temperature": {
             "Minimum": {
                "Value": 66,
                "Unit": "F",
                "UnitType": 18
             },
             "Maximum": {
                "Value": 84,
                "Unit": "F",
                "UnitType": 18
             }
          },
          "Day": {
             "Icon": 1,
             "IconPhrase": "Sunny",
             "HasPrecipitation": false
          },
          "Night": {
             "Icon": 33,
             "IconPhrase": "Clear",
             "HasPrecipitation": false
          },
          "Sources": [
             "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
       },
       {
          "Date": "2019-11-07T07:00:00+02:00",
          "EpochDate": 1573102800,
          "Temperature": {
             "Minimum": {
                "Value": 68,
                "Unit": "F",
                "UnitType": 18
             },
             "Maximum": {
                "Value": 89,
                "Unit": "F",
                "UnitType": 18
             }
          },
          "Day": {
             "Icon": 1,
             "IconPhrase": "Sunny",
             "HasPrecipitation": false
          },
          "Night": {
             "Icon": 33,
             "IconPhrase": "Clear",
             "HasPrecipitation": false
          },
          "Sources": [
             "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
       },
       {
          "Date": "2019-11-08T07:00:00+02:00",
          "EpochDate": 1573189200,
          "Temperature": {
             "Minimum": {
                "Value": 66,
                "Unit": "F",
                "UnitType": 18
             },
             "Maximum": {
                "Value": 86,
                "Unit": "F",
                "UnitType": 18
             }
          },
          "Day": {
             "Icon": 1,
             "IconPhrase": "Sunny",
             "HasPrecipitation": false
          },
          "Night": {
             "Icon": 33,
             "IconPhrase": "Clear",
             "HasPrecipitation": false
          },
          "Sources": [
             "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
       }
    ]
 }

}
