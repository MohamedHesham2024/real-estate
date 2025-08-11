import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../sheard/button/button.component';
import {  CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SendDataService } from '../service/send-data.service';
import { ToastrService } from 'ngx-toastr';
import { ThemeToggleService } from '../theme-toggle.service';
import { ActivatedRoute } from '@angular/router';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ContactModalComponent } from '../sheard/contact-modal/contact-modal.component';
@Component({
  selector: 'app-sobha',
  imports: [CommonModule,ButtonComponent,NgIf,NgFor, ReactiveFormsModule, HttpClientModule,LetterByLetterPipe,TranslateModule,ContactModalComponent],
  templateUrl: './sobha.component.html',
  styleUrl: './sobha.component.css'
})
export class SobhaComponent {
 currentSlide: number = 0;
  currentThumbPage: number = 0;
  isMobile: boolean = false;
  contactForm: FormGroup;
  isLoading = false;
  submitSuccess = false;
  submitError = '';
  slides = [0, 1, 2];
  slideInterval: any;
 currentSlide2: number = 0;
isModalOpen = false;
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private sendDataService: SendDataService,private toastr: ToastrService,private themeService: ThemeToggleService) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
      property: ['']

    });
  }
  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const scrollToElement = () => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            setTimeout(scrollToElement, 100);
          }
        };
        setTimeout(scrollToElement, 100);
      }
    });
  }

  // Touch handling
  private touchStartX: number | null = null;
  private touchEndX: number | null = null;
  private minSwipeDistance: number = 50;
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
  images: any[] = [
    {
      full: '/sobha/Screenshot 2025-06-26 115109.jpg',
      thumb: '/sobha/Screenshot 2025-06-26 115109.jpg',
      alt: 'Image 1'
    },
    {
      full: '/sobha/Screenshot 2025-06-26 114804.jpg',
      thumb: '/sobha/Screenshot 2025-06-26 114804.jpg',
      alt: 'Image 2'
    },
    {
      full: '/sobha/Screenshot 2025-06-26 114614.jpg',
      thumb: '/sobha/Screenshot 2025-06-26 114614.jpg',
      alt: 'Image 3'
    },
    {
      full: '/sobha/Screenshot 2025-06-26 114539.jpg',
      thumb: '/sobha/Screenshot 2025-06-26 114539.jpg',
      alt: 'Image 4'
    },

  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile();

  }
logoSrc = '';
  ngOnInit() {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.logoSrc = isDark
        ? '/sobha/sobha white.png'
        : '/sobha/sobha black.png';
    });

    this.checkMobile();
    this.startSlider();
    this.startAutoAdvance();
  setTimeout(() => {
      this.isModalOpen = true;
    }, 3000);
  }

  private checkMobile() {
    this.isMobile = window.innerWidth < 576;
  }

  get thumbsPerPage(): number {
    return this.isMobile ? 3 : 6;
  }

  get totalThumbPages(): number {
    return Math.ceil(this.images.length / this.thumbsPerPage);
  }

  get currentThumbImages(): any[] {
    const start = this.currentThumbPage * this.thumbsPerPage;
    const end = start + this.thumbsPerPage;
    return this.images.slice(start, end);
  }

  get showThumbNavigation(): boolean {
    return this.totalThumbPages > 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.updateThumbPage();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.updateThumbPage();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateThumbPage();
  }

  nextThumbPage() {
    this.currentThumbPage = (this.currentThumbPage + 1) % this.totalThumbPages;
  }

  prevThumbPage() {
    this.currentThumbPage = (this.currentThumbPage - 1 + this.totalThumbPages) % this.totalThumbPages;
  }

  private updateThumbPage() {
    const requiredPage = Math.floor(this.currentSlide / this.thumbsPerPage);
    if (requiredPage !== this.currentThumbPage) {
      this.currentThumbPage = requiredPage;
    }
  }

  isThumbSelected(index: number): boolean {
    return this.currentSlide === index;
  }

  getThumbIndex(pageIndex: number, imageIndex: number): number {
    return pageIndex * this.thumbsPerPage + imageIndex;
  }

  // Touch event handlers
  onTouchStart(event: TouchEvent) {
    this.touchEndX = null;
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.touchStartX || !this.touchEndX) return;

    const distance = this.touchStartX - this.touchEndX;
    const isLeftSwipe = distance > this.minSwipeDistance;
    const isRightSwipe = distance < -this.minSwipeDistance;

    if (isLeftSwipe) {
      this.nextSlide();
    } else if (isRightSwipe) {
      this.prevSlide();
    }
  }

  onImageClick(image: any) {
    // Implement lightbox functionality here
    console.log('Open lightbox for image:', image.full);
  }

  getMainTransform(): string {
    const rtl = document.documentElement.dir === 'rtl';
    return rtl?`translateX(${this.currentSlide * 100}%)`:`translateX(-${this.currentSlide * 100}%)`;
  }

  getThumbTransform(): string {
    return `translateX(-${this.currentThumbPage * 100}%)`;
  }


  startSlider() {
    this.slideInterval = setInterval(() => {
      this.currentSlide2 = (this.currentSlide2 + 1) % this.slides.length;
    }, 4000);
  }

  goToSlide2(index: number) {
    this.currentSlide2 = index;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.submitSuccess = false;
      this.submitError = '';
      this.sendDataService.submitContactForm({...this.contactForm.value,developer:"sobha"}).subscribe({
        next: () => {
          this.isLoading = false;
          this.contactForm.reset();
          this.toastr.success('Form submitted successfully!', 'Success');
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Form submission error:', error);
          this.toastr.error('There was an error submitting the form. Please try again.', 'Error');
        }
      });
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
   currentImageIndex = 0;
  private intervalId: any;

  // Add your villa images here
  images2 = [
    '/sobha/Screenshot 2025-06-26 115109.jpg',
    '/sobha/Screenshot 2025-06-26 114804.jpg',
    '/sobha/Screenshot 2025-06-26 114614.jpg',
    '/sobha/Screenshot 2025-06-26 114539.jpg',
  ];



  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images2.length;
    this.resetAutoAdvance();
  }

  previousImage() {
    this.currentImageIndex = this.currentImageIndex === 0 ?
      this.images2.length - 1 : this.currentImageIndex - 1;
    this.resetAutoAdvance();
  }

  onLearnMore() {
    // Implement your learn more functionality
    console.log('Learn more clicked');
    // Example: this.router.navigate(['/villa-details']);
  }

  private startAutoAdvance() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images2.length;
    }, 5000);
  }

  private resetAutoAdvance() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAutoAdvance();
  }

// isModalOpen = true;

  openModal() {
    this.isModalOpen = true;
  }

  handleFormSubmit(data: any) {
     this.sendDataService.submitContactForm({...data,developer:"sobha"}).subscribe({
        next: () => {
          this.isLoading = false;
          this.contactForm.reset();
          this.toastr.success('Form submitted successfully!', 'Success');
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Form submission error:', error);
          this.toastr.error('There was an error submitting the form. Please try again.', 'Error');
        }
      });
    this.isModalOpen = false;
  }

  handleCloseModal() {
     this.isModalOpen = false;
  }
}
