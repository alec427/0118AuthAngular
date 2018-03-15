import { Component, OnInit } from '@angular/core';
import { SessionService } from "../services/session.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = "";
  secret: string = "";

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.session.loggedIn()
      .subscribe(user => {
        console.log(user)
        this.secret = user.secret;
        this.username = user.username;
      });
  }
}
