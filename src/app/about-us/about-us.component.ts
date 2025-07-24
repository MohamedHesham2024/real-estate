import { Component } from '@angular/core';
import { AnalysisComponent } from '../sheard/analysis/analysis.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  imports: [AnalysisComponent,TranslateModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
