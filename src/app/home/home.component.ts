import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { SliderComponent } from "../slider/slider.component";
import { LuxuryComponent } from "../luxury/luxury.component";
import { DreamsComponent } from "../dreams/dreams.component";
import { ClientsComponent } from "../clients/clients.component";
import { DiscoverComponent } from "../discover/discover.component";
import { AnalysisComponent } from "../sheard/analysis/analysis.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, SliderComponent, LuxuryComponent, DreamsComponent, ClientsComponent, DiscoverComponent, AnalysisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
