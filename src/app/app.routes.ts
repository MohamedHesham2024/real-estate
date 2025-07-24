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
import { ReviewPageComponent } from './review-page/review-page.component';
import { BINGHATTIComponent } from './binghatti/binghatti.component';
import { EscrowAccountComponent } from './escrow-account/escrow-account.component';
import { FreeholdVsLeaseholdComponent } from './freehold-vs-leasehold/freehold-vs-leasehold.component';
import { TaxFreeComponent } from './tax-free/tax-free.component';
import { OqoodSystemComponent } from './oqood-system/oqood-system.component';
import { TopAreasComponent } from './top-areas/top-areas.component';
import { HighestTransactionAreasComponent } from './highest-transaction-areas/highest-transaction-areas.component';
import { PrimaryVsSecondaryMarketComponent } from './primary-vs-secondary-market/primary-vs-secondary-market.component';

export const routes: Routes = [{ path: '', component: HomeComponent},
  { path: 'faq', component: FAQComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'review', component: ReviewPageComponent },

  { path: 'developer/sobha', component: SobhaComponent },
  { path: 'developer/damac', component: DamacComponent },
  { path: 'developer/merass', component: MeraasComponent },
  { path: 'developer/emaar', component: EmaarComponent },
  { path: 'developer/binghatti', component: BINGHATTIComponent },

  { path: 'properties/escrow-account', component: EscrowAccountComponent },
  { path: 'properties/freehold-vs-leasehold', component: FreeholdVsLeaseholdComponent },
  { path: 'properties/tax-free', component: TaxFreeComponent },
  { path: 'properties/oqood-system', component: OqoodSystemComponent },
  { path: 'properties/top-areas', component: TopAreasComponent },
  { path: 'properties/highest-transaction-areas', component: HighestTransactionAreasComponent },
  { path: 'properties/primary-vs-secondary', component: PrimaryVsSecondaryMarketComponent },



 ];
