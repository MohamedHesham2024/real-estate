import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-top-areas',
  imports: [
    CommonModule,
    LetterByLetterPipe,
    TranslateModule,
  ],
  templateUrl: './top-areas.component.html',
  styleUrl: './top-areas.component.css'
})
export class TopAreasComponent {

}
