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

const routes: Routes = [
  {path:'',component:IndexpageComponent,children:[
    {path:'adminlogin',component:LoginComponent},
    {path:'home',component:HomepageComponent},
    {path:'userlogin',component:UserloginComponent},
    {path:'register',component:RegisterComponent}]},
    {path:'adminhome',component:AdminhomeComponent,children:[
      {path:'photoprice',component:PhotopriceComponent},
      {path:'viewphoto',component:ViewphotoComponent}
    ]}
  
  
]

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
