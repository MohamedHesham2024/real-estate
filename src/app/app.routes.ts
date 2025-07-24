import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SobhaComponent } from './sobha/sobha.component';
import { DamacComponent } from './damac/damac.component';
import { MeraasComponent } from './meraas/meraas.component';
import { EmaarComponent } from './emaar/emaar.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { SecondaryListingComponent } from './secondary-listing/secondary-listing.component';
import { SecondaryListingDetailsComponent } from './secondary-listing-details/secondary-listing-details.component';

export const routes: Routes = [{ path: '', component: HomeComponent},
  { path: 'faq', component: FAQComponent },
  { path: 'about', component: AboutUsComponent },
   { path: 'secondary-listing', component:SecondaryListingComponent  },
  { path: 'contact', component: ContactUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'developer/sobha', component: SobhaComponent },
  { path: 'developer/damac', component: DamacComponent },
  { path: 'developer/merass', component: MeraasComponent },
  { path: 'developer/emaar', component: EmaarComponent },
    { path: 'secondary-listing', component: SecondaryListingComponent },
  { path: 'details/:id', component: SecondaryListingDetailsComponent },
 ];
