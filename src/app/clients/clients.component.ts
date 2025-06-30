import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
@Component({
  selector: 'app-clients',
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
testimonials: Testimonial[] = [
    {
      quote: "I was new to the Dubai property market, and H&B Elite Properties made the entire buying process easy and stress-free. Their team was knowledgeable, attentive, and helped me find my dream home in no time. I couldn't be happier!",
      name: "Sarah L.",
      role: "Homeowner"
    },
    {
      quote: "From the moment I contacted H&B Elite Properties, I felt confident in their abilities. They understood exactly what I was looking for in a rental property and handled everything with professionalism. Highly recommended!",
      name: "Ahmed R.",
      role: "Tenant"
    },
    {
      quote: "I wanted to diversify my investment portfolio and H&B Elite Properties guided me through the process of buying a commercial property in Dubai. Their market knowledge is invaluable. I've already seen great returns on my investment!",
      name: "Abdul J.",
      role: "Business Owner"
    }
  ];
}
