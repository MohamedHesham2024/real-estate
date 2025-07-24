import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleService } from '../theme-toggle.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-slider',
  imports: [CommonModule,TranslateModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  currentImageIndex = 0;
  private intervalId: any;

  constructor(private themeService: ThemeToggleService) {}
  targetId: string = 'home-form'; // ID of the section to scroll to

  scrollToSection() {
    const section = document.getElementById(this.targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // 9 villa images - 3 for each slider
  images = [
    // First slider images (0-2)
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

    // Second slider images (3-5)
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',

    // Third slider images (6-8)
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
  ];

  // Method to get images for a specific slider
  getSliderImages(sliderIndex: number): string[] {
    const startIndex = sliderIndex * 3;
    return this.images.slice(startIndex, startIndex + 3);
  }

  // Method to get current image for a specific slider
  getCurrentImage(sliderIndex: number): string {
    const sliderImages = this.getSliderImages(sliderIndex);
    return sliderImages[this.currentImageIndex % sliderImages.length];
  }

  ngOnInit() {
    // Auto-advance carousel every 5 seconds
    this.startAutoAdvance();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % 3; // Only cycle through 3 images per slider
    this.resetAutoAdvance();
  }

  previousImage() {
    this.currentImageIndex =
      this.currentImageIndex === 0 ? 2 : this.currentImageIndex - 1;
    this.resetAutoAdvance();
  }

  onLearnMore() {
    // Implement your learn more functionality
    console.log('Learn more clicked');
    // Example: this.router.navigate(['/villa-details']);
  }

  private startAutoAdvance() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % 3; // Only cycle through 3 images per slider
    }, 5000);
  }

  private resetAutoAdvance() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAutoAdvance();
  }
}
