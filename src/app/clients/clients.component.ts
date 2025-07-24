import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  translate = inject(TranslateService);
  langSub!: Subscription;

  ngOnInit() {
    this.loadTestimonials();

    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });
  }

  loadTestimonials() {
    this.translate.get('testimonials').subscribe((translated: Testimonial[]) => {
      if (Array.isArray(translated)) {
        this.testimonials = translated;
      } else {
        console.warn('Translation key "testimonials" is not an array');
        this.testimonials = [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
