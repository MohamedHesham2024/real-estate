import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { WhatsAppComponent } from "./whats-app/whats-app.component";
import { FooterComponent } from "./footer/footer.component";
import { ThemeToggleService } from './theme-toggle.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, WhatsAppComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'real-estate';
   constructor(private themeService: ThemeToggleService) {
  console.log('[AppComponent] ThemeToggleService injected');
  }
}
