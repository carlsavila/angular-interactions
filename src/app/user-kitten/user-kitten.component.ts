import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten';
import { KittenCardComponent } from '../kitten-card/kitten-card.component';
import { ListKittenComponent } from '../list-kitten/list-kitten.component';

@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [KittenCardComponent, ListKittenComponent],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css'
})
export class UserKittenComponent {

  // List to welcome adopted kitten by user.
  @Input()
  userAdoptedKittenList!: Kitten[];

  // temporary kitten for verication
  @Input()
  kittenFromKittenList!: Kitten;

}
