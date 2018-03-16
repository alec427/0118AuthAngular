import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = "";
  secret: string = "";
  updatedUser = {
    username: ''
  };
  updateBoolean = false;
  constructor(private sessionS: SessionService, private router : Router) { }


  ngOnInit() {
    this.sessionS.loggedIn()
      .subscribe(user => {
        console.log(user)
        this.secret = user.secret;
        this.username = user.username;
      });
  }
  delete() {
    this.sessionS.loggedIn().subscribe(user => 
      this.sessionS.delete(user._id)
      .subscribe(res => this.router.navigate(['../signup'])));
  }

  update() {
    this.sessionS.loggedIn().subscribe(user => 
      this.sessionS.update(this.updatedUser, user._id)
      .subscribe(res => this.router.navigate(['../'])));
  }

  actEdit() {
    if (!this.updateBoolean) {
    this.updateBoolean = true;
    } else {
      this.updateBoolean = false;
    }
  }
}
