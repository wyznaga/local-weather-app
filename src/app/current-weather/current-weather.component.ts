import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  // template: `
  //   <p>app-current-weather component works!</p>
  // `,
  styleUrls: ['./current-weather.component.css'],
  // styles: [''],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {
    // this.current = {
    //   city: 'Bethesda',
    //   country: 'US',
    //   date: new Date(),
    //   image: '../../assets/img/sunny_public-domain.png',
    //   temperature: 72,
    //   description: 'sunny',
    // } as ICurrentWeather
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Bethesda', 'US')
      .subscribe(data => (this.current = data))
  }
}
