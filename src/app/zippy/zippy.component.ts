import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'zippy',
  standalone: true,
  imports: [],
  //templateUrl: './zippy.component.html',
  template: `
  <p style="border-color: chartreuse; border-style: dashed; ">zippy works!</p>
  <div class="zippy" style="border-color: chartreuse; border-style: dashed; padding: 5px;-">
    <div (click)="toggle()"  style="border-color: blue; border-style: dashed; padding: 5px; margin: 10px;">
    Toogle
  </div>
    <div [hidden]="!visible"  style="border-color: blue; border-style: dashed; padding: 5px; margin: 10px;">
    Div content to always toggle 
      <h2 style="border-color: brown; border-style: dashed; padding: 5px">
      Title h2 with ng-content tag!
      <ng-content style="border-color: darkred; border-style: dashed; padding: 10px margin: 10px">
    </ng-content>
    </h2>
    </div>
 </div>`,
  styleUrl: './zippy.component.css'
})
export class Zippy {

  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}
