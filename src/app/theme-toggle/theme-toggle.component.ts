import { Component } from '@angular/core';
import { ThemeToggleService } from '../theme-toggle.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
 isDarkMode$: Observable<boolean>;

  constructor(private themeService: ThemeToggleService) {
    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
