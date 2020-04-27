import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut,
} from "./carousel.animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }} )]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: string | any[];

  currentSlide = 0;

  constructor() { 
    console.log(this.slides);
  }

  onPreviousClick() {
    console.log(this.slides);
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    console.log(this.slides);
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
  }

}
