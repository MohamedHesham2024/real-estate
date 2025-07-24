import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-freehold-vs-leasehold',
  imports: [
    CommonModule,
    LetterByLetterPipe,
    TranslateModule,
  ],
  templateUrl: './freehold-vs-leasehold.component.html',
  styleUrl: './freehold-vs-leasehold.component.css'
})
export class FreeholdVsLeaseholdComponent {

}
