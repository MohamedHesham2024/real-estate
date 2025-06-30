import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';

export const routes: Routes = [{ path: '', component: HomeComponent},
  { path: 'faq', component: FAQComponent },
//  { path: 'developer/sobha', component: SobhaComponent }, 
//   { path: 'developer/emaar', component: EmaarComponent },
//   { path: 'developer/damac', component: DamacComponent },
//   { path: 'developer/merass', component: MerassComponent },
 ];
