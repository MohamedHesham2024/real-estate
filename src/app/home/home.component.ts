import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { SliderComponent } from "../slider/slider.component";
import { LuxuryComponent } from "../luxury/luxury.component";
import { DreamsComponent } from "../dreams/dreams.component";
import { ClientsComponent } from "../clients/clients.component";
import { DiscoverComponent } from "../discover/discover.component";
import { AnalysisComponent } from "../sheard/analysis/analysis.component";
import { ContactModalComponent } from '../sheard/contact-modal/contact-modal.component';
import { ToastrService } from 'ngx-toastr';
import { SendDataService } from '../service/send-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,NavbarComponent, HeroComponent, SliderComponent, LuxuryComponent, DreamsComponent, ClientsComponent, DiscoverComponent, AnalysisComponent,ContactModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading = false;
isModalOpen = false;
constructor(
      private toastr: ToastrService,
      private sendDataService: SendDataService,

){}
 ngOnInit() {
    setTimeout(() => {
      this.isModalOpen = true;
    }, 3000);
  }

  openModal() {
    this.isModalOpen = true;
  }

  handleFormSubmit(data: any) {
     this.sendDataService.submitContactForm({...data,developer:"binghatti"}).subscribe({
        next: () => {
          this.isLoading = false;
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
