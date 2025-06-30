import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterByLetterPipe } from '../Pipes/letter-by-letter.pipe';

@Component({
  selector: 'app-hero',
  imports: [CommonModule,LetterByLetterPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    private intervalId: any;
backgroundImages = [
    '/FAQ/pexels-chaitaastic-1797195-scaled.jpg',
        '/FAQ/pexels-jeshoots-com-147458-442579-scaled.jpg'
   
  ];

  currentImageIndex = 0;
  isAnimating = true;
  wasActive: boolean[] = [];

  animationDuration = 6000;

  ngOnInit() {

    this.wasActive = new Array(this.backgroundImages.length).fill(false);
    this.wasActive[0] = true;


    this.startBackgroundCycle();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startBackgroundCycle() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.animationDuration);
  }

  nextImage() {

    this.wasActive[this.currentImageIndex] = true;


    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;


    setTimeout(() => {
      this.wasActive = new Array(this.backgroundImages.length).fill(false);
      this.wasActive[this.currentImageIndex] = true;
    }, 1000);
  }

  setCurrentImage(index: number) {
    if (index !== this.currentImageIndex) {
      this.wasActive[this.currentImageIndex] = true;
      this.currentImageIndex = index;


      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.startBackgroundCycle();
      }

      setTimeout(() => {
        this.wasActive = new Array(this.backgroundImages.length).fill(false);
        this.wasActive[this.currentImageIndex] = true;
      }, 1000);
    }
  }
}
