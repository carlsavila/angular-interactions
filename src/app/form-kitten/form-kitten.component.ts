import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/kitten';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-kitten',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-kitten.component.html',
  styleUrl: './form-kitten.component.css'
})
export class FormKittenComponent {

  kittenId: number = 0;
  kittenName: string = "";
  kittenRace: string = "";
  kittenAge: Date = new Date();
  kittenImage: string = "";

  // New kitten object to send to create-kitten
  newKitten?: Kitten;
  // EventEmitter to create kitten
  @Output()
  newKittenDataToChange: EventEmitter<Kitten> = new EventEmitter();

  // change Button color on submit
  btnStyle!: string;
  onSubmit(myForm: NgForm): void {
    console.log("Submit du formulaire ajoute le chaton à la collection")
    console.log("Le bouton du formulaire change de couleur pour montrer que le formulaire est valide");
    this.newKitten = new Kitten(
      this.kittenName,
      this.kittenRace,
      this.kittenAge,
      this.kittenImage);

    this.newKittenDataToChange.emit(this.newKitten);

    myForm.onReset()
  }
}
