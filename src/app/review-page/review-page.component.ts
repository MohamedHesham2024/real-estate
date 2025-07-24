import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';

@Component({
  selector: 'app-review-page',
  imports: [NgClass, NgFor, CommonModule, LetterByLetterPipe],
  templateUrl: './review-page.component.html',
  styleUrl: './review-page.component.css',
})
export class ReviewPageComponent {
  currentPage = 1;
  cardsPerPage = 12;

  reviews = [
    {
      id: 7,
      name: 'Khaled Kazaleh',
      rating: 4,
      comment:
        'H & B Elite Properties Real Estate stands out for its deep market knowledge, client-focused approach, and commitment to excellence. Their team provides clear, up-to-date insights into the dynamic Dubai real estate market, helping clients make well-informed decisions. A special thanks to Mr. Hassan, whose professionalism, strategic guidance, and exceptional communication made the entire experience seamless. His dedication to client satisfaction reflects the high standards of the company. Highly recommended for anyone seeking trusted, expert real estate services in Dubai.',
    },
    {
      id: 2,
      name: 'Mostafawi Ent',
      rating: 5,
      comment:
        'We had an excellent experience working with H&B Elite Properties in Dubai. Their team is professional, knowledgeable, and extremely helpful throughout the entire process. They listened to my needs and provided tailored property options that fit my budget and preferences perfectly. The communication was clear, and they made the entire buying process smooth and stress-free. We truly appreciate their attention to detail and commitment to customer satisfaction. I highly recommend H&B Elite Properties to anyone looking for reliable real estate services in Dubai!',
    },
    {
      id: 10,
      name: 'Neo',
      rating: 5,
      comment:
        "I had a fantastic experience working with Hassan Badawy for my property purchase in Dubai. From the very beginning, Hassan truly listened to what I was looking for. He didn't just show me properties; he understood my needs and preferences and consistently presented options that were exactly what I envisioned. Beyond just finding the right property, Hassan's advice was invaluable. He provided clear, honest, and well-informed guidance throughout the entire process.",
    },
    {
      id: 1,
      name: 'Oana Hozu',
      rating: 5,
      comment:
        'My experience with Omar was a very pleasant one considering that the viewing was done with my boyfriend and he kept in touch with both of us throughout the process. Although the price of the apartment was different from my budget, he was able to negotiate with the owner and give me the desired price. I am very satisfied with his services and will continue to work with him for the rental of the property.',
    },
    {
      id: 11,
      name: 'M G',
      rating: 5,
      comment:
        'Hassan Badawy is an exceptional agent. With him, you’re not just a client—you’re treated like family. Whether you’re local or abroad, Hassan goes above and beyond to find the perfect property for you. What can often be a confusing and stressful process, he makes seamless and straightforward. His dedication, integrity, and personalized care make all the difference.',
    },
    {
      id: 16,
      name: 'Tamires Bessa',
      rating: 5,
      comment:
        "I rented a property with Carla Simão in 2022, where I still live today. Carla was very attentive and polite, answering all my questions about the contract and other necessary documentation. I wasn't familiar with the city, and she guided me through the locations so I could expedite all the paperwork. She was available afterward to answer any questions.",
    },
    {
      id: 9,
      name: 'Dina Darwish',
      rating: 5,
      comment:
        'Very professional and honest experience with the company, gives very honest feedback on what suits the customer requirement and not just for the sake of closing a deal. My husband and I were really comfortable with dealing specially with the owner and we will definitely take all our real estate consultations from him',
    },
    {
      id: 17,
      name: 'Bruno Silva',
      rating: 5,
      comment:
        'Real estate agent Carla Simão is amazing! She always offers the best and most profitable real estate opportunities. I bought a property with her on Carneiros Beach in Pernambuco. The purchase has already seen a significant increase in value.',
    },
    {
      id: 4,
      name: 'Hesham walid',
      rating: 5,
      comment:
        'Recently i wanted to buy a new house in Dubai and they helped me to make the right choice, i highly recommend contacting them if you need to buy or invest in properties in Uae, thanks again for all your efforts!',
    },
    {
      id: 3,
      name: 'Shalini Jain',
      rating: 5,
      comment:
        'We have very good experience with Omar Fakhry, he has done all the departmebt paperwork on time with good quality of work and without any hassle, I highly recommend him for any real estate work.',
    },
    {
      id: 19,
      name: 'Carolina Lopes',
      rating: 4,
      comment:
        "A smooth and hassle-free experience! That's how I can describe my property acquisition journey with Carla. Everything becomes simple while she inspires confidence and professionalism.",
    },
    {
      id: 13,
      name: 'André Motinha',
      rating: 5,
      comment:
        'A great broker, very attentive and professional 👏👏👏! I really enjoyed doing business with a property in Muro Alto beach!! I received great support from the broker! …',
    },
    {
      id: 15,
      name: 'Helio Alencar',
      rating: 4,
      comment:
        "Carla's excellent service. She was objective and practical from the start. She gave us the confidence we needed to complete the transaction. I recommend it ✅",
    },
    {
      id: 18,
      name: 'Edvaldo Martins',
      rating: 5,
      comment:
        'Negotiating with Ms. Carla Simão was very smooth, clear, and straightforward! Excellent support during negotiations and after-sales service. Very satisfied!',
    },
    {
      id: 14,
      name: 'RLucas Tiberio',
      rating: 5,
      comment:
        "I purchased a property with Carla, and she was always available to answer any questions I had during the process. She's an excellent professional.",
    },
    {
      id: 12,
      name: 'Alaa Kurainy',
      rating: 5,
      comment:
        'I bought a property and Hasan badawy supported in all aspects and he was keen in each step even after the purchase he is still following up more',
    },
    {
      id: 6,
      name: 'Ammar Momani',
      rating: 5,
      comment:
        'Nothing helps more an expert advice when searching for a property. Hassan is particularly dependable and he is always available for support',
    },
    {
      id: 8,
      name: 'Abo Sattam',
      rating: 5,
      comment:
        'I had a business with company, and the experience was super. Mr Hassan Barwa is very helpful even after sale. I recommend dealing with him.',
    },
    {
      id: 5,
      name: 'Bingjie Ji',
      rating: 5,
      comment:
        "Mr.Omar very professional and responsible. It's my first time to buy the property but he is very patience.",
    },
    {
      id: 20,
      name: 'Sami Alkathiri',
      rating: 5,
      comment: 'We thank you for your punctuality and increased trust.',
    },
  ];

  get totalPages(): number {
    return Math.ceil(this.reviews.length / this.cardsPerPage);
  }

  get currentReviews() {
    const start = (this.currentPage - 1) * this.cardsPerPage;
    return this.reviews.slice(start, start + this.cardsPerPage);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  changePage(page: number) {
    this.currentPage = page;
  }
  getEndIndex(): number {
    return Math.min(this.currentPage * this.cardsPerPage, this.reviews.length);
  }
}
