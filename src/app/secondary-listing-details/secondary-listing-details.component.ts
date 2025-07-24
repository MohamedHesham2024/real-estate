
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingItem } from '../secondary-listing/secondary-listing.component';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { LanguageService } from '../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SecondaryListingService } from '../services/secondary-listing.service';

@Component({
  selector: 'app-secondary-listing-details',
  imports: [CommonModule,LetterByLetterPipe,TranslateModule],
templateUrl: './secondary-listing-details.component.html',
  styleUrl: './secondary-listing-details.component.css'
})
export class SecondaryListingDetailsComponent {
 item: ListingItem | null = null;
  hasValidImage: boolean[] = [];
  listings: ListingItem[] = [];
sampleItems: ListingItem[] = [];
images:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ,public languageService: LanguageService,
    private listingService: SecondaryListingService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadItemDetails(id);
    }
  }

  loadItemDetails(id: string) {
    // In a real app, you would fetch this from a service
    // For now, we'll simulate the data
         this.listingService.getSecondaryListings().subscribe({
      next: (data) => {
        this.listings = data;
        console.log('Listings:', data);
         console.log('this.sampleItems:', this.item);
           this.sampleItems= this.listings;
        this.item = this.sampleItems.find(item => item._id === id) || null;
             console.log('item:', this.item);
             this.images = this.item && this.item.media ? this.item.media.map(media => media.file_link) : [];
        console.log('images:', this.images);

      },
      error: (err) => {
        console.error('Error fetching listings:', err);
      }
    });

    if (this.item) {
      this.hasValidImage = new Array(this.item.media.length).fill(true);
    }
  }

  onImageError(event: any, index: number) {
    this.hasValidImage[index] = false;
  }

  goBack() {
    this.router.navigate(['/secondary-listing']);
  }



}
