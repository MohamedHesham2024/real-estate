import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-highest-transaction-areas',
  imports: [
    CommonModule,
    LetterByLetterPipe,
    TranslateModule,
  ],
  templateUrl: './highest-transaction-areas.component.html',
  styleUrl: './highest-transaction-areas.component.css'
})
export class HighestTransactionAreasComponent {

}
