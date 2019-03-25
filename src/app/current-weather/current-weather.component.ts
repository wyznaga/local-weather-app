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
    // this.current = {
    //   city: '',
    //   country: '',
    //   date: 0,
    //   image: '',
    //   temperature: 0,
    //   description: '',
    // } as ICurrentWeather
  }

  ngOnInit() {
    this.weatherService.currentWeather.subscribe(data => (this.current = data))
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}
