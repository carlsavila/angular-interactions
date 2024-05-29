import { Component, inject } from '@angular/core';
import { Kitten } from '../models/kitten';
import { KittenCardComponent } from '../kitten-card/kitten-card.component';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';
import { KittenService } from '../service/kitten.service';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [KittenCardComponent, CreateKittenComponent, UserKittenComponent],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {
  // kitten service
  private kittenService: KittenService = inject(KittenService);


  // List to welcome new added Kittens. 
  availableKittens: Kitten[] = [];

  ngOnInit() {
    this.availableKittens = this.kittenService.kittens;
  }
  // To add new received kitten from create-kitten @Output, sent by the form-kitten
  addNewReceivedKitten(event: Kitten) {
    console.log("adding new received created kitten by create-kitten received by simultaneously the form-kitten")
    this.availableKittens.push(event);
  }

  // List to Manage Users adopted  Kittens. 
  userAdoptedKittens: Kitten[] = [];

  deletedElement!: Kitten[];
  //to send adopted kitten to user
  sendAdoptedKittenToUser(id: number) {
    console.log(`Sent adopted kitten id : ${id} to user`)
    /*
        // PI:  Méthode find kitten
        const kittenToGiveToUser = this.availableKittens.find(
          (sentkitten) => sentkitten.id === id
        );
    */
    // Méthode mapping kitten
    this.availableKittens.map(
      (kittenElement: Kitten) => {
        if (kittenElement.id === id) {
          console.log(`Matched kitten ID : ${id} to send to user kitten list`);
          this.userAdoptedKittens.push(kittenElement);
          console.log(`kitten pushed : ${kittenElement.name, kittenElement.id}`);

          const indexOfItem = this.availableKittens.indexOf(kittenElement);
          console.log(`Index : ${indexOfItem} of retrived kitten to remove available kittens list`);
          // delete from list
          this.deletedElement = this.availableKittens.splice(indexOfItem, 1)
          console.log(`Result from deleting kitten : ${this.deletedElement}`);
        }
      })
  }
}
