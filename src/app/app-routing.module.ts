import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexpageComponent } from './admin/indexpage/indexpage.component';
import { LoginComponent } from './admin/login/login.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { RegisterComponent } from './user/register/register.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { PhotopriceComponent } from './admin/photoprice/photoprice.component';
import { ViewphotoComponent } from './admin/viewphoto/viewphoto.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { UserrequestComponent } from './admin/userrequest/userrequest.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { UserphotoComponent } from './user/userphoto/userphoto.component';
import { UploadphotosComponent } from './user/uploadphotos/uploadphotos.component';
import { RequeststatusComponent } from './user/requeststatus/requeststatus.component';

const routes: Routes = [
  {
    path: '', component: IndexpageComponent, children: [
      { path: 'adminlogin', component: LoginComponent },
      { path: 'home', component: HomepageComponent },
      { path: 'userlogin', component: UserloginComponent },
      { path: 'register', component: RegisterComponent }]
  },
  {
    path: 'adminhome', component: AdminhomeComponent, children: [
      { path: 'photoprice', component: PhotopriceComponent },
      { path: 'viewphoto', component: ViewphotoComponent },
      { path: 'userdetails', component: UserDetailsComponent },
      { path: 'userrequest', component: UserrequestComponent }
    ]
  },
  {
    path: 'userhome', component: UserhomeComponent, children: [
      { path: 'userprofile', component: UserprofileComponent },
      { path: 'userphoto', component: UserphotoComponent },
      { path: 'upload', component: UploadphotosComponent },
      { path: 'request', component: RequeststatusComponent }
    ]
  }


]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
