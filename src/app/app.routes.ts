import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SobhaComponent } from './sobha/sobha.component';
import { DamacComponent } from './damac/damac.component';
import { MeraasComponent } from './meraas/meraas.component';
import { EmaarComponent } from './emaar/emaar.component';

export const routes: Routes = [{ path: '', component: HomeComponent},
  { path: 'faq', component: FAQComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'developer/sobha', component: SobhaComponent },
  { path: 'developer/damac', component: DamacComponent },
  { path: 'developer/meraas', component: MeraasComponent },
  { path: 'developer/emaar', component: EmaarComponent },
 ];
