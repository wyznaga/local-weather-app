import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { ICurrentWeather } from '../interfaces'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000, // JS needs milliseconds; server returns seconds; hence *1000
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }
  private convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * (9.0 / 5.0) - 459.67 // subtraction necessary to get to 32 degrees
  }
  constructor(private httpClient: HttpClient) {}
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}/weather?q=${city},${country}&appId=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)))
  }
}
