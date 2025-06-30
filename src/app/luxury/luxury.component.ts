import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Apartment {
  id: number;
  title: string;
  description: string;
  images: string[];
}
@Component({
  selector: 'app-luxury',
  imports: [CommonModule],
  templateUrl: './luxury.component.html',
  styleUrl: './luxury.component.css'
})
export class LuxuryComponent {
 showAll = false;
  currentImageIndex: { [key: number]: number } = {};

  apartments: Apartment[] = [
    {
      id: 1,
      title: 'Downtown Residences',
      description: 'Nestled in the vibrant heart of the city, these residences offer spacious layout with high-quality finishes and modern conveniences.',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'Skyline Luxury Apartments',
      description: 'These contemporary residences are designed with elegance and sophistication in mind, boasting spacious open layouts and floor-to-ceiling windows.',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'Lake-View Suites',
      description: 'These elegantly designed suites feature spacious interiors with modern finishes, large windows, and private balconies that invite the beauty.',
      images: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'Penthouse Collection',
      description: 'Exclusive penthouse units featuring panoramic city views, premium materials, and state-of-the-art amenities for the discerning resident.',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540518614846-7eded47432f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'Waterfront Estates',
      description: 'Sophisticated waterfront living with direct marina access, infinity pools, and unobstructed ocean views from every room.',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551298370-9c50423984a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'Urban Sanctuary',
      description: 'A peaceful retreat in the bustling city, featuring zen gardens, meditation spaces, and environmentally conscious design elements.',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  constructor() {
    // Initialize current image index for each apartment
    this.apartments.forEach(apartment => {
      this.currentImageIndex[apartment.id] = 0;
    });
  }

  getDisplayedApartments(): Apartment[] {
    return this.showAll ? this.apartments : this.apartments.slice(0, 3);
  }

  toggleView(): void {
    this.showAll = !this.showAll;
  }

  getCurrentImageIndex(apartmentId: number): number {
    return this.currentImageIndex[apartmentId] || 0;
  }

  nextImage(apartmentId: number): void {
    const apartment = this.apartments.find(apt => apt.id === apartmentId);
    if (apartment) {
      const currentIndex = this.getCurrentImageIndex(apartmentId);
      this.currentImageIndex[apartmentId] = (currentIndex + 1) % apartment.images.length;
    }
  }

  previousImage(apartmentId: number): void {
    const apartment = this.apartments.find(apt => apt.id === apartmentId);
    if (apartment) {
      const currentIndex = this.getCurrentImageIndex(apartmentId);
      this.currentImageIndex[apartmentId] = currentIndex === 0 ? apartment.images.length - 1 : currentIndex - 1;
    }
  }

  goToImage(apartmentId: number, imageIndex: number): void {
    this.currentImageIndex[apartmentId] = imageIndex;
  }

  getImageClass(apartmentId: number, imageIndex: number): string {
    const currentIndex = this.getCurrentImageIndex(apartmentId);
    if (imageIndex === currentIndex) {
      return 'opacity-100 scale-100';
    }
    return 'opacity-0 scale-105';
  }

  getIndicatorClass(apartmentId: number, imageIndex: number): string {
    const currentIndex = this.getCurrentImageIndex(apartmentId);
    if (imageIndex === currentIndex) {
      return 'bg-amber-500';
    }
    return 'bg-white/50 hover:bg-white/70';
  }
}
