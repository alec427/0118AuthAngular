import { Routes } from '@angular/router'

import { AppComponent } from '../app.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from '../my-private-page/my-private-page.component';
import { ProfileComponent } from '../profile/profile.component';
import { CreatorComponent } from '../creator/creator.component';
import { MytripComponent } from '../mytrip/mytrip.component';




export const routes:Routes = [
    //{path: '', redirect: 'home', }
    {path:"login" , component:AuthLoginComponent},
    {path:"signup" , component:AuthSignupComponent},
    {path:"private", component:MyPrivatePageComponent},
    {path:"profile", component:ProfileComponent},
    {path:"creator", component: CreatorComponent},
    {path:"dashboard", component: MytripComponent}


]