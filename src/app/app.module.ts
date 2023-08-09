import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { RouterModule } from '@angular/router';
import { FilterLocationsPipe } from './filter-locations.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    RegistrationSuccessComponent,
    HomePageComponent,
    HomeDetailsComponent,
    FilterLocationsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
