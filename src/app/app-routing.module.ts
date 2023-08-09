import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration-successfull', component: RegistrationSuccessComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'home-details/:location/:city',component:HomeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
