import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-app',
  imports: [],
  templateUrl: './whats-app.component.html',
  styleUrl: './whats-app.component.css'
})
export class WhatsAppComponent {
phoneNumber = '+971505791507';
  message = 'Hello! How can i help you sir';
  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
  }
}
