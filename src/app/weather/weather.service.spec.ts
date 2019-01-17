import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '../material.module'
import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, NoopAnimationsModule],
    })
  )

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService)
    expect(service).toBeTruthy()
  })
})
