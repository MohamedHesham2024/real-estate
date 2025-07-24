
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

 constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ar', 'fr', 'pt']);
    const savedLang = localStorage.getItem('lang') || 'en';
    this.setLanguage(savedLang);
  }

 setLanguage(lang: string) {
  localStorage.setItem('lang', lang);
  this.translate.use(lang);

 
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;


  document.body.classList.remove('rtl', 'ltr');
  document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
}

  get currentLang() {
    return this.translate.currentLang;
  }

  get availableLangs() {
    return this.translate.getLangs();
  }
}
