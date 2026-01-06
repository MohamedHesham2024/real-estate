import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

@Component({
  selector: 'app-our-team',
  imports: [CommonModule, LetterByLetterPipe],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css',
})
export class OurTeamComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Hassan Badawy',
      role: 'Sales Manager',
      bio: 'With over 15 years of experience across the GCC region as an engineer, I transitioned into the real estate sector in 2019 and have since established a top notch records in sales as top performer most of the times for the companies i joined . By 2024 , I  operated my own real estate company in Dubai. Over the past 6 years, I have successfully sold several hundred residential units to a diverse client base, working with nearly every major developer in the market. My expertise spans a wide range of property types and price points, allowing me to provide tailored solutions for both investors and end-users. My deep understanding of the Dubai real estate landscape, combined with my engineering background, enables me to offer strategic insights and exceptional service to clients.',
      image: '/our-team/hassan Badawy.jpg',
      specialty: 'Sales Manager ',
    },
    {
      id: 2,
      name: 'Omar Fakhry',
      role: 'Investment Advisor',
      bio: 'With over 8 years of experience in the real estate industry across Egypt and Dubai, I specialize in off-plan properties and investment-focused opportunities. Throughout my career, I’ve closed over AED 100 million in sales, helping clients secure high-yield assets and future-ready homes in some of the region’s most competitive markets. My deep market knowledge, strong negotiation skills, and commitment to transparent guidance have allowed me to build lasting relationships and consistently exceed client expectations.',
      image: '/our-team/omar.jpeg',
      specialty: 'Investment Advisor',
    },
    {
      id: 3,
      name: 'Naeem Abuomar',
      role: 'Property Consultant',
      bio: 'I started my sales career at the age of 15, gaining more than 13 years of hands-on experience in various sales fields. Over the last 2.5 years, I have specialized in real estate, helping clients secure the best investment opportunities and homes across Dubai. My journey has built a strong foundation in negotiation, client relationship management, and closing deals, which I continuously leverage to exceed targets and deliver exceptional service.',
      image: '/our-team/Naeem Abuomar.JPG',
      specialty: 'Property Consultant',
    },

    {
      id: 4,
      name: 'Doline Ote',
      role: 'Property Consultant',
      bio: 'With over six years of hands-on experience in Dubai’s fast-evolving real estate market, I bring in-depth knowledge of property sales, leasing, and client relationship management. Fluent in both English and French, I have successfully assisted a wide range of international clients in finding the right property solutions — whether for investment or end-use. My approach is built on transparency, personalized guidance, and a strong commitment to long-term client satisfaction, helping every buyer or investor navigate the Dubai property landscape with confidence.',
      image: '/our-team/Doline.jpeg',
      specialty: 'Property Consultant',
    },
  ];
}
