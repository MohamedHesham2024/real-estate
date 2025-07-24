import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  imports: [ NgIf, NgFor,TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FAQComponent implements OnInit, OnDestroy {
  faqs: any[] = [];
  translate = inject(TranslateService);
  langSub!: Subscription;

  ngOnInit() {
    this.loadFaqs();

    // تحديث عند تغيير اللغة
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadFaqs();
    });
  }

  loadFaqs() {
    this.translate.get('faq').subscribe((translatedFaqs) => {
      if (Array.isArray(translatedFaqs)) {
        this.faqs = translatedFaqs.map((item, index) => ({
          id: index + 1,
          question: item.question,
          answer: item.answer,
          open: false,
        }));
      } else {
        console.warn('faq is not an array in translation file!');
      }
    });
  }

  toggle(selectedItem: any) {
    this.faqs.forEach((item) => (item.open = false));
    selectedItem.open = !selectedItem.open;
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
