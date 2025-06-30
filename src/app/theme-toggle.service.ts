import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor() {
      console.log('[ThemeService] constructor');
     setTimeout(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log('[ThemeService] savedTheme =', savedTheme);
    console.log('[ThemeService] prefersDark =', prefersDark);
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }, 0);
  }

  toggleTheme(): void {
    if (this.isDarkMode.value) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode(): void {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkMode.next(true);
    console.log('[ThemeService] Dark mode enabled');
  }

  enableLightMode(): void {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.isDarkMode.next(false);
    console.log('[ThemeService] Light mode enabled');
  }

  getCurrentTheme(): boolean {
    return this.isDarkMode.value;
  }
}
