import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tax-free',
  imports: [
    CommonModule,
    LetterByLetterPipe,
    TranslateModule,
  ],
  templateUrl: './tax-free.component.html',
  styleUrl: './tax-free.component.css'
})
export class TaxFreeComponent {

}
