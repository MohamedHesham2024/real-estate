import { Component, ElementRef, HostListener } from '@angular/core';
import { LanguageService } from '../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-language-switcher',
  imports: [TranslateModule, CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
 constructor(public languageService: LanguageService,private elementRef: ElementRef) {}

  // onLangChange(event: Event) {
  //   const select = event.target as HTMLSelectElement;
  //   this.languageService.setLanguage(select.value);
  // }
 dropdownOpen = false;
 toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLang(lang: string) {
    this.languageService.setLanguage(lang);
    this.dropdownOpen = false;
  }

  getLangLabel(lang: string): string {
    const labels: { [key: string]: string } = {
      en: 'EN',
      fr: 'FR',
      ar: 'AR ',
      pt: 'PT',
    };
    return labels[lang] || lang.toUpperCase();
  }
    @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

}
