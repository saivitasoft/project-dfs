import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexpageComponent } from './admin/indexpage/indexpage.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexpageComponent,
    LoginComponent,
    RegisterComponent,
    UserloginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
