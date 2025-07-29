import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css',
})
export class ContactModalComponent {
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  contactForm: FormGroup;
  isLoading = false;

 mockProperties: any[] = [
    {
      id: 1,
      name: '1 Bedroom Apartment',
    },
    {
      id: 2,
      name: '2 Bedroom Apartment',

    },
    {
      id: 3,
      name: '3 Bedroom Apartment',
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
      property: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.formSubmitted.emit(this.contactForm.value);
        this.close.emit(); // close modal after submit
      }, 1000);
    }
  }

  closeModal() {
    this.close.emit();
  }
}
