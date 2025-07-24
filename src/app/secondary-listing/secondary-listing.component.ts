import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { ItemCardComponent } from '../item-card/item-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { SecondaryListingService } from '../services/secondary-listing.service';

export interface MediaItem {
  index: number;
 file_link: string
  file_type: string;
}
export interface ListingItem {
  _id: string;
  name: string;
  header: string;
  description: string;
  price: number;
  mobile: string;
  media: MediaItem[];
}
@Component({
  selector: 'app-secondary-listing',
  imports: [CommonModule, LetterByLetterPipe, ItemCardComponent,TranslateModule],
  templateUrl: './secondary-listing.component.html',
  styleUrl: './secondary-listing.component.css'
})
export class SecondaryListingComponent {
items: ListingItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number = 1;
listings: ListingItem[] = [];
  constructor(private listingService: SecondaryListingService) {}

  ngOnInit() {

    this.loadItems();

  }

  loadItems() {
    // Sample data - replace with your actual data service
      this.listingService.getSecondaryListings().subscribe({
      next: (data) => {
        this.listings = data;
        console.log('Listings:', data);
         this.items =this.listings;
     console.log('Listings22222222222:',this.items);
      this.calculateTotalPages();
      },
      error: (err) => {
        console.error('Error fetching listings:', err);
      }
    });

  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
  }

  getCurrentPageItems(): ListingItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  getEndIndex(): number {
    return Math.min(this.getStartIndex() + this.itemsPerPage, this.items.length);
  }
}
