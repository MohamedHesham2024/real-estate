import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-primary-vs-secondary-market',
  imports: [
    CommonModule,
    LetterByLetterPipe,
    TranslateModule,
  ],
  templateUrl: './primary-vs-secondary-market.component.html',
  styleUrl: './primary-vs-secondary-market.component.css'
})
export class PrimaryVsSecondaryMarketComponent {

}
