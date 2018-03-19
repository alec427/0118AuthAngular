import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from './services/session.service';


import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';


import { routes } from './routes/app.routing'
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CreatorComponent } from './creator/creator.component';
import { UploadTService } from './services/upload-t.service';
import { MytripComponent } from './mytrip/mytrip.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent,
    ProfileComponent,
    CreatorComponent,
    MytripComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, UploadTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
