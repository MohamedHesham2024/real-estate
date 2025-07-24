import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, ThemeToggleComponent, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 isMobileMenuOpen = false;
  isPropertiesMenuOpen = false;
  isDevMobileMenuOpen = false;
  isDevMenuOpen = false;
  toggledevMobileMenu(): void {
    this.isDevMobileMenuOpen = !this.isDevMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isDevMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      this.isDevMenuOpen = false;
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      this.isPropertiesMenuOpen = false;
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu(): void {
    this.isDevMobileMenuOpen = false;
    this.isDevMenuOpen = false;
    this.isMobileMenuOpen = false;
    this.isPropertiesMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  ngOnDestroy(): void {
    // Ensure body scroll is restored when component is destroyed
    document.body.style.overflow = 'auto';
  }
  togglePropertiesMenu() {
    this.isPropertiesMenuOpen = !this.isPropertiesMenuOpen;
  }
  toggledevPropertiesMenu() {
    this.isDevMenuOpen = !this.isDevMenuOpen;
  }
}
