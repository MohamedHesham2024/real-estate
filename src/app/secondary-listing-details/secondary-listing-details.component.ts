
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingItem } from '../secondary-listing/secondary-listing.component';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
import { LanguageService } from '../language.service';
import { TranslateModule } from '@ngx-translate/core';
import { SecondaryListingService } from '../services/secondary-listing.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SendDataService } from '../service/send-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-secondary-listing-details',
  imports: [CommonModule,LetterByLetterPipe,TranslateModule,ReactiveFormsModule],
templateUrl: './secondary-listing-details.component.html',
  styleUrl: './secondary-listing-details.component.css'
})
export class SecondaryListingDetailsComponent {
 item: ListingItem | null = null;
  hasValidImage: boolean[] = [];
  listings: ListingItem[] = [];
sampleItems: ListingItem[] = [];
images:any;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ,public languageService: LanguageService,
    private listingService: SecondaryListingService,
    private fb: FormBuilder,
    private sendDataService: SendDataService,
    private toastr: ToastrService
  ) {
     this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
      property: ['']

    });
  }
scrollToSection() {
    const section = document.getElementById("crm-form");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadItemDetails(id);
    }
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
  images2 = [
    '/sobha/Screenshot 2025-06-26 115109.jpg',
    '/sobha/Screenshot 2025-06-26 114804.jpg',
    '/sobha/Screenshot 2025-06-26 114614.jpg',
    '/sobha/Screenshot 2025-06-26 114539.jpg',
  ];
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
  countries = [
  { name: "Egypt" },
  { name: "Saudi Arabia" },
  { name: "United Arab Emirates" },
  { name: "Qatar" },
  { name: "United Kingdom" },
  { name: "United States" },
];
   currentImageIndex = 0;
  submitError = '';
  submitSuccess = false;
  isLoading = false;
onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.submitSuccess = false;
      this.submitError = '';

      this.sendDataService.submitContactForm({...this.contactForm.value,developer:"secondary-listing"}).subscribe({
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
