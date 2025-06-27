import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FAQComponent } from './faq/faq.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FAQComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-estate';
}
