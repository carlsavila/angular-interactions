import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-kitten-card',
  standalone: true,
  imports: [],
  templateUrl: './kitten-card.component.html',
  styleUrl: './kitten-card.component.css'
})
export class KittenCardComponent {

  @Input()
  kittenCard!: Kitten;
  
/*  // for test purpose. 
    kittenCard: Kitten = new Kitten (
    "titou en dure",
    "pédigry",
    new Date(),
    "https://img.freepik.com/free-photo/close-up-kittens-exploring-nature_23-2150782397.jpg?t=st=1716318036~exp=1716321636~hmac=2b23bc9eeeaf697d7f7d936ba165a41bfdb606ab032753e4ccd0cb423728e775&w=1060"
  ) */
}
