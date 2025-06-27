import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';

export const routes: Routes = [{ path: '', component: HomeComponent},
  { path: 'faq', component: FAQComponent },

 ];
