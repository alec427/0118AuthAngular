import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { SessionService } from './services/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private sessionS : SessionService, private router : Router) { }
  logout() {
    this.sessionS.logout()
    .subscribe(res => this.router.navigate(['login']));
  }

}
