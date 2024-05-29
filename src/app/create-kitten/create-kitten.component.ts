import { Component, EventEmitter, Output } from '@angular/core';
import { FormKittenComponent } from '../form-kitten/form-kitten.component';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormKittenComponent],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {

  toReceiveNewKitten!: Kitten;
  //Préparing @Output to send the recieved kitten to list-kitten'list
  @Output()
  createKittenEmitter: EventEmitter<Kitten> = new EventEmitter();


  gettingNewKitten (event: Kitten) {
    console.log("receiving new created kitten got from form-kitten");
    this.toReceiveNewKitten = event;
    // sending new received kitten to list-kitten
    this.createKittenEmitter.emit(event);
  }

  // To send the shared above Kittens List
  sendKittenToAvailabeKittenList(): void {
    console.log("Sending Avalaible Kettins List to Parents")

  }
}
