import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
Trip = {
  housing: '',
  transport: '',
  hours: '',
  food: ''};
step = 1;

constructor() { }
nextStep() {
  this.step++;
  console.log(this.Trip)
};


ngOnInit() {
  }

}
