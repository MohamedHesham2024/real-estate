import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-discover',
  imports: [TranslateModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
targetId: string = 'home-form'; // ID of the section to scroll to

  scrollToSection() {
    const section = document.getElementById(this.targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
