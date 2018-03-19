import { Component, OnInit } from '@angular/core';
import { UploadTService } from '../services/upload-t.service';
import { Router } from '@angular/router';

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
  food: ''
};
step = 1;

constructor(private upload: UploadTService, private router: Router ) { }
nextStep() {
  this.step++;
};

submitTrip() {
  this.upload.uploadTrip(this.Trip)
  .subscribe();
}


ngOnInit() {
  }

}
