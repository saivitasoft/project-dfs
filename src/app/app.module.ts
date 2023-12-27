import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexpageComponent } from './admin/indexpage/indexpage.component';
import { LoginComponent } from './admin/login/login.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { RegisterComponent } from './user/register/register.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { PhotopriceComponent } from './admin/photoprice/photoprice.component';
import { ViewphotoComponent } from './admin/viewphoto/viewphoto.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { UserrequestComponent } from './admin/userrequest/userrequest.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserphotoComponent } from './user/userphoto/userphoto.component';
import { UploadphotosComponent } from './user/uploadphotos/uploadphotos.component';
import { RequeststatusComponent } from './user/requeststatus/requeststatus.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexpageComponent,
    LoginComponent,
    UserloginComponent,
    RegisterComponent,
    HomepageComponent,
    PhotopriceComponent,
    ViewphotoComponent,
    UserDetailsComponent,
    UserrequestComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserprofileComponent,
    UserphotoComponent,
    UploadphotosComponent,
    RequeststatusComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
