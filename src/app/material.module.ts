import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material'
import 'hammerjs'

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
