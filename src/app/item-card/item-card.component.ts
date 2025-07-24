import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ListingItem } from '../secondary-listing/secondary-listing.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-item-card',
  imports: [CommonModule,TranslateModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() item!: ListingItem;
  hasValidImage = true;

  constructor(private router: Router) {}

  getImageUrl(): string {
    if (this.item.media && this.item.media.length > 0) {
      const fileLink = this.item.media[0].file_link;
      return Array.isArray(fileLink) ? fileLink[0] : fileLink || '';
    }
    return '';
  }

  onImageError(event: any) {
    this.hasValidImage = false;
  }

  navigateToDetails() {
    this.router.navigate(['/details', this.item._id]);
  }
}
