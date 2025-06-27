import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FAQComponent {
  faqs = [
    {
      id: 1,
      question: 'What services does H&B Elite Properties provide?',
      answer:
        'We provide a wide range of real estate services including sales, leasing, and property management.',
      open: false,
    },
    {
      id: 2,
      question: 'Why should I invest in Dubai real estate?',
      answer:
        'Dubai offers high rental yields, tax-free income, and a stable real estate market.',
      open: false,
    },
    {
      id: 3,
      question: 'How can I start the process of buying a property in Dubai?',
      answer:
        'Start by contacting one of our agents. We will guide you through every step.',
      open: false,
    },
    {
      id: 4,
      question: 'Can foreigners buy property in Dubai?',
      answer:
        'Yes, foreigners can buy freehold properties in designated areas.',
      open: false,
    },
    {
      id: 5,
      question: 'What are the benefits of working with H&B Elite Properties?',
      answer:
        'We offer expert knowledge, integrity, and a commitment to client satisfaction.',
      open: false,
    },
    {
      id: 6,
      question: 'How do I sell my property through H&B Elite Properties?',
      answer:
        'Simply reach out to our sales team and we’ll guide you through listing and marketing.',
      open: false,
    },
    {
      id: 7,
      question: 'What is the process for renting a property in Dubai?',
      answer:
        'Our team will help you search, view, and sign rental agreements with ease.',
      open: false,
    },
    {
      id: 8,
      question: 'How do property valuations work?',
      answer:
        'Valuations are based on market trends, property condition, and location.',
      open: false,
    },
  ];

  toggle(selectedItem: any) {
    if (selectedItem.open) {
      selectedItem.open = false;
    } else {
      this.faqs.forEach((item) => (item.open = false));
      selectedItem.open = true;
    }
  }
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
