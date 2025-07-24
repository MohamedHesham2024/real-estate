import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dreams',
  imports: [TranslateModule],
  templateUrl: './dreams.component.html',
  styleUrl: './dreams.component.css',
})
export class DreamsComponent {
  constructor(private router: Router) {}
  onGetInTouch(): void {
    // Handle get in touch action
    console.log('Get in touch clicked');
    // You can add navigation logic here
    this.router.navigate(['/contact']);
  }
  targetId: string = 'home-form'; // ID of the section to scroll to

  scrollToSection() {
    const section = document.getElementById(this.targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
